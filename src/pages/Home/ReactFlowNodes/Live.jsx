import React, { memo } from 'react';
import Base from './Base';

const protocol2plugin = { "ws-h265": "jessica", "http-h265": "jessica", "ws-flv": "jessica", "http-flv": "hdl", "ws-raw": "jessica" };

export default memo(function (props) {
  function protocol2url(protocol, type = "push") {
    switch (protocol) {
      case "ws-h265":
        return `ws://localhost:8080/${stream}.h265`;
      case "http-h265":
        return `http://localhost:8080/${stream}.h265`;
      case "ws-flv":
        return `ws://localhost:8080/${stream}.flv`;
      case "http-flv":
        return `http://localhost:8080/${stream}.flv`;
      case "ws-raw":
        return `ws://localhost:8080/${stream}`;
      case "webrtc":
        return `http://localhost:8080/webrtc/${type}/${stream}`;
      case "webtransport":
        return `https://local.monibuca.com:8081/webtransport/${type}/${stream}`;
      case "rtmp":
        return `rtmp://localhost/${stream}`;
      case "rtsp":
        return `rtsp://localhost/${stream}`;
      case "hls":
      case "llhls":
        return `http://localhost:8080/hls/${stream}.m3u8`;
      case "fmp4":
        return `http://localhost:8080/fmp4/${stream}.mp4`;
      default:
    }
  }
  let plugin1 = 'rtmp';
  let plugin2 = 'hdl';
  const pusherNode = {
    id: 'pusher', type: 'pusher', position: { x: 150, y: 0 }, data: {
      onChangeProtocol(protocol, old) {
        plugin1 = protocol;
        _setPlugins();
        setNodes(initialNodes = initialNodes.map(node => {
          if (node.id === 'plugin1') {
            return { ...node, data: { ...node.data, name: protocol } };
          }
          return node;
        }));
        setEdges(initialEdges = initialEdges.map(edge => {
          if (edge.id === '1') {
            return { ...edge, label: protocol2url(protocol) };
          }
          return edge;
        }));
      }
    }
  };
  const playerNode = {
    id: 'player', type: 'player', position: { x: 150, y: 280 }, data: {
      onChangeProtocol(protocol, old) {
        const name = protocol2plugin[protocol] || protocol;
        plugin2 = name;
        _setPlugins();
        setNodes(initialNodes = initialNodes.map(node => {
          if (node.id === 'plugin2') {
            return {
              ...node, data: { ...node.data, name }
            };
          }
          return node;
        }));
        setEdges(initialEdges = initialEdges.map(edge => {
          if (edge.id === '4') {
            return { ...edge, label: protocol2url(protocol, 'play') };
          }
          return edge;
        }));
      }
    }
  };
  const [stream, setStream] = React.useState("live/test");
  function _setPlugins() {
    setPlugins(Array.from(new Set([plugin1, plugin2])));
  }
  const [plugins, setPlugins] = React.useState([plugin1, plugin2]);
  let initialNodes = [
    { id: 'm7s', type: 'group', position: { x: 200, y: 130 }, zIndex: -1, style: { width: 150, height: 120, backdropFilter: 'blur(10px)', background: "gray" } },
    { id: 'plugin1', type: 'plugin', position: { x: 10, y: 10 }, parentNode: 'm7s', extent: 'parent', data: { name: plugin1 } },
    { id: 'plugin2', type: 'plugin', position: { x: 10, y: 90 }, parentNode: 'm7s', extent: 'parent', data: { name: plugin2 } },
    {
      id: 'stream1', type: 'stream', position: { x: 20, y: 50 }, parentNode: 'm7s', extent: 'parent', data: {
        streamPath: stream,
      }
    },
    pusherNode, playerNode
  ];
  let initialEdges = [
    { id: '1', source: 'pusher', label: protocol2url('rtmp'), labelBgStyle: { fill: 'black', opacity: 0.3 }, labelStyle: { fill: 'white' }, animated: true, target: 'plugin1', style: { stroke: 'cyan', strokeWidth: 3 } },
    { id: '2', source: 'plugin1', labelBgStyle: { fill: 'black', opacity: 0.5 }, labelStyle: { fill: 'white' }, animated: true, target: 'stream1', style: { stroke: 'cyan', strokeWidth: 3 } },
    { id: '3', source: 'stream1', labelBgStyle: { fill: 'black', opacity: 0.5 }, labelStyle: { fill: 'white' }, animated: true, target: 'plugin2', style: { stroke: 'cyan', strokeWidth: 3 } },
    { id: '4', source: 'plugin2', label: protocol2url('http-flv'), labelBgStyle: { fill: 'black', opacity: 0.3 }, labelStyle: { fill: 'white' }, animated: true, target: 'player', style: { stroke: 'cyan', strokeWidth: 3 } },
  ];
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);
  const isMobile = props.isMobile;
  return <Base nodes={nodes} edges={edges} plugins={plugins} isMobile={isMobile} />;
});