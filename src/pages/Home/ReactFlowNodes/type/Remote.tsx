import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Select, Tag, Radio, Card } from 'antd'
import { PlayTypeSelector } from './Segmented'
const pusherProtocol = ['CDN', 'm7s', '阿里云', '腾讯云', '网宿'] as const
const Remote = memo(({ data: { container, protocol, url, disableChange } }) => {
  return (
    <>
      <Card
        size="small"
        title={<PlayTypeSelector ctx={container.context} value="转推" disabled={disableChange} />}
        style={{
          width: 250,
          marginRight: 5,
          height: 152
        }}
      >
        <Radio.Group
          defaultValue="rtmp"
          buttonStyle="solid"
          size="small"
          value={protocol}
          onChange={e => container.changeProtocol(e.target.value)}
        >
          {pusherProtocol.map(protocol => (
            <Radio.Button value={protocol}>{protocol}</Radio.Button>
          ))}
        </Radio.Group>
        {url && <p>{url}</p>}
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
export default Remote
