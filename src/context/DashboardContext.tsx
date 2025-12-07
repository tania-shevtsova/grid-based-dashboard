import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Block, BlockType, DashboardContextType } from '../types';

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  const addBlock = (type: BlockType) => {
    setBlocks((prevBlocks) => {
      const occupiedPositions = new Set(prevBlocks.map(block => block.position));
      let position = 0;
      while (occupiedPositions.has(position)) {
        position++;
      }
      
      const newBlock: Block = {
        id: `block-${Date.now()}-${Math.random()}`,
        type,
        position,
      };
      return [...prevBlocks, newBlock];
    });
  };

  const deleteBlock = (id: string) => {
    setBlocks((prevBlocks) => prevBlocks.filter(block => block.id !== id));
  };

  const moveBlock = (blockId: string, newPosition: number) => {
    setBlocks((prevBlocks) => {
      const isOccupied = prevBlocks.some(block => block.id !== blockId && block.position === newPosition);
      if (isOccupied) {
        return prevBlocks;
      }

      return prevBlocks.map(block =>
        block.id === blockId ? { ...block, position: newPosition } : block
      );
    });
  };

  return (
    <DashboardContext.Provider value={{ blocks, addBlock, deleteBlock, moveBlock }}>
      {children}
    </DashboardContext.Provider>
  );
};
