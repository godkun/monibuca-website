import React, { memo } from 'react'
import Base from './Base'
import { FlowContext, PullerContainer, StreamContext, PlayerContainer } from './Node'

const Relay = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({ isMobile, sourceType: false, playType: false })
  const pusher = new PullerContainer(
    {
      id: 'puller',
      type: 'source',
      position: { x:  150, y: 0 },
      data: { title: '视频源', tool: '远端服务器' }
    },
    ctx
  )
  const player = new PlayerContainer(
    { id: 'player', type: 'player', position: { x:  150, y: 280 }, data: {} },
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
  return <Base ctx={ctx} />
})
export default Relay
