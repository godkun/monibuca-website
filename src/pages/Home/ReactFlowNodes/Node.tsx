import React, { createContext, memo } from 'react'
import { Edge, Node } from 'reactflow'
export const StreamContext = createContext('live/test')
export const defaultM7sNode = (isMobile: boolean) => [
  {
    id: 'm7s',
    type: 'group',
    position: { x: isMobile ? 0 : 50, y: 130 },
    zIndex: -1,
    style: {
      width: isMobile ? 380 : 400,
      height: 120,
      backdropFilter: 'blur(10px)',
      background: 'gray'
    },
    data: {}
  },
  {
    id: 'note',
    type: 'default',
    position: { x: 0, y: 0 },
    parentNode: 'm7s',
    data: { label: 'm7s 192.168.1.1' },
    className: 'annotation'
  }
]
export interface NodeData {
  container?: NodeContainer
  title?: string
  protocol?: string
  protocols?: string[]
}
export class FlowContext {
  ncs = new Map<string, NodeContainer>()
  ecs = new Map<string, EdgeContainer>()
  plugins = new Set<string>()
  config = ''
  setNodes?: React.Dispatch<React.SetStateAction<Node[]>>
  setEdges?: React.Dispatch<React.SetStateAction<Edge[]>>
  setPlugins?: React.Dispatch<React.SetStateAction<string[]>>
  setConfig?: React.Dispatch<React.SetStateAction<string>>
  state: {
    nodes: Node[]
    edges: Edge[]
    plugins: string[]
    config: string
  } = {
    nodes: [],
    edges: [],
    plugins: [],
    config: ''
  }
  constructor(...nodes: Node[]) {
    nodes.forEach(n => this.addNode(n))
  }
  pipe(...nodes: (Node | NodeContainer)[]) {
    nodes.reduce(
      (prev: NodeContainer, curr) =>
        prev.connect(curr instanceof NodeContainer ? curr : new NodeContainer(curr, this)),
      nodes[0] instanceof NodeContainer ? nodes[0] : new NodeContainer(nodes[0], this)
    )
    return this
  }
  set pluginState([plugins, setPlugins]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ]) {
    this.setPlugins = setPlugins
    this.state.plugins = plugins
  }
  set nodeState([nodes, setNodes]: [Node[], React.Dispatch<React.SetStateAction<Node[]>>]) {
    this.setNodes = setNodes
    this.state.nodes = nodes
  }
  set edgeState([edges, setEdges]: [Edge[], React.Dispatch<React.SetStateAction<Edge[]>>]) {
    this.setEdges = setEdges
    this.state.edges = edges
  }
  set configState([config, setConfig]: [string, React.Dispatch<React.SetStateAction<string>>]) {
    this.setConfig = setConfig
    this.state.config = config
  }
  addNode(node: Node) {
    new NodeContainer(node, this)
    return this
  }
  get nodes() {
    return Array.from(this.ncs.values()).map(n => n.data)
  }
  get edges() {
    return Array.from(this.ecs.values()).map(n => n.data)
  }
  _updateNodes() {
    this.setNodes?.(this.nodes)
  }
  _updateEdges() {
    this.setEdges?.(this.edges)
  }
  _updatePlugins() {
    this.plugins.clear()
    this.ncs.forEach(n => n.plugin && this.plugins.add(n.plugin))
    this.setPlugins?.(Array.from(this.plugins))
  }
  updateNode(key: string | NodeContainer, data?: object) {
    const node = typeof key === 'string' ? this.ncs.get(key) : key
    if (!node) return
    if (data) node.data = { ...node.data, ...data }
    this._updateNodes()
  }
  updateNodeData(key: string | NodeContainer, data?: object) {
    const node = typeof key === 'string' ? this.ncs.get(key) : key
    if (!node) return
    if (data) node.data = { ...node.data, data: { ...node.data.data, ...data } }
    this._updateNodes()
  }
  updateEdge(key: string | EdgeContainer, data?: object) {
    const edge = typeof key === 'string' ? this.ecs.get(key) : key
    if (!edge) return
    if (data) edge.data = { ...edge.data, ...data }
    this._updateEdges()
  }
  updateEdgeData(key: string | EdgeContainer, data?: object) {
    const edge = typeof key === 'string' ? this.ecs.get(key) : key
    if (!edge) return
    if (data) edge.data = { ...edge.data, data: { ...edge.data.data, ...data } }
    this._updateEdges()
  }
}

export class NodeContainer {
  inputEdge?: EdgeContainer
  next: NodeContainer[] = []
  plugin?: string
  stream = 'live/test'
  url?: string
  onChangeProtocol?: (protocol: string) => void
  constructor(
    public data: Node,
    public context: FlowContext
  ) {
    if (!this.data.data) this.data.data = {}
    this.data.data.container = this
    context.ncs.set(data.id, this)
    context._updateNodes()
  }
  connect(target: NodeContainer) {
    this.next.push(target)
    target.inputEdge = new EdgeContainer(this, target, this.context)
    return target
  }
  protocol2url(protocol: string) {
    const stream = this.stream
    switch (protocol) {
      case 'ws-h265':
        return `ws://192.168.1.1:8080/${stream}.h265`
      case 'http-h265':
        return `http://192.168.1.1:8080/${stream}.h265`
      case 'ws-flv':
        return `ws://192.168.1.1:8080/${stream}.flv`
      case 'http-flv':
        return `http://192.168.1.1:8080/${stream}.flv`
      case 'ws-raw':
        return `ws://192.168.1.1:8080/${stream}`
      case 'webrtc':
        return `http://192.168.1.1:8080/webrtc/push/${stream}`
      case 'webtransport':
        return `https://local.monibuca.com:8081/webtransport/push/${stream}`
      case 'rtmp':
        return `rtmp://192.168.1.1/${stream}`
      case 'rtsp':
        return `rtsp://192.168.1.1/${stream}`
      case 'hls':
      case 'llhls':
        return `http://192.168.1.1:8080/hls/${stream}.m3u8`
      case 'fmp4':
        return `http://192.168.1.1:8080/fmp4/${stream}.mp4`
      default:
    }
  }
  update(data: object) {
    this.context.updateNode(this, data)
  }
  updateData(data: object) {
    this.context.updateNodeData(this, data)
  }
  changePlugin(plugin: string) {
    this.plugin = plugin
    this.context._updatePlugins()
  }
  changeProtocol(protocol: string) {
    this.updateData({ protocol })
    this.changePlugin(protocol2plugin[protocol] || protocol)
    this.onChangeProtocol?.(protocol)
  }
}
const pusherProtocol = {
  ffmpeg: ['rtmp', 'rtsp'],
  obs: ['rtmp', 'webrtc'],
  无人机: ['rtmp'],
  remote: ['rtmp', 'rtsp'],
  browser: ['webrtc']
} as const

const ToolSelector = memo<{ container: PusherContainer }>(function ({ container }) {
  return (
    <select
      onChange={event => {
        const v = event.target.value as keyof typeof pusherProtocol
        container.updateData({ tool: v, protocols: pusherProtocol[v] })
        if (pusherProtocol[v][0] !== container.data.data.protocol) {
          container.changeProtocol(pusherProtocol[v][0])
        }
      }}
      style={{ width: 70, border: 'none', color: 'white', background: 'violet' }}
    >
      {Object.keys(pusherProtocol).map(type => (
        <option value={type} selected={container.data.data.tool === type}>
          {' '}
          {type}{' '}
        </option>
      ))}
    </select>
  )
})

const sourceTypes = {
  远端服务器: ['rtmp', 'rtsp', 'hls', 'http-flv'],
  监控: ['gb28181', 'onvif'],
  录像文件: ['flv', 'm3u8', 'mp4', 'raw']
} as const

const SourceTypeSelector = memo<{ container: PullerContainer }>(function ({ container }) {
  return (
    <select
      onChange={event => {
        const v = event.target.value as keyof typeof sourceTypes
        container.updateData({ tool: v, protocols: sourceTypes[v] })
        if (sourceTypes[v][0] !== container.data.data.protocol) {
          container.changeProtocol(sourceTypes[v][0])
        }
      }}
      style={{ width: 100, border: 'none', color: 'white', background: 'violet' }}
    >
      {Object.keys(sourceTypes).map(type => (
        <option value={type} selected={container.data.data.tool === type}>
          {' '}
          {type}{' '}
        </option>
      ))}
    </select>
  )
})

export class SourceContainer extends NodeContainer {
  changeProtocol(protocol: string): void {
    this.url = this.protocol2url(protocol)
    super.changeProtocol(protocol)
    this.next.forEach(n => {
      n.updateData({ name: this.plugin })
      n.inputEdge?.update({ label: this.url })
    })
  }
}
export class PusherContainer extends SourceContainer {
  constructor(
    public data: Node,
    public context: FlowContext
  ) {
    super(data, context)
    this.data.data.protocols = pusherProtocol[data.data.tool]
    this.data.data.extra = <ToolSelector container={this} />
  }
}

export class PullerContainer extends SourceContainer {
  constructor(
    public data: Node,
    public context: FlowContext
  ) {
    super(data, context)
    this.data.data.protocols = sourceTypes[data.data.tool]
    this.data.data.extra = <SourceTypeSelector container={this} />
  }
  changePlugin(plugin: string) {
    super.changePlugin(plugin)
    switch (plugin) {
      case 'gb28181':
        this.context.config = `${this.plugin}:
  sipip: 192.168.1.1
  mediaip:  192.168.1.1`
        break
      case 'onvif':
        this.context.config = `${this.plugin}:
  interfaces: # 设备发现指定网卡
    - interfacename: eth0  # 网卡名称
      username: admin # onvif 账号
      password: admin # onvif 密码`
        break
      case 'record':
        this.context.config = ''
        break
      default:
        this.context.config = `${this.plugin}:
  pull:
    pullonstart:
      ${this.stream}: ${this.url}`
    }
    this.context.setConfig?.(this.context.config)
  }
  protocol2url(protocol: string) {
    const stream = this.stream
    switch (protocol) {
      case 'flv':
      case 'm3u8':
      case 'mp4':
        return './record/live/test.' + protocol
      case 'raw':
        return './record/live/test.h265'
      case 'http-flv':
        return 'http://local.cloud.dev/path.flv'
      case 'rtmp':
        return 'rtmp://local.cloud.dev/path'
      case 'rtsp':
        return 'rtsp://local.cloud.dev/path'
      case 'hls':
      case 'llhls':
        return `http://local.cloud.dev/path.m3u8`
      default:
        return super.protocol2url(protocol)
    }
  }
}
export class PlayerContainer extends NodeContainer {
  protocol2url(protocol: string) {
    const stream = this.stream
    switch (protocol) {
      case 'webrtc':
        return `http://192.168.1.1:8080/webrtc/play/${stream}`
      case 'webtransport':
        return `https://local.monibuca.com:8081/webtransport/play/${stream}`
      default:
        return super.protocol2url(protocol)
    }
  }
  changeProtocol(protocol: string): void {
    this.url = this.protocol2url(protocol)
    super.changeProtocol(protocol)
    this.inputEdge?.source.updateData({ name: this.plugin })
    this.inputEdge?.update({ label: this.url })
  }
}

export class PushOutContainer extends PlayerContainer {
  changePlugin(plugin: string) {
    this.plugin = plugin == 'm7s' ? 'rtmp' : 'cdn'
    this.context._updatePlugins()
    this.context.config =
      plugin == 'm7s'
        ? `${this.plugin}:
  push:
    pushlist:
      ${this.stream}: ${this.url}`
        : `${this.plugin}:
  target:
    - host: ${this.url}`
    this.context.setConfig?.(this.context.config)
  }

  protocol2url(protocol: string) {
    const stream = this.stream
    switch (protocol) {
      case 'm7s':
        return 'rtmp://test.monibuca.com/path'
      default:
        return 'rtmp://aliyunlive.droolx.cn/path'
    }
  }
}

export class EdgeContainer {
  data: Edge
  constructor(
    public source: NodeContainer,
    public target: NodeContainer,
    public context: FlowContext
  ) {
    this.data = {
      id: `${source.data.id}-${target.data.id}`,
      source: source.data.id,
      target: target.data.id,
      labelBgStyle: { fill: 'black', opacity: 0.3 },
      labelStyle: { fill: 'white' },
      animated: true,
      style: { stroke: 'cyan', strokeWidth: 3 }
    }
    context.ecs.set(this.data.id, this)
    context._updateEdges()
  }
  update(data: object) {
    this.context.updateEdge(this, data)
  }
  updateData(data: object) {
    this.context.updateEdgeData(this, data)
  }
}
export const protocol2plugin = {
  'ws-h265': 'jessica',
  'http-h265': 'jessica',
  'ws-flv': 'jessica',
  'http-flv': 'hdl',
  'ws-raw': 'jessica',
  flv: 'record',
  m3u8: 'record',
  mp4: 'record',
  raw: 'record'
} as const
