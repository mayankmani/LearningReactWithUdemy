import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
   const titleChangeEventHandler = (event) => {
     setEnteredTitle(event.target.value);
  };
    console.log("In ExpesneForm.js " + enteredTitle);
  const AmountChangeEventHandler = (event) => {
      setEnteredAmount(event.target.value);
  };
  const DateChangeEventHandler = (event) => {
    setEnteredDate(event.target.value);
  };
const submitHandler=(event)=>{
  event.preventDefault();
  const expenseData = {title: enteredTitle, amount: enteredAmount,  date: new Date(enteredDate),
  };
  props.onSaveExpenseData(expenseData);
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeEventHandler}
            value={enteredAmount}
          />
        </div>{" "}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-10-27"
            max="2031-10-31"
            onChange={DateChangeEventHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
