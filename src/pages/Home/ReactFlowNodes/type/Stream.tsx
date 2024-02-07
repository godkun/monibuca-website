import React, { memo, useContext } from 'react'
import { Handle, HandleType, Position } from 'reactflow'
import { Tag, Tooltip } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'
import { StreamContext } from '../Node'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4420346_eodc0ksyv9k.js'
})
const Stream = memo(({ data: { process, streamPath } }) => {
  const streamPathG = useContext(StreamContext)
  return (
    <Tooltip title={streamPath || streamPathG}>
      <Tag
        icon={<IconFont type="m7s-mtsmeitichuli" spin />}
        color="default"
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
          marginLeft: 5,
          color: '#6d1eff',
          width: 140
        }}
      >
        Stream
      </Tag>
      <Handle
        type="target"
        position={Position.Top}
        style={{ width: 10, height: 8, borderRadius: 3 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ width: 10, height: 8, borderRadius: 3 }}
      />
      {process
        ? [
            <Handle
              id="processOut"
              key="processOut"
              type="source"
              position={Position.Right}
              style={{ top: '30%' }}
            />,
            <Handle
              id="processIn"
              key="processIn"
              type="target"
              position={Position.Right}
              style={{ top: '70%' }}
            />
          ]
        : null}
    </Tooltip>
  )
})
export default Stream
