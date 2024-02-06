import { memo } from 'react'
import Base from './Base'
import { FlowContext } from './Node'
import { Position } from 'reactflow'
import { createHandle } from './type/Tag'

const Voice = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({
    isMobile,
    sourceType: false,
    playType: false
  })
  ctx.addNode({
    id: '设备',
    style: { width: 200, height: 100 },
    position: { x: 0, y: 10 },
    type: 'group',
    data: { label: '设备' }
  })
  ctx.addNode({
    id: 'Jessibuca',
    position: { x: 0, y: 310 },
    style: { width: 200, height: 100 },
    type: 'group',
    data: { label: 'Jessibuca' }
  })
  ctx.addNode({
    id: 'JessibucaNote',
    className: 'annotation',
    position: { x: 10, y: 50 },
    parentNode: 'Jessibuca',
    extent: 'parent',
    data: { label: 'Jessibuca' }
  })
  ctx.addNode({
    id: '设备Note',
    className: 'annotation',
    position: { x: 10, y: 10 },
    parentNode: '设备',
    extent: 'parent',
    data: { label: '设备 192.168.1.2' }
  })
  ctx.pipe(
    {
      id: '视频模块',
      position: { x: 100, y: 70 },
      parentNode: '设备',
      extent: 'parent',
      type: 'tagNode',
      data: {
        style: { margin: 0 },
        label: '视频模块',
        handles: [['source', Position.Right, { style: { width: 8, height: 10 } }]]
      }
    },
    {
      id: 'plugin2',
      type: 'plugin',
      position: { x: 80, y: 110 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        name: 'gb28181'
      }
    },
    {
      id: 'stream1',
      type: 'stream',
      position: { x: 60, y: 250 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        streamPath: 'gb28181/stream'
      }
    },
    {
      id: '视频渲染',
      position: { x: 100, y: 10 },
      parentNode: 'Jessibuca',
      extent: 'parent',
      type: 'tagNode',
      data: {
        label: '视频渲染',
        style: { margin: 0 },
        handles: [['target', Position.Right, { style: { width: 8, height: 10 } }]]
      }
    }
  )
  ctx.pipe(
    {
      id: '麦克风采集',
      position: { x: 10, y: 10 },
      parentNode: 'Jessibuca',
      extent: 'parent',
      type: 'tagNode',
      data: { label: '麦克风采集', handles: [['source', Position.Top]] }
    },
    {
      id: 'plugin1',
      type: 'plugin',
      position: { x: 10, y: 200 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        reverse: true,
        name: 'voice'
      }
    },
    {
      id: '语音模块',
      position: { x: 20, y: 70 },
      parentNode: '设备',
      extent: 'parent',
      type: 'tagNode',
      data: { label: '语音模块', handles: [['target', Position.Bottom]] }
    }
  )
  ctx.config = ``
  ctx.plugins.add('voice')
  ctx.plugins.add('gb28181')
  ctx.updateNode('m7s', { position: { x: 230, y: 10 }, style: { width: 200, height: 400 } })
  return <Base ctx={ctx} />
})
export default Voice
