import { useState } from "react";

function Dropdown({ options, handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);

    handleSelect(option)
  }

  const renderedOptions = options.map((option) => {
    return <div className="cursor-pointer py-2" onClick={() => {handleOptionClick(option)}} key={option.value}>{option.value}</div>;
  });

  return (
    <div className="cursor-pointer bg-gray-50 p-4 border-b">
      <div onClick={handleToggleOpen}>Select...</div>
      <div>{isOpen && renderedOptions}</div>
    </div>
  );
}

export default Dropdown;

