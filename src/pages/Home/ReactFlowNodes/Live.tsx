import React, { memo } from 'react'
import Base from './Base'
import {
  FlowContext,
  defaultM7sNode,
  PusherContainer,
  StreamContext,
  PlayerContainer
} from './Node'

const Live = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const [stream, setStream] = React.useState('live/test')
  const ctx = new FlowContext({ isMobile, sourceType: false, playType: false })
  const pusher = new PusherContainer(
    {
      id: 'pusher',
      type: 'source',
      position: { x: isMobile ? 0 : 150, y: 0 },
      data: {
        title: '推流端',
        tool: 'ffmpeg'
      }
    },
    ctx
  )
  const player = new PlayerContainer(
    { id: 'player', type: 'player', position: { x: isMobile ? 0 : 150, y: 280 }, data: {} },
    ctx
  )
  ctx.pipe(
    pusher,
    {
      id: 'plugin1',
      type: 'plugin',
      position: { x: 150, y: 10 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {}
    },
    {
      id: 'stream1',
      type: 'stream',
      position: { x: 150, y: 50 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {}
    },
    {
      id: 'plugin2',
      type: 'plugin',
      position: { x: 150, y: 90 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {}
    },
    player
  )
  pusher.changeProtocol('rtmp')
  player.changeProtocol('http-flv')
  ctx.pluginState = React.useState(Array.from(ctx.plugins))
  ctx.nodeState = React.useState(ctx.nodes)
  ctx.edgeState = React.useState(ctx.edges)
  return (
    <StreamContext.Provider value={stream}>
      <Base {...ctx.state} isMobile={isMobile} />
    </StreamContext.Provider>
  )
})
export default Live
