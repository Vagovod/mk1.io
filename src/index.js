import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const InputForNum = ({ val, onChange }) => {
  return (
    <input
      style={styles.input}
      value={val}
      onChange={(e) => onChange(e.target.value)}
      type="number"
    />
  );
};

function App() {
  const [firstNum, setFirstNum] = React.useState(0);
  const [secondNum, setSecondNum] = React.useState(0);
  const [sum, setSum] = React.useState(0);

  const getResult = () => {
    setSum(Number(firstNum) + Number(secondNum));
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Task: The sum of two numbers</p>
      <InputForNum val={firstNum} onChange={setFirstNum} />
      <InputForNum val={secondNum} onChange={setSecondNum} />
      <button onClick={getResult}>Add Two Numbers</button>
      <p style={{ margin: 15 }}>Result: {sum} </p>
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
  },
  input: {
    marginBottom: 15,
    padding: 8,
    fontSize: 16,
    color: 'steelblue',
  },
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
