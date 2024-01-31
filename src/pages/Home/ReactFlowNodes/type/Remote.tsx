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
          borderRadius: 10,
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
        }}
        headStyle={{ background: '#c217ec', borderRadius: '10px 10px 0 0', color: 'white' }}
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
