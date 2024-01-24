import React, { memo } from 'react';
import ReactFlow from 'reactflow';
import 'rc-banner-anim/assets/index.css';
import 'reactflow/dist/style.css';
import * as nodeTypes from './index';
import { Tabs, Card, Space } from 'antd';
import Highlight from 'react-highlight';
export default function Base(props) {
  const graph = (<div style={{ width: 500, height: 500 }}><ReactFlow
    nodesConnectable={false}
    connectOnClick={false}
    autoPanOnNodeDrag={false}
    autoPanOnConnect={false}
    panOnDrag={false}
    draggable={false}
    zoomOnScroll={false}
    panOnScroll={false}
    zoomOnPinch={false}
    zoomOnDoubleClick={false}
    nodes={props.nodes}
    nodeTypes={nodeTypes}
    edges={props.edges} /></div>);
  const main = <Highlight language='go'>
    {`import (
  "context"
  "m7s.live/engine/v4"
${props.plugins.map(plugin => `  _ "m7s.live/plugin/${plugin}/v4"`).join('\n')}
)
func main() {
  engine.Run(context.Background(), "config.yaml")
}`}

  </Highlight>;
  const config = <Highlight language='yaml'>
    {
      props.config || `//无需配置`
    }
  </Highlight>;
  if (props.isMobile) {
    return (
      <Tabs
        items={[
          {
            label: '可视化',
            key: '0',
            children: graph
          }, {
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
      >
      </Tabs>
    );
  }
  return (
    <Space direction="horizontal" style={{ width: "100%" }} align='start'>
      {graph}
      <Space direction="vertical">
        <Card size='small' title="启动源码：main.go">
          {main}
        </Card>
        <Card size='small' title="配置文件：config.yaml">
          {config}
        </Card>
      </Space>
    </Space>
  );
}