import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Select, Tag, Switch, Card } from 'antd'
import { ApiOutlined } from '@ant-design/icons'

const Plugin = memo(({ data }) => {
  return (
    <a href={`https://github.com/Monibuca/plugin-${data.name}`} target="_blank">
      <Tag icon={<ApiOutlined />} color="cyan">
        {data.name}插件
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
    </a>
  )
})
export default Plugin
