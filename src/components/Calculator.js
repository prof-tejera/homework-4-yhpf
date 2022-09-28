import Number from "./Number";
import Operation from "./Operation";
import Screen from "./Screen";
import React, {useState} from "react";
import './Calculator.css';

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
    <div className="calculator">
      <div className="screen" >
        <Screen value={screenDisplay} />
      </div>
      <div className="keypad">
        <div>
          <Number value={7} onClick={handleNumberClick} className="number" />
          <Number value={4} onClick={handleNumberClick} className="number" />
          <Number value={1} onClick={handleNumberClick} className="number" />
          <Operation value="C" onClick={handleOperationClear} className="clear" />
        </div>
        <div>
          <Number value={8} onClick={handleNumberClick} className="number" />
          <Number value={5} onClick={handleNumberClick} className="number" />
          <Number value={2} onClick={handleNumberClick} className="number" />
          <Number value={0} onClick={handleNumberClick} className="number" />
        </div>
        <div>
          <Number value={9} onClick={handleNumberClick} className="number" />
          <Number value={6} onClick={handleNumberClick} className="number" />
          <Number value={3} onClick={handleNumberClick} className="number" />
          <Operation value="=" onClick={handleOperationCalculate} className="calculate" />
        </div>
        <div>
          <Operation value="/" onClick={handleOperationClick} className="operator"/>
          <Operation value="x" onClick={handleOperationClick} className="operator" />
          <Operation value="-" onClick={handleOperationClick} className="operator" />
          <Operation value="+" onClick={handleOperationClick} className="operator" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
