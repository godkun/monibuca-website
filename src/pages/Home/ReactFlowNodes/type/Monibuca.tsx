import React, { memo, useContext } from 'react'
import { Handle, HandleType, Position } from 'reactflow'
import { Tag } from 'antd'

const Monibuca = memo(({}) => {
  return (
    <div style={{ border: '2px solid black', position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 5, left: 5, display: 'flex' }}>
        <div
          style={{
            background: 'lightgray',
            width: 10,
            height: 40,
            marginLeft: 10,
            marginRight: 10
          }}
        ></div>
        <div style={{ background: 'lightgray', width: 10, height: 40, marginRight: 10 }}></div>
        <div style={{ background: 'lightgray', width: 10, height: 40, marginRight: 10 }}></div>
        <div style={{ color: 'lightgray' }}>
          <div>M7S</div>
          <div>192.168.1.1</div>
        </div>
      </div>
    </div>
  )
})
export default Monibuca
