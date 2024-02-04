import React, { memo } from 'react'
import Base from './Base'
import { FlowContext, PlayerContainer, PusherContainer } from './Node'

const Crypto = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({ isMobile })
  const pusher = new PusherContainer(
    {
      id: 'source',
      type: 'source',
      position: { x:  150, y: 0 },
      data: {
        title: '推流端',
        tool: 'ffmpeg'
      }
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
  player.changeProtocol('http-flv')
  return <Base ctx={ctx} />
})
export default Crypto
