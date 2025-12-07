import React from 'react';
import { Block as BlockType } from '../types';
import { useDashboard } from '../context/DashboardContext';
import { LineChartBlock } from './LineChartBlock';
import { BarChartBlock } from './BarChartBlock';
import { TextBlock } from './TextBlock';
import { useDrag } from 'react-dnd';

interface BlockProps {
  block: BlockType;
}

export const Block: React.FC<BlockProps> = ({ block }) => {
  const { deleteBlock } = useDashboard();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BLOCK',
    item: { id: block.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [block.id]);

  const renderBlockContent = () => {
    switch (block.type) {
      case 'line-chart':
        return <LineChartBlock />;
      case 'bar-chart':
        return <BarChartBlock />;
      case 'text':
        return <TextBlock />;
      default:
        return null;
    }
  };

  const getBlockTitle = () => {
    switch (block.type) {
      case 'line-chart':
        return 'Untitled widget - Line Chart';
      case 'bar-chart':
        return 'Untitled widget - Bar Chart';
      case 'text':
        return 'Untitled widget - Text';
      default:
        return 'Untitled widget';
    }
  };

  const getBlockSubtitle = () => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.';
  };

  return (
    <div
      ref={drag}
      className={`block ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="block-header">
        <div className="block-title">
          <h3>{getBlockTitle()}</h3>
          <p className="block-subtitle">{getBlockSubtitle()}</p>
        </div>
        <button
          className="delete-button"
          onClick={() => deleteBlock(block.id)}
          aria-label="Delete block"
        >
          ×
        </button>
      </div>
      <div className="block-content">
        {renderBlockContent()}
      </div>
    </div>
  );
};
