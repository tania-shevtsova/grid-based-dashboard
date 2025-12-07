import React from 'react';
import { useDrop } from 'react-dnd';
import { useDashboard } from '../context/DashboardContext';
import { Block } from './Block';

interface GridCellProps {
  position: number;
}

export const GridCell: React.FC<GridCellProps> = ({ position }) => {
  const { blocks, moveBlock } = useDashboard();
  const block = blocks.find(b => b.position === position);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'BLOCK',
    canDrop: () => !block,
    drop: (item: { id: string }) => {
      moveBlock(item.id, position);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }), [block, position, moveBlock]);

  const getClassName = () => {
    let className = 'grid-cell';
    if (block) className += ' occupied';
    if (isOver && canDrop) className += ' drop-target';
    if (isOver && !canDrop) className += ' drop-invalid';
    return className;
  };

  return (
    <div ref={drop} className={getClassName()}>
      {block ? <Block block={block} /> : null}
    </div>
  );
};
