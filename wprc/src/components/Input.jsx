import React, { useState } from 'react';

const Input = ({ onInputChange }) => {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div>
      <input
        className='py-2 px-6 rounded-xl font-sans'
        placeholder='Enter the Location'
        type="text"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Input;
