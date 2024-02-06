import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import T from './Tag'
import { ApiOutlined } from '@ant-design/icons'
import { Card } from 'antd'

const Plugin = memo(({ data }) => {
  return (
    <a href={`https://github.com/Monibuca/plugin-${data.name}`} target="_blank">
      <T
        icon={<ApiOutlined />}
        label={data.name + '插件'}
        style={data.big ? { paddingTop: 10, paddingBottom: 10, fontSize: 20, marginLeft: 5 } : {}}
        handles={[
          [
            'target',
            data.process
              ? Position.Top
              : data.big
                ? data.reverse
                  ? Position.Top
                  : Position.Left
                : data.reverse
                  ? Position.Bottom
                  : Position.Top,
            {
              style:
                data.big && !data.reverse
                  ? {
                      width: 20,
                      height: 20,
                      background: 'lightgray',
                      borderWidth: 4,
                      borderRadius: '50%',
                      borderColor: 'black'
                    }
                  : {}
            }
          ],
          [
            'source',
            data.process
              ? Position.Top
              : data.big
                ? data.reverse
                  ? Position.Left
                  : Position.Bottom
                : data.reverse
                  ? Position.Top
                  : Position.Bottom,
            {
              style: data.process
                ? { left: '30%' }
                : data.big && data.reverse
                  ? {
                      width: 20,
                      height: 20,
                      background: 'lightgray',
                      borderWidth: 4,
                      borderRadius: '50%',
                      borderColor: 'black'
                    }
                  : {}
            }
          ]
        ]}
      />
    </a>
  )
})
export default Plugin
