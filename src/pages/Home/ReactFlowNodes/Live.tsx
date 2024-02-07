import React, { memo } from 'react'
import Base from './Base'
import { FlowContext, PusherContainer, StreamContext, PlayerContainer } from './Node'

const Live = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({ isMobile, sourceType: false, playType: false ,nodes:[
    {
      id: 'm7s',
      type: 'm7s',
      position: { x: 300, y: 0 },
      zIndex: -1,
      style: {
        width: 200,
        height: 352,
        backdropFilter: 'blur(10px)'
      },
      data: {}
    }
  ]})
  const pusher = new PusherContainer(
    {
      id: 'pusher',
      type: 'source',
      position: { x: 0, y: 0 },
      data: {
        title: '推流端',
        tool: 'ffmpeg'
      }
    },
    ctx
  )
  const player = new PlayerContainer(
    { id: 'player', type: 'player', position: { x: 0, y: 200 }, data: {} },
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
      position: { x: 35, y: 150 },
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
  player.changeProtocol('http-flv')
  return <Base ctx={ctx} />
})
export default Live
