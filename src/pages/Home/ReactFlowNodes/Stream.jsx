import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Tag} from 'antd';
import {
  createFromIconfontCN
} from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4420346_eodc0ksyv9k.js',
});
export default memo(({ data }) => {
  return (
    <>
      <Tag icon={<IconFont type="m7s-mtsmeitichuli" spin/>} color='success'>{data.streamPath}</Tag>
      <Handle type="target" position={Position.Top} style={{ width: 10, height: 8, borderRadius: 3 }} />
      <Handle type="source" position={Position.Bottom} style={{ width: 10, height: 8, borderRadius: 3 }} />
    </>
  );
});
