import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DashboardProvider } from './context/DashboardContext';
import { ActionPanel } from './components/ActionPanel';
import { Grid } from './components/Grid';
import './styles/App.css';

export const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DashboardProvider>
        <div className="app">
          <ActionPanel />
          <Grid />
        </div>
      </DashboardProvider>
    </DndProvider>
  );
};
