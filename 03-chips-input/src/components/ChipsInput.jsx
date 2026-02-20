import React, { useState } from "react";
import { useId } from "react";
function ChipsInput() {

    const [inputValue, setInputValue] = useState("");
    const [chips, setChips] = useState([]);
    const id = useId();

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const newChip = {
                id: Date.now(),
                name: inputValue
            }
            setChips((prev) => [...prev, newChip]);
        }
    }
    const handleRemove = (id) => {
      const filteredRecipes = chips.filter((data) => data.id !== id);
      setChips(filteredRecipes)
    }
    return (
        <div className='main-container'>
            <h2>Chips Input</h2>
            <input
                type="text"
                placeholder="Type a chip and press tag"
                className="input"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {chips.map((data, index) => (
                <div key={data.id}>
                    <span>{data.name}</span>
                    <span onClick={() => handleRemove(data.id)}>Remove</span>
                </div>
            ))}
        </div>
    );
}

export default ChipsInput;