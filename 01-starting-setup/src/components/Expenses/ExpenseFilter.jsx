import React, {useState} from 'react';
import './ExpenseFilter.css';
const ExpenseFilter=(props)=>{
  const dropdownChangeEventHandler=(event)=>{
    props.onYearFilter(event.target.value);
    console.log('In ExpenseFilter.jsx '+event.target.value);
  }
  
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter label">Filter by Year</label>
        <select onChange={dropdownChangeEventHandler}>
          <option value="2022" defaultValue='2022'>
            2022
          </option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
}
export default ExpenseFilter;