import React from 'react';
import ReactFlow  from 'reactflow';
import 'rc-banner-anim/assets/index.css';
import 'reactflow/dist/style.css';
import * as nodeTypes from './ReactFlowNodes';
const initialNodes = [
  { id: 'm7s', type: 'group', position: { x: 300, y: 0 }, style: { width: 500, height: 500,backdropFilter:'blur(10px)' } },
  { id: 'acceptPush', type:'acceptPush', position: { x: 10, y: 10 }, parentNode: 'm7s',extent:'parent' },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
class Banner extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div {...props} {...dataSource.wrapper}>
        <ReactFlow
          panOnDrag={false}
          draggable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnPinch={false}
          nodes={initialNodes}
          nodeTypes={nodeTypes}
          edges={initialEdges} />
      </div>
    );
  }
}
export default Banner;