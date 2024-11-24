import { useLoaderData } from "react-router-dom";

 

const Update = () => {
    const user = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const upateUser = { name, email }
        console.log(user);

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('Updated Successfully!')
            }
        })
    }

    return (
        <div>
            <h3>Update information of {user.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user.name} />
                <br />
                <input type="email" name="email" defaultValue={user.email} />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;