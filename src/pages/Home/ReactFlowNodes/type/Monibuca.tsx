import { memo } from 'react'
const 竖线装饰 = { background: 'lightgray', width: 10, height: 35 }
const Monibuca = memo(() => {
  return (
    <div style={{ border: '2px solid black', position: 'relative', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 5, left: 5, display: 'flex', alignItems: 'end' }}>
        <div
          style={{
            ...竖线装饰,
            marginLeft: 10,
            marginRight: 10
          }}
        ></div>
        <div style={{ ...竖线装饰, marginRight: 10 }}></div>
        <div style={{ ...竖线装饰, marginRight: 10 }}></div>
        <div style={{ color: 'lightgray', height: 40 }}>
          <div>
            M7S<br></br>192.168.1.1
          </div>
        </div>
      </div>
    </div>
  )
})
export default Monibuca
