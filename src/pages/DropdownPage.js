import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      id: "123asd",
      label: "Red",
      value: "red",
    },
    {
      id: "122sd",
      label: "Blue",
      value: "blue",
    },
    {
      id: "12342asd",
      label: "Green",
      value: "green",
    },
  ];
  return (
    <div>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelect}
      />
    </div>
  );
}

export default DropdownPage;
