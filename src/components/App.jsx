import React, { useState } from 'react';

function App() {
  // Set initial state for the selected color
  const [selectedColor, setSelectedColor] = useState('red');
    console.log("color")
  // Handle color change
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="App">
      <h1>Choose a Primary Color</h1>
      
      {/* Dropdown to select primary color */}
      <select onChange={handleColorChange} value={selectedColor}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>

      {/* Div that changes background color */}
      <div
        style={{
          width: '200px',
          height: '200px',
          marginTop: '20px',
          backgroundColor: selectedColor,
        }}
      ></div>
    </div>
  );
}

export default App;
