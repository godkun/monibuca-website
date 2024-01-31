import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import T, { createHandle } from './Tag'
import { ApiOutlined } from '@ant-design/icons'

const Plugin = memo(({ data }) => {
  if (data.reverse)
    return (
      <a href={`https://github.com/Monibuca/plugin-${data.name}`} target="_blank">
        <T
          icon={<ApiOutlined />}
          label={data.name + '插件'}
          handles={[createHandle('target', Position.Bottom), createHandle('source', Position.Top)]}
        />
      </a>
    )
  return (
    <a href={`https://github.com/Monibuca/plugin-${data.name}`} target="_blank">
      <T
        icon={<ApiOutlined />}
        label={data.name + '插件'}
        handles={[createHandle('target', Position.Top), createHandle('source', Position.Bottom)]}
      />
    </a>
  )
})
export default Plugin
