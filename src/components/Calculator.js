import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import React, {useState} from "react";

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [screenDisplay, setScreenDisplay] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("");

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (e) => {    
    const number = parseInt(e.target.value);
    setScreenDisplay(number);
    if (operator === "") {
      setNumber1(number);
    } else {
      setNumber2(number);
    }
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (e) => {
    setOperator(e.target.value);
  };

  const handleOperationCalculate = () => {
    switch (operator) {
      case '+':
        setScreenDisplay(number1 + number2);
        break;
      case '-':
        setScreenDisplay(number1 - number2);
        break;
      case 'x':
        setScreenDisplay(number1 * number2);
        break;
      case '/':
        setScreenDisplay(number1 / number2);
        break;
    }
    setOperator("");
  };

  const handleOperationClear = () => {
    setScreenDisplay(0);
    setNumber1(0);
    setNumber2(0);
    setOperator("");
  }

  return (
    <div>
      <Screen value={screenDisplay} />
      <div style={{ display: "flex" }}>
        <div>
          <Number value={0} onClick={handleNumberClick} />
          <Number value={1} onClick={handleNumberClick} />
          <Number value={2} onClick={handleNumberClick} />
          <Number value={3} onClick={handleNumberClick} />
          <Number value={4} onClick={handleNumberClick} />
          <Number value={5} onClick={handleNumberClick} />
          <Number value={6} onClick={handleNumberClick} />
          <Number value={7} onClick={handleNumberClick} />
          <Number value={8} onClick={handleNumberClick} />
          <Number value={9} onClick={handleNumberClick} />
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Operation value="+" onClick={handleOperationClick} />
          <Operation value="/" onClick={handleOperationClick} />
          <Operation value="x" onClick={handleOperationClick} />
          <Operation value="-" onClick={handleOperationClick} />
          <Operation value="=" onClick={handleOperationCalculate} />
          <Operation value="clear" onClick={handleOperationClear} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
