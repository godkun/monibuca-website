import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Select, Tag, Radio, Card } from 'antd';

export default memo(({ data }) => {
  const [protocol, setProtocol] = React.useState('rtmp');
  const [tool, setTool] = React.useState('ffmpeg');
  const pusherType = {
    rtmp: ['ffmpeg', 'obs', '无人机', 'remote'],
    rtsp: ['ffmpeg', 'remote'],
    webrtc: ['browser', 'obs', 'remote']
  };
  const pusherProtocol = {
    ffmpeg: ['rtmp', 'rtsp'],
    obs: ['rtmp', 'webrtc'],
    无人机: ['rtmp'],
    remote: ['rtmp', 'rtsp'],
    browser: ['webrtc']
  };
  const changeProtocol = (p) => {
    data.onChangeProtocol(p, protocol);
    setProtocol(p);
  };
  return (
    <>
      <Card size='small' title="推流端" style={{ width: 150, borderRadius: 10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }} headStyle={{ background: 'violet', borderRadius: '10px 10px 0 0', color: 'white' }} extra={
        <select onChange={event => {
          const v = event.target.value;
          setTool(v);
          if (pusherProtocol[v][0] !== protocol) {
            changeProtocol(pusherProtocol[v][0]);
          }
        }}
          style={{ width: 70, border: 'none', color: 'white', background: 'violet' }}
        >
          {Object.keys(pusherProtocol).map(type => <option value={type}>{type}</option>)}
        </select>
      }>
        <Radio.Group defaultValue="rtmp" buttonStyle="solid" size='small' value={protocol} onChange={e => changeProtocol(e.target.value)}>
          {pusherProtocol[tool].map(protocol => <Radio.Button value={protocol}>{protocol}</Radio.Button>)
          }
        </Radio.Group>
      </Card>
      <Handle type="source" position={Position.Bottom} style={{ width: 10, height: 8, borderRadius: 3 }} />
    </>
  );
});
