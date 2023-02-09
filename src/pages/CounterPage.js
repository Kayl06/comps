import { useState, useEffect } from "react";
import Button from "../components/Button";

// custom hook;
function useCounterHook(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return {
    count,
    handleClick,
  };
}

function CounterPage({ initialCount }) {
  const { count, handleClick } = useCounterHook(initialCount);

  return (
    <div>
      Count is {count}
      <Button primary outline onClick={handleClick}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
