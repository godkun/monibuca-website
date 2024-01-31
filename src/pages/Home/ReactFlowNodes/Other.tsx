import { memo } from 'react'
import Base from './Base'
import { FlowContext } from './Node'

const Voice = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({
    isMobile,
    sourceType: false,
    playType: false,
  })
  ctx.pipe(
    {
      id: '设备',
      position: { x: isMobile ? 0 : 150, y: 10 },
      data: { label: '设备' }
    },
    {
      id: 'plugin1',
      type: 'plugin',
      position: { x: 150, y: 10 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        name: 'voice'
      }
    },
    {
      id: '订阅者',
      position: { x: isMobile ? 0 : 150, y:  300 },
      data: { label: '订阅者' }
    }
  )
  ctx.config = ``
  return <Base ctx={ctx} />
})
export default Voice
