import React, {useState} from "react";
import ExpenseItem from "./components/Expenses/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const App=()=> {
  const DUMMY_EXPENSES=[
    {     id:'e1',title:'Car Insurance',     amount:400,     date: new Date(2022,10,21)    },
    {      id:'e2',title:'Truck Insurance',      amount:450,      date: new Date(2023,11,21)    },
    {      id:'e3',title:'House Insurance',      amount:500,      date: new Date(2024,9,21)    },
    {      id:'e4',title:'Life Insurance',      amount:550,      date: new Date(2025,8,21)      }
  ];
  const [expenses, setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
 console.log('Updated Expense list is-');
 console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
