import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter';

const App = () => {
  const count = useSelector((state) => state.counter.count);

  const voters = [
    'Dimitrios Chatz',
    'Bob Smith',
    'Stephanie Foo',
    'Kevin Marr',
  ];

  return (
    <div className='app'>
      <h1>Redux made easy</h1>
      <h3>{`Total Votes: ${count}`}</h3>
      {voters.map((voter, index) => {
        return <Counter key={index} name={voter} />;
      })}
    </div>
  );
};

export default App;
