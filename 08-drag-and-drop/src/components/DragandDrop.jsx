import { useState } from "react";

const initialAvailable = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Grapes" },
  { id: "4", name: "Mangoes" },
  { id: "5", name: "Pineapple" }
];

export default function DragandDrop() {
  const [available, setAvailable] = useState(initialAvailable);
  const [dropped, setDropped] = useState([]);

  const handleDragStart = (e, index, source) => {
    e.dataTransfer.setData("index", index);
    e.dataTransfer.setData("source", source);
  }

  const handleDrop = (e, target) => {
    e.preventDefault();
    const index = e.dataTransfer.getData("index");
    const source = e.dataTransfer.getData("source");
    let draggedItem;
    if (target === "available") {
      draggedItem = available.find((item) => item.id === index);
      setAvailable((prev) => prev.filter((data) => data.id !== index));
      setDropped((prev) => [...prev, draggedItem]);
    } else {
      draggedItem = dropped.find((item) => item.id === index);
      setDropped((prev) => prev.filter((data) => data.id !== index));
      setAvailable((prev) => [...prev, draggedItem]);
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div className="app-wrapper">
      <header>
        <h1>Drag & Drop Fruits</h1>
        <button className="reset-btn">Reset Lists</button>
      </header>

      <div className="container">
        <div className="column" onDrop={(e) => handleDrop(e, "dropped")} onDragOver={handleDragOver}>
          <h2>Available Fruits</h2>
          <p className="empty">No fruits here</p>
          {available.map((data, index) => (
            <div className="item" draggable onDragStart={(e) => handleDragStart(e, data.id, "available")}>{data.name}</div>
          ))}
        </div>

        <div className="column drop-zone" onDrop={(e) => handleDrop(e, "available")} onDragOver={handleDragOver}>
          <h2>Dropped Fruits</h2>
          <p className="empty">Drop fruits here</p>
          {dropped.map((data, index) => (
            <div className="item" draggable onDragStart={(e) => handleDragStart(e, data.id, "dropped")}>{data.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}