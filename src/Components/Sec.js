// Sec.js
import React, { useContext } from 'react';
import { BgColorContext } from '../Context/BgColorContext';
import { useNavigate } from 'react-router-dom'; // Corrected import

export default function Sec() {
  // Access bgColor and toggleBgColor from the context
  const { bgColor, toggleBgColor } = useContext(BgColorContext);
  const navigate = useNavigate(); // Corrected naming to match convention

  const handlePage = () => {
    navigate('/next');
  }

  return (
    <div>
      <h1 className={`${bgColor} text-3xl font-white`}>hello I'm sec.js</h1>
      <button className="bg-black text-white text-xl rounded w-32" onClick={toggleBgColor}>
        click here
      </button>
      <button className="bg-black text-white text-xl rounded w-32" onClick={handlePage}>
        Next Page
      </button>
    </div>
  );
}
