import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (enteredUsername,enteredAge)=>{
    setUsersList((prevState)=>([...prevState,{
      name: enteredUsername,
      age: enteredAge,
      id: Math.floor(Math.random() * 1000)
    }]))
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
