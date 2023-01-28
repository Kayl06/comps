import Accordion from "./components/Accordion";
import ButtonPage from "./pages/ButtonPage";

function App() {
  const items = [
    {
      id: '123asd',
      label: "Can I use React on a project?",
      content: "Lorem ipmsumewq ferer kwek yes",
    },
    {
      id: 'a23jswe',
      label: "Can I use React on a bowl?",
      content: "Lorem ipmsumewq ferer kwek yes",
    },
    {
      id: 'k2lssaw',
      label: "Can I use React?",
      content: "Lorem ipmsumewq ferer kwek yes",
    },
    {
      id: 'k21ls',
      label: "Can I use React on a php?",
      content: "Lorem ipmsumewq ferer kwek yes",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
