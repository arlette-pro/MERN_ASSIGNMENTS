import React, { useState } from 'react';

const ColorBoxForm = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };



  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBox = { color, size };
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
    setColor('');
    setSize('');
  };

  return (
    <div>
      <form  className='boxForm' onSubmit={handleSubmit}>
        <label>
          Color
        </label>
          <input type="text" value={color} onChange={handleColorChange} />
        <label>
          Size
        </label>
          <input type="number" value={size} onChange={handleSizeChange} />
        <button type="submit">Add Box</button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: box.color, width: box.size, height: box.size }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxForm;