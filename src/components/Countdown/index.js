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
      setTimeout(
        () => setCounter(counter - 1),
        500
      );
    },
    [counter]
  );

  return (
    <h2>{counter}</h2>
  );
}
