import React , {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from './AddUser.module.css';


const AddUser = props=>{
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 ){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid username and age (non-empty values)'
            });
            return;
        }
        if(+enteredAge < 1){//Unary plus operator
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (>0)'
            });
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        console.log(enteredUserName+" "+enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    const nameInputChangeHandler = (event)=>{
        setEnteredUserName(event.target.value);
    }

    const ageInputChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null);
    }
    
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" onChange={nameInputChangeHandler} value={enteredUserName} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageInputChangeHandler} value={enteredAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
        
    )
}

export default AddUser;