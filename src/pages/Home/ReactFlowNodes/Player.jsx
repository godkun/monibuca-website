import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Select, Tag, Radio, Card } from 'antd';

export default memo(({ data }) => {
  const [protocol, setProtocol] = React.useState('http-flv');
  const [tool, setTool] = React.useState('jessibuca');
  const pusherProtocol = {
    jessibuca: ['http-flv', 'ws-flv', 'ws-h265','http-h265', 'hls', 'llhls', 'fmp4', 'webtransport', 'webrtc', 'ws-raw'],
    ffplay: ['rtmp', 'rtsp', 'http-flv', 'http-h265', 'hls', 'llhls', 'fmp4'],
    vlc: ['rtmp', 'rtsp', 'http-h265', 'hls', 'llhls', 'fmp4'],
    browser: ['webrtc', 'fmp4']
  };
  const changeProtocol = (p) => {
    data.onChangeProtocol(p, protocol);
    setProtocol(p);
  };
  return (
    <>
      <Card size='small' title="播放端" style={{ width: 250, borderRadius: 10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }} headStyle={{ background: 'violet', borderRadius: '10px 10px 0 0', color: 'white' }} extra={
        <select onChange={event => {
          const v = event.target.value;
          setTool(v);
          if (pusherProtocol[v][0] !== protocol) {
            changeProtocol(pusherProtocol[v][0]);
          }
        }}
          style={{ width: 80, border: 'none', color: 'white', background: 'violet' }}
        >
          {Object.keys(pusherProtocol).map(type => <option value={type}>{type}</option>)}
        </select>
      }>
        <Radio.Group defaultValue="http-flv" buttonStyle="solid" size='small' value={protocol} onChange={e => changeProtocol(e.target.value)}>
          {pusherProtocol[tool].map(protocol => <Radio.Button value={protocol}>{protocol}</Radio.Button>)
          }
        </Radio.Group>
      </Card>
      <Handle type="target" position={Position.Top} style={{ width: 10, height: 8, borderRadius: 3 }} />
    </>
  );
});
