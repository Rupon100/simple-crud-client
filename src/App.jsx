 
import { NavLink } from 'react-router-dom';
import './App.css'
// import Users from './../../practice-backend-basic/user-client/user/src/Components/Users';
import { useState } from 'react';

function App() {
  // const [users, setUsers] = useState([]);
   
  const handleAdduser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      // setUsers(data);
      console.log(data);
      if(data.insertedId){
        alert("Users added successfully");
        form.reset();
      }
    })

  } 

  return (
    <>
      <h1>Simple CRUD</h1>
      <NavLink to='/users'>All Users</NavLink>
      <form onSubmit={handleAdduser} >
        <input type="text" name="name" placeholder='name' />
        <br />
        <input type="email" name="email" placeholder='email' />
        <br />
        <input type="submit" value="add user" />
      </form>
    </>
  )
}

export default App
