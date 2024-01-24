import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Select, Tag, Radio, Card } from 'antd';

export default memo(({ data }) => {
  const [protocol, setProtocol] = React.useState('rtmp');
  const pusherProtocol = ['rtmp', 'rtsp', 'hls', 'http-flv'];
  const changeProtocol = (p) => {
    data.onChangeProtocol(p, protocol);
    setProtocol(p);
  };
  return (
    <>
      <Card size='small' title="远端视频源" style={{ width: 230, borderRadius: 10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }} headStyle={{ background: 'violet', borderRadius: '10px 10px 0 0', color: 'white' }} >
        <Radio.Group defaultValue="rtmp" buttonStyle="solid" size='small' value={protocol} onChange={e => changeProtocol(e.target.value)}>
          {pusherProtocol.map(protocol => <Radio.Button value={protocol}>{protocol}</Radio.Button>)
          }
        </Radio.Group>
      </Card>
      <Handle type="source" position={Position.Bottom} style={{ width: 10, height: 8, borderRadius: 3 }} />
    </>
  );
});
