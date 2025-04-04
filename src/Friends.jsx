import { use } from "react"
import Friend from "./Friend";

export default function Friends({fetchFriends}){

    const friends = use(fetchFriends);
    console.log(friends);

    const friendsStyle = {
        border: "2px solid tomato",
        borderRadius: '20px',
        marginBottom: "20px",
        padding: "10px",
      };

    return(
        <div style={friendsStyle}>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}