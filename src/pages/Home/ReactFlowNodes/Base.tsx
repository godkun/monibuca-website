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
import m7s from './type/Monibuca'
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
    <div className="nowheel" style={{ width: 500, height: 450 }}>
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
            segmented,
            m7s
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
      {`package main

import (
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
  const [selectedName, setSelectedName] = React.useState(ctx.configs ? ctx.configs[0] : 'main.go')
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
      <Card
        style={{ width: 500, height: 430 }}
        size="small"
        tabList={['main.go']
          .concat(ctx.configs ? Object.keys(ctx.configs) : ['config.yaml'])
          .map(name => ({
            key: name,
            tab: name
          }))}
        onTabChange={name => {
          setSelectedName(name)
          if (ctx.configs) setSelectedConfig(ctx.configs[name])
        }}
      >
        {selectedName === 'main.go' ? main : config}
      </Card>
    </Space>
  )
})
