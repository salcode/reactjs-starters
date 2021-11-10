import {
  useEffect,
  useState,
} from 'react';

export default function Countdown() {
  const [counter, setCounter] = useState(20);

  useEffect(
    () => {
      if (counter <= 0) {
        return;
      }
      const timeoutId = setTimeout(
        () => setCounter(
          (n) => n - 1
        ),
        500
      );
      return () => clearTimeout(timeoutId);
    },
    [counter]
  );

  return (
    <h2>{counter}</h2>
  );
}
