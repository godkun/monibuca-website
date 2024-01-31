import React, { memo } from 'react'
import { Segmented } from 'antd'
interface SegmentedProps {
  data: { options: string[]; value: string; onChange: () => void }
}
const segmented = memo<SegmentedProps>(({ data }) => <Segmented {...data} />)

export default segmented
