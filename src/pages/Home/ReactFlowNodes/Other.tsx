import { memo } from 'react'
import Base from './Base'
import { FlowContext } from './Node'
import { ApiOutlined } from '@ant-design/icons'
import { createHandle } from './type/Tag'
import { Position } from 'reactflow'
const Other = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({
    isMobile,
    sourceType: false,
    playType: false,
    nodes: ['record', 'monitor', 'hook', 'snap', 'logrotate', 'debug', 'preview'].map((id, i) => ({
      id,
      type: 'tagNode',
      position: { x: 80, y: 10 + 40 * i },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        label: id + '插件',
        icon: <ApiOutlined />,
        style: { margin: 0 },
        handles: [['source', Position.Right, { style: { width: 8, height: 10 } }]]
      }
    }))
  })
  ctx.addNode({
    id: 'm7s',
    type: 'm7s',
    position: { x: 10, y: 50 },
    style: { width: 200, height: 350 },
    data: {}
  })
  ctx.pipe('record', {
    id: '文件',
    type: 'tagNode',
    position: { x: 250, y: 60 },
    data: {
      label: '视频文件',
      handles: [['target', Position.Left, { style: { width: 8, height: 10 } }]],
      style: { margin: 0 },
      color: 'white'
    }
  })
  ctx.pipe('monitor', {
    id: '文件2',
    type: 'tagNode',
    position: { x: 250, y: 100 },
    data: {
      label: '记录文件',
      handles: [['target', Position.Left, { style: { width: 8, height: 10 } }]],
      style: { margin: 0 },
      color: 'white'
    }
  })
  ctx.pipe('hook', {
    id: '服务器',
    type: 'tagNode',
    position: { x: 250, y: 140 },
    data: {
      label: '服务器',
      handles: [['target', Position.Left, { style: { width: 8, height: 10 } }]],
      style: { margin: 0 },
      color: 'white'
    }
  })
  ctx.pipe('snap', {
    id: '浏览器',
    type: 'tagNode',
    position: { x: 250, y: 180 },
    data: {
      label: '浏览器',
      handles: [['target', Position.Left, { style: { width: 8, height: 10 } }]],
      style: { margin: 0 },
      color: 'white'
    }
  })
  ctx.pipe('logrotate', {
    id: '文件3',
    type: 'tagNode',
    position: { x: 250, y: 220 },
    data: {
      label: '日志文件',
      handles: [['target', Position.Left, { style: { width: 8, height: 10 } }]],
      style: { margin: 0 },
      color: 'white'
    }
  })
  ctx.pipe('debug', {
    id: '浏览器2',
    type: 'tagNode',
    position: { x: 250, y: 260 },
    data: {
      label: '浏览器',
      handles: [['target', Position.Left, { style: { width: 8, height: 10 } }]],
      style: { margin: 0 },
      color: 'white'
    }
  })
  ctx.pipe('preview', {
    id: '浏览器3',
    type: 'tagNode',
    position: { x: 250, y: 300 },
    data: {
      label: '浏览器',
      handles: [['target', Position.Left, { style: { width: 8, height: 10 } }]],
      style: { margin: 0 },
      color: 'white'
    }
  })
  ctx.config = ``
  return <Base ctx={ctx} />
})
export default Other
