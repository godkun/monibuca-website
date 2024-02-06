import { memo } from 'react'
import Base from './Base'
import { EdgeContainer, FlowContext } from './Node'
import { Position } from 'reactflow'
import { createFromIconfontCN } from '@ant-design/icons'
import { createHandle } from './type/Tag'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4420346_eodc0ksyv9k.js'
})
const Meet = memo<{ isMobile: boolean }>(function ({ isMobile }) {
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
    data: { label: 'User B' }
  })
  ctx.addNode({
    id: '设备Note',
    className: 'annotation',
    position: { x: 10, y: 10 },
    parentNode: '设备',
    extent: 'parent',
    data: { label: 'User A' }
  })
  ctx.addNode({
    id: 'userA',
    position: { x: 150, y: 10 },
    parentNode: '设备',
    extent: 'parent',
    type: 'tagNode',
    data: {
      label: '信令',
      style: {
        margin: 0
      },
      handles: [
        [
          'target',
          Position.Right,
          {
            style: {
              width: 8,
              height: 10
            }
          }
        ]
      ]
    }
  })
  ctx.addNode({
    id: 'userB',
    position: { x: 150, y: 40 },
    parentNode: 'Jessibuca',
    extent: 'parent',
    type: 'tagNode',
    data: {
      label: '信令',
      style: {
        margin: 0
      },
      handles: [
        [
          'target',
          Position.Right,
          {
            style: {
              width: 8,
              height: 10
            }
          }
        ]
      ]
    }
  })
  ctx.pipe(
    {
      id: '视频模块',
      position: { x: 100, y: 70 },
      parentNode: '设备',
      extent: 'parent',
      type: 'tagNode',
      data: {
        label: '上行推流',
        style: { margin: 0 },
        handles: [['source', Position.Right, { style: { width: 10, height: 10 } }]]
      }
    },
    {
      id: 'stream1',
      type: 'stream',
      position: { x: 80, y: 250 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        streamPath: 'room/streamA'
      }
    },
    {
      id: '视频渲染',
      position: { x: 100, y: 10 },
      parentNode: 'Jessibuca',
      extent: 'parent',
      type: 'tagNode',
      data: {
        label: '下行拉流',
        style: { margin: 0 },
        handles: [['target', Position.Right, { style: { width: 10, height: 10 } }]]
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
      data: { label: '上行推流', handles: [['source', Position.Top]] }
    },
    {
      id: 'stream2',
      type: 'tagNode',
      position: { x: 20, y: 150 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        icon: <IconFont type="m7s-mtsmeitichuli" spin />,
        color: 'default',
        style: { margin: 0 },
        label: 'room/streamB',
        handles: [
          ['target', Position.Bottom],
          ['source', Position.Top]
        ]
      }
    },
    {
      id: '语音模块',
      position: { x: 20, y: 70 },
      parentNode: '设备',
      extent: 'parent',
      type: 'tagNode',
      data: { label: '下行拉流', handles: [['target', Position.Bottom]] }
    }
  )
  ctx.addNode({
    id: '会控',
    type: 'tagNode',
    position: { x: 100, y: 50 },
    parentNode: 'm7s',
    extent: 'parent',
    data: {
      icon: <IconFont type="m7s-mtsmeitichuli" spin />,
      color: 'default',
      label: 'room/meet',
      handles: [
        ['source', Position.Top, { id: 'up' }],
        ['source', Position.Bottom, { id: 'down' }]
      ]
    }
  })
  ctx.updateNode('m7s', { position: { x: 230, y: 10 }, style: { width: 200, height: 400 } })
  const meetUp = new EdgeContainer(ctx.getContainer('会控'), ctx.getContainer('userA'), ctx)
  meetUp.data.sourceHandle = 'up'
  const meetDown = new EdgeContainer(ctx.getContainer('会控'), ctx.getContainer('userB'), ctx)
  meetDown.data.sourceHandle = 'down'
  ctx.config = ``
  ctx.plugins.add('room')
  return <Base ctx={ctx} />
})
export default Meet
