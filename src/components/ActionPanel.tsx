import React from 'react';
import { useDashboard } from '../context/DashboardContext';

export const ActionPanel: React.FC = () => {
  const { addBlock } = useDashboard();

  return (
    <div className="control-panel">
      <h2>Grid-Based Dashboard</h2>
      <div className="control-buttons">
        <button
          className="add-button"
          onClick={() => addBlock('line-chart')}
        >
          Add Line Chart
        </button>
        <button
          className="add-button"
          onClick={() => addBlock('bar-chart')}
        >
          Add Bar Chart
        </button>
        <button
          className="add-button"
          onClick={() => addBlock('text')}
        >
          Add Text Block
        </button>
      </div>
    </div>
  );
};
