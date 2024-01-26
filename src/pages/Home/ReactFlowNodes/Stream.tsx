import React, { memo ,useContext} from 'react';
import { Handle, Position } from 'reactflow';
import { Tag} from 'antd';
import {
  createFromIconfontCN
} from '@ant-design/icons';
import { StreamContext } from './Node';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4420346_eodc0ksyv9k.js',
});
const Stream = memo(({ data }) => {
  const streamPath = useContext(StreamContext);
  return (
    <>
      <Tag icon={<IconFont type="m7s-mtsmeitichuli" spin/>} color='success'>{streamPath}</Tag>
      <Handle type="target" position={Position.Top} style={{ width: 10, height: 8, borderRadius: 3 }} />
      <Handle type="source" position={Position.Bottom} style={{ width: 10, height: 8, borderRadius: 3 }} />
    </>
  );
});
export default Stream