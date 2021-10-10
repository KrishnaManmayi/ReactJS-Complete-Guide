import React, {useState} from 'react';

import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

function NewExpenses(props){
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default NewExpenses;