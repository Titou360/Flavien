import { useState } from 'react';

const Switcher = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newState = !isChecked;
    setIsChecked(newState);
    // Appeler la fonction de rappel avec la nouvelle valeur isChecked
    onToggle(newState);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="sr-only" />
          <div className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-cafeBlack' : 'bg-cafeBlack'}`}></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switcher;
