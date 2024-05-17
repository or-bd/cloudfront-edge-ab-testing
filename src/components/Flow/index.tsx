import ReactFlow, { Background } from 'reactflow';
import getNodes from './nodes.ts';
import getEdges from './edges.ts';
import 'reactflow/dist/style.css';
import style from './style.module.css';

const Flow = () => {
  return (
    <div className={style.container}>
      <ReactFlow nodes={getNodes()} edges={getEdges()} panOnDrag={false} maxZoom={1} minZoom={1}>
        <Background/>
      </ReactFlow>
    </div>
  );
};

export default Flow;
