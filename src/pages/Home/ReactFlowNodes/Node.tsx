import React, { createContext, memo } from 'react'
import { Edge, Node } from 'reactflow'
export const StreamContext = createContext('live/test')
export const defaultM7sNode = (isMobile: boolean) => [
  {
    id: 'm7s',
    type: 'm7s',
    position: { x: 300, y: 80 },
    zIndex: -1,
    style: {
      width: 200,
      height: 352,
      backdropFilter: 'blur(10px)'
    },
    data: {}
  }
]
export interface NodeData {
  container?: NodeContainer
  title?: string
  protocol?: string
  protocols?: string[]
}
export class FlowContext {
  isMobile: boolean
  ncs = new Map<string, NodeContainer>()
  ecs = new Map<string, EdgeContainer>()
  plugins = new Set<string>()
  config = ''
  configs?: { [key: string]: string }
  setNodes?: React.Dispatch<React.SetStateAction<Node[]>>
  setEdges?: React.Dispatch<React.SetStateAction<Edge[]>>
  setPlugins?: React.Dispatch<React.SetStateAction<string[]>>
  setConfig?: React.Dispatch<React.SetStateAction<string>>
  setStream?: React.Dispatch<React.SetStateAction<string>>
  state: {
    nodes: Node[]
    edges: Edge[]
    plugins: string[]
    config: string
    stream: string
  } = {
    nodes: [],
    edges: [],
    plugins: [],
    config: '',
    stream: ''
  }
  constructor({
    nodes,
    isMobile,
    sourceType = true,
    playType = true
  }: {
    nodes?: Node[]
    isMobile: boolean
    sourceType?: boolean
    playType?: boolean
  }) {
    this.isMobile = isMobile
    if (!nodes) nodes = defaultM7sNode(isMobile)
    if (sourceType) {
      nodes.push({
        id: 'sourceTypeSelector',
        type: 'segmented',
        position: { x: 0, y: 20 },
        data: {
          value: '推流',
          options: ['推流', '拉流'],
          onChange: (t: '推流' | '拉流') => {
            this.updateNodeData('sourceTypeSelector', { value: t })
            switch (t) {
              case '推流':
                {
                  const pusher = new PusherContainer(
                    {
                      id: 'source',
                      type: 'source',
                      position: { x: 0, y: 80 },
                      data: {
                        title: '推流端',
                        tool: 'ffmpeg'
                      }
                    },
                    this
                  )
                  pusher.changeProtocol('rtmp')
                }
                break
              case '拉流': {
                const puller = new PullerContainer(
                  {
                    id: 'source',
                    type: 'source',
                    position: { x: 0, y: 80 },
                    data: { title: '视频源', tool: '远端服务器' }
                  },
                  this
                )
                puller.changeProtocol('rtmp')
              }
            }
          }
        }
      })
    }
    if (playType) {
      nodes.push({
        id: 'playTypeSelector',
        type: 'segmented',
        position: { x: 0, y: 230 },
        data: {
          value: '播放',
          options: ['播放', '转推'],
          onChange: (t: '转推' | '播放') => {
            this.updateNodeData('playTypeSelector', { value: t })
            switch (t) {
              case '转推':
                {
                  const pusher = new PushOutContainer(
                    {
                      id: 'player',
                      type: 'remote',
                      position: { x: 0, y: 280 },
                      data: {}
                    },
                    this
                  )
                  pusher.changeProtocol('CDN')
                }
                break
              case '播放': {
                const player = new PlayerContainer(
                  {
                    id: 'player',
                    type: 'player',
                    position: { x: 0, y: 280 },
                    data: {}
                  },
                  this
                )
                player.changeProtocol('http-flv')
              }
            }
          }
        }
      })
    }
    nodes.forEach(n => this.addNode(n))
  }
  clear() {
    this.ecs.clear()
    this.ncs.clear()
    this._updateNodes()
    this._updateEdges()
  }
  pipe(...nodes: (Node | NodeContainer | string)[]) {
    nodes.reduce((prev, curr) => this.getContainer(prev).connect(this.getContainer(curr)))
    return this
  }
  replaceNode(node: NodeContainer) {
    const nc = this.ncs.get(node.data.id)
    this.ncs.set(node.data.id, node)
    nc?.next.forEach(n => this.pipe(node, n))
  }
  getContainer(key: Node | NodeContainer | string) {
    return key instanceof NodeContainer
      ? key
      : typeof key === 'string'
        ? this.ncs.get(key)!
        : new NodeContainer(key, this)
  }
  set pluginState([plugins, setPlugins]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ]) {
    this.setPlugins = setPlugins
    this.state.plugins = plugins
  }
  set streamState([stream, setStream]: [string, React.Dispatch<React.SetStateAction<string>>]) {
    this.setStream = setStream
    this.state.stream = stream
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
    this.ncs.forEach(n => n.data.type === 'plugin' && this.plugins.add(n.data.data.name))
    this.setPlugins?.(Array.from(this.plugins))
  }
  _updateConfig() {
    this.config = ''
    const s = new Map<string, string>()
    this.ncs.forEach(n => {
      n.config.forEach((v, k) => {
        s.set(k, s.has(k) ? s.get(k) + '\n' + v : v)
      })
    })
    s.forEach((v, k) => {
      this.config += `
${k}:${v}`
    })
    this.config = this.config.trim()
    this.setConfig?.(this.config)
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
    if ('name' in node.data.data) this._updatePlugins()
    this._updateNodes()
  }
  updateEdge(key: string | EdgeContainer, data?: Edge) {
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
  config = new Map<string, string>()
  stream = 'live/test'
  url?: string
  onChangeProtocol?: (protocol: string) => void
  constructor(
    public data: Node,
    public context: FlowContext
  ) {
    if (!this.data.data) this.data.data = {}
    this.data.data.container = this
    this.init()
  }
  init() {
    if (this.context.ncs.get(this.data.id)) {
      this.context.replaceNode(this)
    } else {
      this.context.ncs.set(this.data.id, this)
      // this.context._updateNodes()
    }
  }
  connect(target: NodeContainer) {
    this.next.push(target)
    if (target.inputEdge && this.context.ecs.get(`${this.data.id}-${target.data.id}`))
      target.inputEdge.source = this
    else target.inputEdge = new EdgeContainer(this, target, this.context)
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
    this.config.clear()
    this.context._updateConfig()
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
      style={{ width: 70 }}
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
      style={{ width: 100 }}
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
  init() {
    super.init()
    this.onChangeProtocol = protocol => {
      switch (protocol) {
        case 'gb28181':
          this.context.setStream?.('34020000001310000011/')
          this.context.updateNode('stream1', { position: { x: 2, y: 150 } })
          break
        case 'onvif':
          this.context.setStream?.('onvif/eth0/192_168_1_2_8080')
          this.context.updateNode('stream1', { position: { x: 2, y: 150 } })
          break
        default:
          this.context.setStream?.('live/test')
          this.context.updateNode('stream1', { position: { x: 50, y: 150 } })
      }
    }
  }
  changeProtocol(protocol: string): void {
    this.url = this.protocol2url(protocol)
    super.changeProtocol(protocol)
    this.updateData({ url: this.url })
    this.next.forEach(n => {
      n.updateData({ name: this.plugin })
    })
  }
}
export class PusherContainer extends SourceContainer {
  init() {
    super.init()
    this.data.data.protocols = pusherProtocol[this.data.data.tool]
    this.data.data.extra = <ToolSelector container={this} />
  }
}

export class PullerContainer extends SourceContainer {
  init() {
    super.init()
    this.data.data.protocols = sourceTypes[this.data.data.tool]
    this.data.data.extra = <SourceTypeSelector container={this} />
  }
  changePlugin(plugin: string) {
    super.changePlugin(plugin)
    switch (plugin) {
      case 'gb28181':
        this.config.set(
          plugin,
          `
  sipip: 192.168.1.1
  mediaip:  192.168.1.1`
        )
        break
      case 'onvif':
        this.config.set(
          plugin,
          `
  interfaces: # 设备发现指定网卡
    - interfacename: eth0  # 网卡名称
      username: admin # onvif 账号
      password: admin # onvif 密码`
        )
        break
      case 'record':
        break
      default:
        this.config.set(
          plugin,
          `
  pull:
    pullonstart:
      ${this.stream}: ${this.url}`
        )
    }
    this.context._updateConfig()
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
    this.updateData({ url: this.url })
    this.inputEdge?.source.updateData({ name: this.plugin })
  }
}

export class PushOutContainer extends PlayerContainer {
  changePlugin(plugin: string) {
    super.changePlugin(plugin == 'm7s' ? 'rtmp' : 'cdn')
    this.config.set(
      this.plugin!,
      plugin == 'm7s'
        ? `
  push:
    pushlist:
      ${this.stream}: ${this.url}`
        : `
  target:
    - host: ${this.url}`
    )
    this.context._updateConfig()
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
      style: { stroke: 'black', strokeWidth: 3 },
      type: source.data.parentNode != target.data.parentNode ? 'step' : 'default'
    }
    if (target.data.type !== 'stream' && target.data.data.process) {
      this.data.sourceHandle = 'processOut'
      this.data.style.strokeWidth = 1
    }
    if (source.data.type !== 'stream' && source.data.data.process) {
      this.data.targetHandle = 'processIn'
      this.data.style.strokeWidth = 1
    }
    context.ecs.set(this.data.id, this)
  }
  update(data: Edge) {
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
