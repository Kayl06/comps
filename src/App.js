import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline> Click me! </Button>
      </div>
      <div>
        <Button primary rounded outline> Hover me! </Button>
      </div>
      <div>
        <Button danger rounded outline> See more! </Button>
      </div>
    </div>
  );
}

export default App;
