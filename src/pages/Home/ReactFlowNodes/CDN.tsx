import React, { memo } from 'react'
import Base from './Base'
import { FlowContext, PushOutContainer, PusherContainer, StreamContext } from './Node'

const CDN = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({ isMobile, playType: false })
  const pusher = new PusherContainer(
    {
      id: 'source',
      type: 'source',
      position: { x:  0, y: 80 },
      data: {
        title: '推流端',
        tool: 'ffmpeg'
      }
    },
    ctx
  )
  const player = new PushOutContainer(
    { id: 'player', type: 'remote', position: { x:  0, y: 280 }, data: {} },
    ctx
  )
  ctx.pipe(
    pusher,
    {
      id: 'plugin1',
      type: 'plugin',
      position: { x: 35, y: 31 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        big: true
      }
    },
    {
      id: 'stream1',
      type: 'stream',
      position: { x: 50, y: 150 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {}
    },
    {
      id: 'plugin2',
      type: 'plugin',
      position: { x: 35, y: 255 },
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
  player.changeProtocol('CDN')
  return <Base ctx={ctx} />
})
export default CDN
