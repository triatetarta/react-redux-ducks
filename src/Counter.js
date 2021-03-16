import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

const Counter = ({ name }) => {
  const dispatch = useDispatch();

  const [votes, setVotes] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  return (
    <div style={{ backgroundColor: 'grey' }}>
      <h2>{name}</h2>
      <h3>{`Votes: ${votes}`}</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
