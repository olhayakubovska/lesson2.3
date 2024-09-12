import { useState } from "react";
import "./App.css";

const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const App = () => {
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [res, setRes] = useState(null);

  const reset = () => {
    setRes(null);
    setOperand1("");
    setOperator("");
    setOperand2("");
  };

  const equals = () => {
    let num;
    if (operator === "+") {
      num = Number(operand1) + Number(operand2);
    }

    if (operator === "-") {
      num = Number(operand1) - Number(operand2);
    }
    setRes(num);
  };

  const fn1 = (num) =>
    operator === "" ? setOperand1(operand1 + num) : setOperand2(operand2 + num);

  return (
    <div className="App">
      <div className="window">
        {res ? (
          res
        ) : (
          <>
            {" "}
            {operand1}
            {operator}
            {operand2}
          </>
        )}
      </div>
      <div className="abc">
        <div className="numbers">
          {NUMS.map((num, index) => (
            <div className="cell" key={index} onClick={() => fn1(num)}>
              {num}
            </div>
          ))}
        </div>
        <div className="operators">
          <div className="cell" onClick={() => setOperator("+")}>
            +
          </div>
          <div className="cell" onClick={() => setOperator("-")}>
            -
          </div>
          <div className="cell" onClick={equals}>
            =
          </div>
          <div className="cell" onClick={reset}>
            C
          </div>
        </div>
      </div>
    </div>
  );
};
