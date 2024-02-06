import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Radio, Card } from 'antd'
import { NodeContainer } from '../Node'
const Source = memo<{ data: { container: NodeContainer } }>(
  ({ data: { container, protocol, title, protocols, extra ,url } }) => {
    return (
      <>
        <Card
          size="small"
          title={title}
          style={{
            width: 250,marginRight:5
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
          {url && <p>{url}</p>}
        </Card>
        <Handle
          type="source"
          position={Position.Right}
          style={{ width: 20, height: 20 ,background:'lightgray',borderWidth:4 ,borderColor:'black'}}
        />
      </>
    )
  }
)
export default Source
