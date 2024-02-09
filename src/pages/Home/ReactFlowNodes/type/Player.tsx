import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Select, Tag, Radio, Card } from 'antd'
import { NodeContainer, PullerContainer, protocol2plugin } from '../Node'
import { PlayTypeSelector } from './Segmented'
const pusherProtocol = {
  jessibuca: [
    'http-flv',
    'ws-flv',
    'ws-h265',
    'http-h265',
    'hls',
    'llhls',
    'fmp4',
    'webtransport',
    'webrtc',
    'ws-raw'
  ],
  ffplay: ['rtmp', 'rtsp', 'http-flv', 'http-h265', 'hls', 'llhls', 'fmp4'],
  vlc: ['rtmp', 'rtsp', 'http-h265', 'hls', 'llhls', 'fmp4'],
  browser: ['webrtc', 'fmp4']
} as const
const Player = memo(({ data: { container, protocol, url, tool = 'jessibuca', disableChange } }) => {
  return (
    <>
      <Card
        size="small"
        title={<PlayTypeSelector ctx={container.context} value="播放" disabled={disableChange} />}
        style={{
          width: 250,
          marginRight: 5
        }}
        extra={
          <select
            onChange={event => {
              const v = event.target.value as keyof typeof pusherProtocol
              container.updateData({ tool: v })
              if (pusherProtocol[v][0] !== protocol) {
                container.changeProtocol(pusherProtocol[v][0] as keyof typeof protocol2plugin)
              }
            }}
            style={{ width: 80 }}
          >
            {Object.keys(pusherProtocol).map(type => (
              <option value={type}>{type}</option>
            ))}
          </select>
        }
      >
        <Radio.Group
          defaultValue="http-flv"
          buttonStyle="solid"
          size="small"
          value={protocol}
          onChange={e => container.changeProtocol(e.target.value)}
        >
          {pusherProtocol[tool].map(protocol => (
            <Radio.Button value={protocol}>{protocol}</Radio.Button>
          ))}
        </Radio.Group>
        {url && <p>播放地址 {url}</p>}
      </Card>
      <Handle
        type="target"
        position={Position.Right}
        style={{
          width: 20,
          height: 20,
          background: 'lightgray',
          borderWidth: 4,
          borderColor: 'black'
        }}
      />
    </>
  )
})
export default Player
