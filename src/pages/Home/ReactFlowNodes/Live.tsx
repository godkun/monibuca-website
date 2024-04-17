import React, { memo } from 'react'
import Base from './Base'
import { FlowContext, PusherContainer, StreamContext, PlayerContainer } from './Node'

const Live = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({ isMobile })
  const pusher = new PusherContainer(
    {
      id: 'pusher',
      type: 'source',
      position: { x: 0, y: 0 },
      data: {
        title: '推流',
        tool: 'ffmpeg',
        disableChange: true
      }
    },
    ctx
  )
  const player = new PlayerContainer(
    { id: 'player', type: 'player', position: { x: 0, y: 200 }, data: { disableChange: true } },
    ctx
  )
  ctx.pipe(
    pusher,
    {
      id: 'plugin1',
      type: 'plugin',
      position: { x: 35, y: 32 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        big: true
      }
    },
    {
      id: 'stream1',
      type: 'stream',
      position: { x: 35, y: 150 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {}
    },
    {
      id: 'plugin2',
      type: 'plugin',
      position: { x: 35, y: 256 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        big: true,
        reverse: true
      }
    },
    player
  )
  pusher.changeProtocol('rtmp')
  player.changeProtocol('http-flv')
  return <Base ctx={ctx} />
})
export default Live
