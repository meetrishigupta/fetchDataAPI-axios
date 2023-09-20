import React from "react";
import { useState } from "react";
const Form = () => {
  const [sum, setSum1] = useState();
  const [sum2, setSum2] = useState();
  const [total, setTotal] = useState();
  const sumaddition = () => {
    const num1 = parseFloat(sum);
    const num2 = parseFloat(sum2);
    setTotal(num1 + num2);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setSum1(e.target.value)} /> <br />
      <input type="text" onChange={(e) => setSum2(e.target.value)} /> <br />
      <button onClick={sumaddition}>Add</button>
      <h3>{total}</h3>
    </div>
  );
};

export default Form;
