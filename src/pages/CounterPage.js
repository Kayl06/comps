import { useState } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <Panel>
      This is a test push
      Count is {count}
      <div className="flex flex-row gap-2 ">
        <Button primary rounded onClick={increment}>
          Increment
        </Button>
        <Button primary rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form>
        <label className="mr-2">Add a lot</label>
        <input
          type="number"
          className="bg-gray p-1 m-3 border border-gray-300 rounded"
        />

        <div className="flex flex-row gap-2">
          <Button
            primary
            outline
            rounded
            className="w-40 flex items-center justify-center"
          >
            Add it
          </Button>
        </div>
      </form>
    </Panel>
  );
}

export default CounterPage;
