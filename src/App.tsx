import React from 'react';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerCounter from './ReducerCounter';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerCounter />
      <ReducerSample />
    </>
  );
}

export default App;
