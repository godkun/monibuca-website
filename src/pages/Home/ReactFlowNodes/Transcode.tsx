import React, { memo } from 'react'
import Base from './Base'
import { FlowContext, PlayerContainer, PusherContainer, StreamContext } from './Node'

const Crypto = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({ isMobile })
  const pusher = new PusherContainer(
    {
      id: 'source',
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
      data: { process: true }
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
  ctx.pipe(
    'stream1',
    {
      id: 'plugin3',
      type: 'plugin',
      position: { x: 270, y: 50 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        process: true,
        name: 'transcode'
      }
    },
    'stream1'
  )
  pusher.changeProtocol('rtmp')
  player.changeProtocol('CDN')
  ctx.pluginState = React.useState(Array.from(ctx.plugins))
  ctx.nodeState = React.useState(ctx.nodes)
  ctx.edgeState = React.useState(ctx.edges)
  ctx.configState = React.useState(ctx.config)
  ctx.streamState = React.useState('live/test')
  return (
    <StreamContext.Provider value={ctx.state.stream}>
      <Base {...ctx.state} isMobile={isMobile} />
    </StreamContext.Provider>
  )
})
export default Crypto
