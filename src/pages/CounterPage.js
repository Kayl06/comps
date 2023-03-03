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
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_VALUE_TO_ADD:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
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
    dispatch({ type: ADD_VALUE_TO_ADD })
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
