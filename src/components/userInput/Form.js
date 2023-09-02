import React, {useState} from "react";

import Button from "../UI/Button";
// import Input from "./Input";

import "./Form.css";
import "../UI/Button.css";

const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution":2000,
    "expected-return": 6,
    "duration": 10,
  };

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      }
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput)
  };

  const resetHandler = (event) => {
    setUserInput(initialUserInput);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              onChange={(event) => {inputChangeHandler("current-savings",event.target.value)}}
              value={userInput["current-savings"]}
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              onChange={(event) => {inputChangeHandler("yearly-contribution",event.target.value)}}
              value={userInput["yearly-contribution"]}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              onChange={(event) => {inputChangeHandler("expected-return",event.target.value)}}
              value={userInput["expected-return"]}
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              onChange={(event) => {inputChangeHandler("duration",event.target.value)}}
              value={userInput["duration"]}
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <Button type="reset" onClick={resetHandler} className="buttonAlt">Reset</Button>
          <Button type="submit" className="button">Calculate</Button>
        </p>
      </form>
  )
};

export default Form;
