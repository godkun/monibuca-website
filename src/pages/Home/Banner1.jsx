import React, { memo } from 'react';
import ReactFlow from 'reactflow';
import 'rc-banner-anim/assets/index.css';
import 'reactflow/dist/style.css';
import * as nodeTypes from './ReactFlowNodes';
import { Select } from 'antd';
const urls = {
  rtmp: 'rtmp://localhost/live/test',
  rtsp: 'rtsp://localhost/live/test',
  webrtc: 'http://localhost:8080/webrtc/push/live/test'
};
export default memo(function (props) {
  const { dataSource, isMobile } = props;
  const { presets, defaultPreset, wrapper } = dataSource;
  const [preset, setPreset] = React.useState(defaultPreset);
  const options = [];
  const pusherNode = {
    id: 'pusher', type: 'pusher', position: { x: 0, y: 80 }, data: {
      onChangeProtocol(protocol) {
        setEdges(edges => edges.map(edge => {
          if (edge.source === 'pusher') {
            return { ...edge, label: urls[protocol] };
          } else {
            return edge;
          }
        }));
      }
    }
  };
  const initialNodes = [
    { id: 'm7s', type: 'group', position: { x: 300, y: 80 }, zIndex: -1, style: { width: 500, height: 500, backdropFilter: 'blur(10px)' } },
    {
      id: 'acceptPush', type: 'acceptPush', position: { x: 10, y: 10 }, parentNode: 'm7s', extent: 'parent', data: {
        enableChanged(v) {
          if (v) setNodes(nodes => [...nodes, pusherNode]);
          else setNodes(nodes => nodes.filter(node => node.id !== 'pusher'));
          setCustom({ ...custom, acceptPush: { ...this, enabled: v } });
          setPreset('custom');
        }
      }
    },
    pusherNode,
  ];
  const initialEdges = [{ id: 'pusher-acceptPush', source: 'pusher',  labelBgStyle:{ fill: 'black',opacity:0.5 }, labelStyle: { fill: 'white',transform:"translate(0,10)" }, animated: true, target: 'acceptPush', style: { stroke: 'cyan', strokeWidth: 3 },label:urls['rtmp'] }];
  const initNodes = node => {
    const p = presets[preset][node.id] || {};
    const initNode = {
      ...node, data: {
        ...p,
        ...node.data
      }
    };
    return initNode;
  };
  const [nodes, setNodes] = React.useState(initialNodes.map(initNodes));
  const [edges, setEdges] = React.useState(initialEdges);
  const [custom, setCustom] = React.useState({});//{acceptPush:{port:1234,enabled:true}
  for (const name in presets) {
    options.push({ value: name, label: name });
  }
  const updateNode = () => {
    if (preset === 'custom') {
      console.log(custom);
      setNodes(nodes.map(node => {
        const p = custom[node.id];
        if (p) {
          return { ...node, data: p };
        } else {
          return node;
        }
      }));
    } else {
      setNodes(nodes.map(initNodes));
    }
  };
  React.useEffect(updateNode, [preset, custom]);
  // updateNode();
  return (
    <div {...props} {...wrapper}>
      <Select style={{ width: 120 }} defaultValue={defaultPreset} value={preset} onChange={setPreset}
        options={options}
      ></Select>
      <ReactFlow
        autoPanOnNodeDrag={false}
        panOnDrag={false}
        draggable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges} />
    </div>
  );
});