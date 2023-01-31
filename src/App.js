import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    console.log(option);

    // setSelected(option);
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
      <Dropdown options={options} handleSelect={handleSelect} />
    </div>
  );
}

export default App;