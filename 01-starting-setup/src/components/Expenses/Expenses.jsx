import React,{useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItems";
import './Expenses.css';
import Card from '../UI/Card';
import '../UI/Card.css';
function Expenses(props)
{  const[year,setYear]=useState("");
  const yearFilterEventHandler=(y)=>{
    console.log('In Expenses.jsx '+ y);
    setYear(y);
     }
     console.log("Filtered year is " + year);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onYearFilter={yearFilterEventHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;