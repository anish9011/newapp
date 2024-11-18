import React, { useEffect, useState } from 'react';

export default function Third() {
  const [btncolor, setBtncolor] = useState('bg-blue-700');
  const [btnValue, setBtnValue] = useState(20); // Use state to track button value

  function handleClick() {
    console.log("handleClick function");

    // Toggle the button color between blue and red
    setBtncolor(prev => prev === 'bg-red-700' ? 'bg-blue-700' : 'bg-red-700');
    
    // You can also update btnValue here if necessary (e.g., incrementing it)
    setBtnValue(prevValue => prevValue + 1);  // Example of incrementing btnValue
  }


  useEffect(() => {
    if (btnValue >= 20) {
        setBtncolor('bg-black');
        console.log("Running useEffect hook.............");
      }
  }, [handleClick]); // Add btnValue as a dependency to run useEffect only when btnValue changes

  return (
    <div>
      <button
        className={`${btncolor} text-yellow-400`}
        onClick={handleClick}
        value={btnValue} // Correctly pass the button's value
      >
        {btnValue}
      </button>
    </div>
  );
}
