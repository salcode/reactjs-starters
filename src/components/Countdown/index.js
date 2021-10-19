import {
  useState,
} from 'react';

export default function Countdown() {
  const [counter, setCounter] = useState(20);

  return (
    <h2>{counter}</h2>
  );
}
