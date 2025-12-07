import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import { GridCell } from './GridCell';

export const Grid: React.FC = () => {
  const { blocks } = useDashboard();

  const maxPosition = blocks.length > 0 
    ? Math.max(...blocks.map(b => b.position))
    : 0;
  const totalCells = Math.max(maxPosition + 4, 12);

  const cells = Array.from({ length: totalCells }, (_, i) => i);

  return (
    <div className="grid">
      {cells.map(position => (
        <GridCell key={position} position={position} />
      ))}
    </div>
  );
};
