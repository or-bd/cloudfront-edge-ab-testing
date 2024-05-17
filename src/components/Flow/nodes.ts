import { Node } from 'reactflow';
import Testing, { isA, isStable } from '../../utils/testing';
import { getNodeStyle } from './utils.ts';

const getNodes = (): Node[] => [
  {
    id: '1',
    data: { label: `Random X: ${Testing.random_x} > Stable` },
    position: { x: 80, y: 10 },
    style: {
      fontWeight: 'normal'
    }
  },
  {
    id: '2',
    data: { label: 'Stable' },
    position: { x: 40, y: 150 },
    style: getNodeStyle(isStable()),
  },
  {
    id: '3',
    data: { label: `Random Y: ${Testing.random_y} > A` },
    position: { x: 160, y: 150 },
    style: {
      fontWeight: 'normal'
    }
  },
  {
    id: '4',
    data: { label: 'A' },
    position: { x: 120, y: 290 },
    style: getNodeStyle(Testing.random_y > 0 && isA()),
  },
  {
    id: '5',
    data: { label: 'B' },
    position: { x: 230, y: 290 },
    style: getNodeStyle(Testing.random_y > 0 && !isA()),
  },
];

export default getNodes;
