import React, { memo } from 'react';
import Base from './Base';
import { FlowContext, PushOutContainer, PusherContainer, StreamContext, defaultM7sNode } from './Node';


const CDN = memo<{ isMobile: boolean; }>(function ({ isMobile }) {
  const [stream, setStream] = React.useState("live/test");
  const ctx = new FlowContext(...defaultM7sNode(isMobile));
  const pusher = new PusherContainer({ id: 'pusher', type: 'source', position: { x: isMobile ? 0 : 150, y: 0 }, data: {
    title: "推流端",
    tool: 'ffmpeg',
  } }, ctx);
  const player = new PushOutContainer({ id: 'player', type: 'remote', position: { x: isMobile ? 0 : 150, y: 280 }, data: {} }, ctx);
  ctx.pipe(pusher,
    { id: 'plugin1', type: 'plugin', position: { x: 150, y: 10 }, parentNode: 'm7s', extent: 'parent', data: {} },
    { id: 'stream1', type: 'stream', position: { x: 150, y: 50 }, parentNode: 'm7s', extent: 'parent', data: {} },
    { id: 'plugin2', type: 'plugin', position: { x: 150, y: 90 }, parentNode: 'm7s', extent: 'parent', data: {} },
    player
  );
  pusher.changeProtocol('rtmp');
  player.changeProtocol('CDN');
  ctx.pluginState = React.useState(Array.from(ctx.plugins));
  ctx.nodeState = React.useState(ctx.nodes);
  ctx.edgeState = React.useState(ctx.edges);
  ctx.configState = React.useState(ctx.config);
  return <StreamContext.Provider value={stream}>
    <Base {...ctx.state} isMobile={isMobile} />
  </StreamContext.Provider>;
});
export default CDN;