import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

import React, {useState} from 'react';

function ExpenseItem(props)
{
       const [title, setTitle] = useState(props.title); 
       const onClickEventHandler= ()=>{
             setTitle('Updated Title');
        };
        console.log(title);
       return (
        <Card className='expense-item'>
         <ExpenseDate date={props.date}></ExpenseDate>
          <div className="expense-item__description"> <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          </div>
          <button onClick={onClickEventHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;