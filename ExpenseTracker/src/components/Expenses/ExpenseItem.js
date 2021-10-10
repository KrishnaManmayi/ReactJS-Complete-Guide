import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const date = props.expense.date

    // const [title, setTitle] = useState(props.expense.title);
    // const [amount, setAmount] = useState(props.expense.amount);

    // const clickHandler = () =>{
    //     setTitle('Updated!');
    //     console.log(title);
    // }

    // const changePrice = () => {
    //     setAmount(amount-1);
    // }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date}/>
                <div className="expense-item__description">
                    <h2>{props.expense.title}</h2>
                    <div className="expense-item__price">$ {props.expense.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button>
                <button onClick={changePrice}>Change Price</button> */}
            </Card>
        </li>
        
    )
}

export default ExpenseItem;