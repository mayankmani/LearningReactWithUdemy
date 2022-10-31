import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{

  const saveExpenseDataHandler=(enteredExpenseData)=>{
   const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
   };
   console.log('NexExpense is-  ');
   console.log(expenseData);
   props.onAddExpenseData(expenseData)
  };
    return <div className='new-expense'>

        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;