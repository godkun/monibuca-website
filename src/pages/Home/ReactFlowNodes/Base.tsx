import React, { memo } from 'react'
import ReactFlow, { Background } from 'reactflow'
import 'rc-banner-anim/assets/index.css'
import 'reactflow/dist/style.css'
import stream from './type/Stream'
import plugin from './type/Plugin'
import player from './type/Player'
import source from './type/Source'
import remote from './type/Remote'
import segmented from './type/Segmented'
import { TagNode as tagNode } from './type/Tag'
import { Tabs, Card, Space, Segmented } from 'antd'
import Highlight from 'react-highlight'
import { FlowContext, StreamContext } from './Node'

export default memo<{ ctx: FlowContext }>(function Base({ ctx }) {
  ctx.pluginState = React.useState(Array.from(ctx.plugins))
  ctx.nodeState = React.useState(ctx.nodes)
  ctx.edgeState = React.useState(ctx.edges)
  ctx.streamState = React.useState('live/test')
  ctx.configState = React.useState(ctx.config)
  const graph = (
    <div style={{ width: 500, height: 500 }}>
      <StreamContext.Provider value={ctx.state.stream}>
        <ReactFlow
          nodesConnectable={false}
          connectOnClick={false}
          autoPanOnNodeDrag={false}
          autoPanOnConnect={false}
          panOnDrag={false}
          // draggable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          nodes={ctx.state.nodes}
          proOptions={{
            hideAttribution: true
          }}
          nodeTypes={{
            plugin,
            stream,
            player,
            source,
            remote,
            tagNode,
            segmented
          }}
          edges={ctx.state.edges}
        >
          <Background color="#ccc" variant="dots" />
        </ReactFlow>
      </StreamContext.Provider>
    </div>
  )
  const main = (
    <Highlight language="go">
      {`import (
  "context"
  "m7s.live/engine/v4"
${ctx.state.plugins.map(plugin => `  _ "m7s.live/plugin/${plugin}/v4"`).join('\n')}
)
func main() {
  engine.Run(context.Background(), "config.yaml")
}`}
    </Highlight>
  )
  const [selectedConfig, setSelectedConfig] = React.useState(ctx.state.config)
  const [selectedName, setSelectedName] = React.useState(ctx.configs ? ctx.configs[0] : '')
  const config = <Highlight language="yaml">{selectedConfig || `//无需配置`}</Highlight>
  if (ctx.isMobile) {
    return (
      <Tabs
        items={[
          {
            label: '可视化',
            key: '0',
            children: graph
          },
          {
            label: 'config.yaml',
            key: '1',
            children: config
          },
          {
            label: 'main.go',
            key: '2',
            children: main
          }
        ]}
      ></Tabs>
    )
  }
  return (
    <Space direction="horizontal" style={{ width: '100%' }} align="start">
      {graph}
      <Space direction="vertical">
        <Card size="small" title="启动源码：main.go">
          {main}
        </Card>
        <Card
          size="small"
          title="配置文件：config.yaml"
          extra={
            ctx.configs ? (
              <Segmented
                options={Object.keys(ctx.configs)}
                value={selectedName}
                onChange={name => {
                  setSelectedName(name)
                  setSelectedConfig(ctx.configs[name])
                }}
              />
            ) : null
          }
        >
          {config}
        </Card>
      </Space>
    </Space>
  )
})
