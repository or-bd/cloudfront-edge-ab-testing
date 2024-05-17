import { Edge } from 'reactflow';
import Testing, { isA, isStable } from '../../utils/testing';

const getEdges = (): Edge[] => [
  { id: '1-3', source: '1', target: '3', label: 'yes', animated: !isStable() },
  { id: '1-2', source: '1', target: '2', label: 'no', animated: isStable() },
  { id: '3-5', source: '3', target: '5', label: 'yes', animated: Testing.random_y > 0 && !isA() },
  { id: '3-4', source: '3', target: '4', label: 'no', animated: Testing.random_y > 0 && isA() },
];

export default getEdges;
