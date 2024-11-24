import { useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

 

const Users = () => {
    const initaialUsers = useLoaderData();
    const [users, setUsers] = useState(initaialUsers);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
               alert("User Deleted Successfully!");
               const remaining = users.filter(user => user._id !== id);
               setUsers(remaining)
            }
        })
    }

    return(
        <div>
            <NavLink to='/'>Home</NavLink>
            <div>
                <ul>
                    {
                        users.map(user => <p key={user._id}>
                            {user.name} || {user.email}
                            <Link to={`/update/${user._id}`}>
                              <button>update</button>
                            </Link>
                            <button onClick={() => handleDelete(user._id)} >x</button>
                        </p>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Users;