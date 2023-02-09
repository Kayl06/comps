import { useState, useEffect } from "react";

// custom hook;
function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment,
  };
}

export default useCounter;


// for creating a custom hook; Brute force hook creation

// 1. Make function called `useSomething`
// 2. Find all non-JSX expressions that refer to 1-2 related pieces of state
// 3. Cut them all out, then add them into useSomething
// 4. Find not defined errors in your component
// 5. In your hook, return an object that contains the variables the component needs
// 6. In the component, call your hook. Destructure the properties of the component needs
// 7. Find not defined errors in the hook. Pass the missing variables as an argument to the hook
// 8. Rename the hook to something more meaningful
// 9. Rename returned properties to something more descriptive


