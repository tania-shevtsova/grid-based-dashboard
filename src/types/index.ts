export type BlockType = 'line-chart' | 'bar-chart' | 'text';

export interface Block {
  id: string;
  type: BlockType;
  position: number;
}

export interface DashboardContextType {
  blocks: Block[];
  addBlock: (type: BlockType) => void;
  deleteBlock: (id: string) => void;
  moveBlock: (blockId: string, newPosition: number) => void;
}
