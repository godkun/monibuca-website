import React, { memo } from 'react'
import { Segmented, SegmentedProps } from 'antd'
import {
  FlowContext,
  PlayerContainer,
  PullerContainer,
  PushOutContainer,
  PusherContainer
} from '../Node'
const segmented = memo<{ data: SegmentedProps }>(({ data }) => <Segmented {...data} />)

export default segmented
export const PlayTypeSelector = memo<
  { ctx: FlowContext; value: '转推' | '播放' } & Partial<SegmentedProps>
>(({ ctx, value, ...restProp }) => (
  <Segmented
    size="small"
    options={['播放', '转推']}
    value={value}
    onChange={(t: '转推' | '播放') => {
      switch (t) {
        case '转推':
          {
            const pusher = new PushOutContainer(
              {
                id: 'player',
                type: 'remote',
                position: { x: 0, y: 200 },
                data: {}
              },
              ctx
            )
            pusher.changeProtocol('CDN')
          }
          break
        case '播放': {
          const player = new PlayerContainer(
            {
              id: 'player',
              type: 'player',
              position: { x: 0, y: 200 },
              data: {}
            },
            ctx
          )
          player.changeProtocol('http-flv')
        }
      }
    }}
    {...restProp}
  />
))
export const SourceTypeSelector = memo<
  { ctx: FlowContext; value: '推流' | '拉流' } & Partial<SegmentedProps>
>(({ ctx, value, ...restProp }) => (
  <Segmented
    size="small"
    options={['推流', '拉流']}
    value={value}
    onChange={(t: '推流' | '拉流') => {
      switch (t) {
        case '推流':
          {
            const pusher = new PusherContainer(
              {
                id: 'source',
                type: 'source',
                position: { x: 0, y: 0 },
                data: {
                  title: '推流',
                  tool: 'ffmpeg'
                }
              },
              ctx
            )
            pusher.changeProtocol('rtmp')
          }
          break
        case '拉流': {
          const puller = new PullerContainer(
            {
              id: 'source',
              type: 'source',
              position: { x: 0, y: 0 },
              data: { title: '拉流', tool: '远端服务器' }
            },
            ctx
          )
          puller.changeProtocol('rtmp')
        }
      }
    }}
    {...restProp}
  />
))
