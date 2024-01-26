import React, { memo } from 'react';
import Base from './Base';
import { FlowContext, PullerContainer, defaultM7sNode, StreamContext, PlayerContainer } from './Node';


const Relay = memo<{ isMobile: boolean; }>(function ({ isMobile }) {
  const [stream, setStream] = React.useState("live/test");
  const ctx = new FlowContext(...defaultM7sNode(isMobile));
  const pusher = new PullerContainer({ id: 'puller', type: 'source', position: { x: isMobile ? 0 : 150, y: 0 }, data: { title: "视频源", tool: '远端服务器' } }, ctx);
  const player = new PlayerContainer({ id: 'player', type: 'player', position: { x: isMobile ? 0 : 150, y: 280 }, data: {} }, ctx);
  ctx.pipe(pusher,
    { id: 'plugin1', type: 'plugin', position: { x: 150, y: 10 }, parentNode: 'm7s', extent: 'parent', data: {} },
    { id: 'stream1', type: 'stream', position: { x: 150, y: 50 }, parentNode: 'm7s', extent: 'parent', data: {} },
    { id: 'plugin2', type: 'plugin', position: { x: 150, y: 90 }, parentNode: 'm7s', extent: 'parent', data: {} },
    player
  );
  pusher.changeProtocol('rtmp');
  player.changeProtocol('http-flv');
  ctx.pluginState = React.useState(Array.from(ctx.plugins));
  ctx.nodeState = React.useState(ctx.nodes);
  ctx.edgeState = React.useState(ctx.edges);
  ctx.configState = React.useState(ctx.config);
  pusher.onChangeProtocol = (protocol) => {
    switch (protocol) {
      case 'gb28181': setStream("34020000001310000011/34020000001310000001");
        ctx.updateNode('stream1', { position: { x: 50, y: 50 } });
        break;
      case 'onvif': setStream("onvif/eth0/192_168_1_2_8080");
        ctx.updateNode('stream1', { position: { x: 50, y: 50 } });
        break;
      default:
        setStream("live/test");
        ctx.updateNode('stream1', { position: { x: 150, y: 50 } });
    }
  };
  return <StreamContext.Provider value={stream}>
    <Base {...ctx.state} isMobile={isMobile} />
  </StreamContext.Provider>;
});
export default Relay;