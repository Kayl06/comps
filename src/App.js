import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          Hover me!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          See more!
        </Button>
      </div>
    </div>
  );
}

export default App;
