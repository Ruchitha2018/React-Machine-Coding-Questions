import { useState } from "react";

const TOTAL = 4;
const GRID_SIZE = 2;

export default function GridLights() {
  const [activeCells, setActiveCells] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const handleClick = (index) => {
    if (activeCells.includes(index)) return;
    const newActiveCells = [...activeCells, index];
    setActiveCells(newActiveCells)
    if (newActiveCells.length === TOTAL) {
      setIsDeactivating(true);
      startReverseDeactivation(newActiveCells);
    }
  };

  const startReverseDeactivation = (order) => {
    let i = order.length;
    const interval = setInterval(() => {
      setActiveCells((prev) => prev.filter((data) => data !== order[i]));
      i--;
      if (i < 0) {
        clearInterval(interval);
        setIsDeactivating(false);
      }
    }, 500)
  };

  const resetGrid = () => {
    // TODO: Implement reset logic
    setActiveCells([]);
  };

  return (
    <div className="main-container">
      <h1 className="grid-title">Grid Lights</h1>

      <div className="button-section">
        <button onClick={resetGrid} data-testid="reset-btn">
          Reset Grid
        </button>
      </div>

      <div className="cinema-hall" data-testid="grid-lights">
        {Array.from({ length: GRID_SIZE }, (_, rowIdx) => (
          <div className="row" key={rowIdx}>
            {Array.from({ length: GRID_SIZE }, (_, colIdx) => {
              const index = rowIdx * GRID_SIZE + colIdx
              return (
                <div key={index} onClick={() => handleClick(index)} className={`cell col ${activeCells.includes(index) ? 'active' : ''}`}>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
