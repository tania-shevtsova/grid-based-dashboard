# Grid-Based Dashboard

A React + TypeScript application that allows adding, moving, and deleting blocks on a grid-based canvas. Built with Webpack and featuring drag-and-drop functionality.

## Features

✅ **Grid Layout**: Fixed 3-column grid with unlimited vertical height  
✅ **Block Types**: Line Chart, Bar Chart, and Text Block  
✅ **Add Blocks**: Three buttons to add different block types  
✅ **Delete Blocks**: Hover over any block to reveal the delete button  
✅ **Drag & Drop**: Move blocks between empty cells with visual feedback  
✅ **State Management**: Built with React Context and useState  
✅ **Pure CSS**: All styling done with clean, maintainable CSS  

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Webpack 5** - Build tool and dev server
- **React DnD** - Drag and drop functionality
- **Chart.js** + **React-Chartjs-2** - Chart rendering
- **Pure CSS** - No CSS-in-JS or frameworks

## Project Structure

```
grid-based-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Block.tsx              # Individual block wrapper
│   │   ├── BarChartBlock.tsx      # Bar chart component
│   │   ├── LineChartBlock.tsx     # Line chart component
│   │   ├── TextBlock.tsx          # Text content component
│   │   ├── ActionPanel.tsx        # Add block buttons
│   │   ├── Grid.tsx               # Main grid container
│   │   └── GridCell.tsx           # Individual grid cell
│   ├── context/
│   │   └── DashboardContext.tsx   # State management
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── styles/
│   │   └── App.css                # All application styles
│   ├── App.tsx                    # Main app component
│   └── index.tsx                  # Application entry point
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```
   The application will open automatically at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```
   Production-ready files will be in the `dist/` folder

## Usage

### Adding Blocks

Click one of the three buttons at the top:
- **Add Line Chart** - Adds a line chart showing mentions over time
- **Add Bar Chart** - Adds a bar chart showing sentiment distribution
- **Add Text Block** - Adds a text content block

New blocks are automatically placed in the first available empty cell (left to right, top to bottom).

### Deleting Blocks

1. Hover over any block
2. A delete button (×) appears in the top-right corner
3. Click the delete button to remove the block

### Moving Blocks

1. Click and drag any block
2. Drag it over an empty cell (highlighted in green when valid)
3. Release to drop the block in the new position
4. Occupied cells will be highlighted in red and won't accept drops

## Technical Implementation

### State Management

All state is managed using React Context (`DashboardContext`) with `useState`:
- `blocks` - Array of all blocks with their positions
- `addBlock()` - Adds a new block to the first empty position
- `deleteBlock()` - Removes a block by ID
- `moveBlock()` - Moves a block to a new position (if empty)

### Grid System

- Grid uses CSS Grid with `grid-template-columns: repeat(3, 1fr)`
- Each cell can hold exactly one 1×1 block
- Grid dynamically expands vertically as blocks are added
- Minimum of 4 rows (12 cells) displayed

### Drag and Drop

- Implemented using `react-dnd` with HTML5 backend
- Blocks are draggable (`useDrag` hook)
- Empty cells are drop targets (`useDrop` hook)
- Visual feedback shows valid/invalid drop zones
- Prevents dropping on occupied cells

## Deployment

The application can be deployed to any static hosting service:

### Option 1: Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

### Option 2: Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect Webpack and deploy

### Option 3: GitHub Pages
1. Build: `npm run build`
2. Deploy the `dist/` folder to gh-pages branch
