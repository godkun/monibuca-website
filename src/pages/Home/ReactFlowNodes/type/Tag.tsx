import { memo } from 'react'
import { Handle, Position, HandleType } from 'reactflow'
import { Tag, TagProps } from 'antd'
type TProp = {
  label: string
  handles: (typeof Handle)[]
} & TagProps
const T = memo<TProp>(({ label, handles, ...props }) => {
  return (
    <>
      <Tag color="cyan" {...props}>
        {label}
      </Tag>
      {handles}
    </>
  )
})
export default T
export const TagNode = memo<{ data: TProp }>(({ data }) => <T {...data} />)

export function createHandle(
  type: HandleType,
  position: Position,
  prop?: { style?: React.CSSProperties; id?: string }
) {
  return (
    <Handle
      key={prop?.id || type + position}
      type={type}
      position={position}
      style={{ width: 10, height: 8, borderRadius: 3, ...(prop?.style || {}) }}
      id={prop?.id}
    />
  )
}
