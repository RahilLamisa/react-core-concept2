import { use } from "react";

export default function Users ({fetchUsers}){

    const users = use(fetchUsers)
    console.log(users);

    const usersStyle = {
        border: "2px solid tomato",
        borderRadius: '20px',
        marginBottom: "20px",
        padding: "10px",
      };

    return(
        <div style={usersStyle}>
            <h3>Users : {users.length}</h3>
        </div>
    )
}