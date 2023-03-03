import produce from "immer";
import { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUE_TO_ADD = "add-value-to-add";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;

    case DECREMENT:
      state.count = state.count - 1;
      return;

    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;

    case ADD_VALUE_TO_ADD:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({ type: CHANGE_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE_TO_ADD });
  };

  return (
    <Panel>
      Count is {state.count}
      <div className="flex flex-row gap-2 ">
        <Button primary rounded onClick={increment}>
          Increment
        </Button>
        <Button primary rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="mr-2">Add a lot</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
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
