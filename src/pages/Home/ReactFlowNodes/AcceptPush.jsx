import React, { Component } from 'react';
import { Handle, Position } from 'reactflow';
import { Select, Switch, Card } from 'antd';
class AcceptPush extends Component {
  render() {
    return (
      <>
        <Handle type="target" position={Position.Left} />
        <Card size='small' title="接受推流" style={{ width: 150,borderRadius:10 }} headStyle={{background:'violet',borderRadius:'10px 10px 0 0',color:'white'}} extra={<Switch size='small'></Switch>}>
          <Select
          size='small'
            defaultValue="rtmp"
            style={{ width: 120 }}
            options={[
              { value: 'rtmp', label: 'rtmp' },
              { value: 'rtsp', label: 'rtsp' },
              { value: 'Yiminghe', label: 'yiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]} />
        </Card>
      </>
    );
  }
}
export default AcceptPush;