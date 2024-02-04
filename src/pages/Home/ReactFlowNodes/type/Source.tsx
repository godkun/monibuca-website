import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Radio, Card } from 'antd'
import { NodeContainer } from '../Node'
const Source = memo<{ data: { container: NodeContainer } }>(
  ({ data: { container, protocol, title, protocols, extra } }) => {
    return (
      <>
        <Card
          size="small"
          title={title}
          style={{
            width: 230,
          }}
          extra={extra}
        >
          <Radio.Group
            buttonStyle="solid"
            size="small"
            value={protocol}
            onChange={e => container.changeProtocol(e.target.value)}
          >
            {protocols.map(protocol => (
              <Radio.Button value={protocol}>{protocol}</Radio.Button>
            ))}
          </Radio.Group>
        </Card>
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ width: 10, height: 8, borderRadius: 3 }}
        />
      </>
    )
  }
)
export default Source
