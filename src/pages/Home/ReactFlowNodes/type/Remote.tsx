import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Select, Tag, Radio, Card } from 'antd'
const pusherProtocol = ['CDN', 'm7s', '阿里云', '腾讯云', '网宿'] as const
const Remote = memo(({ data: { container, protocol } }) => {
  return (
    <>
      <Card
        size="small"
        title="远端服务器"
        style={{
          width: 200,
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
      </Card>
      <Handle
        type="target"
        position={Position.Top}
        style={{ width: 10, height: 8, borderRadius: 3 }}
      />
    </>
  )
})
export default Remote
