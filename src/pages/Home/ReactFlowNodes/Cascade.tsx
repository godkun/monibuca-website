import React, { memo } from 'react'
import Base from './Base'
import { FlowContext } from './Node'
const createLiveStage = (ctx: FlowContext) => {
  ctx.pipe(
    {
      id: 'publisher',
      position: { x: 150, y: 40 },
      data: { label: '发布者' }
    },
    {
      id: 'cascadeServer',
      position: { x: 150, y: 100 },
      style: {},
      data: { label: '源服务器+CascadeServer插件' }
    },
    {
      id: 'cascadeClient1',
      position: { x: 0, y: 200 },
      style: {},
      data: { label: '边缘服务器+CascadeClient插件' }
    },
    {
      id: '订阅者1',
      position: { x: 0, y: 300 },
      data: { label: '订阅者1' }
    }
  )
  ctx.pipe(
    'cascadeServer',
    {
      id: 'cascadeClient2',
      position: { x: 150, y: 200 },
      style: {},
      data: { label: '边缘服务器+CascadeClient插件' }
    },
    {
      id: '订阅者2',
      position: { x: 150, y: 300 },
      data: { label: '订阅者' }
    }
  )
  ctx.pipe(
    'cascadeServer',
    {
      id: 'cascadeClient3',
      position: { x: 300, y: 200 },
      style: {},
      data: { label: '边缘服务器+CascadeClient插件' }
    },
    {
      id: '订阅者3',
      position: { x: 300, y: 300 },
      data: { label: '订阅者' }
    }
  )
}
const createWatchStage = (ctx: FlowContext) => {
  ctx.pipe(
    {
      id: 'cascadeServer2',
      position: { x: 150, y: 250 },
      style: {},
      data: { label: '监控服务器+CascadeServer插件' }
    },
    {
      id: 'subscriber',
      position: { x: 150, y: 350 },
      data: { label: '订阅者' }
    }
  )
  ctx.pipe(
    {
      id: 'publish1',
      position: { x: 0, y: 50 },
      style: {},
      data: { label: '摄像机1' }
    },
    {
      id: 'cascadeClient21',
      position: { x: 0, y: 150 },
      style: {},
      data: { label: '拉流服务器+CascadeClient插件' }
    },
    'cascadeServer2'
  )
  ctx.pipe(
    {
      id: 'publish2',
      position: { x: 150, y: 50 },
      style: {},
      data: { label: '摄像机2' }
    },
    {
      id: 'cascadeClient22',
      position: { x: 150, y: 150 },
      style: {},
      data: { label: '拉流服务器+CascadeClient插件' }
    },
    'cascadeServer2'
  )
  ctx.pipe(
    {
      id: 'publish3',
      position: { x: 300, y: 50 },
      style: {},
      data: { label: '摄像机3' }
    },
    {
      id: 'cascadeClient23',
      position: { x: 300, y: 150 },
      style: {},
      data: { label: '拉流服务器+CascadeClient插件' }
    },
    'cascadeServer2'
  )
}
const TimeShift = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const sNode = {
    id: 'typeSelector',
    type: 'segmented',
    position: { x: 0, y: 0 },
    data: {
      options: ['直播场景', '监控场景'],
      value: '直播场景',
      onChange: (stage: '直播场景' | '监控场景') => {
        ctx.clear()
        sNode.data.value = stage
        ctx.addNode(sNode)
        switch (stage) {
          case '直播场景':
            createLiveStage(ctx)
            ctx._updateNodes()
            ctx._updateEdges()
            break
          case '监控场景':
            createWatchStage(ctx)
            ctx._updateNodes()
            ctx._updateEdges()
            break
        }
      }
    }
  }

  const ctx = new FlowContext({
    isMobile,
    sourceType: false,
    playType: false,
    nodes: [sNode]
  })
  createLiveStage(ctx)
  ctx.plugins.add('cascade')
  ctx.configs = {
    源服务器: `cascadeserver:
  quic:
    listenaddr: :44944`,
    边缘服务器: `cascadeclient:
  server: 192.168.1.100`
  }
  ctx.config = ctx.configs['源服务器']
  return <Base ctx={ctx} />
})
export default TimeShift
