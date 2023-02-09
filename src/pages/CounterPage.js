import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      Count is {count}
      <Button primary rounded onClick={increment}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
