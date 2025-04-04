export default function Friend({friend}){

    const {name , email, phone} = friend;

    const friendsStyle = {
        border: "2px solid tomato",
        borderRadius: '20px',
        marginBottom: "20px",
        padding: "10px",
      };

    return(
        <div style={friendsStyle}>
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
            <h4>Phone : {phone}</h4>
        </div>
    )
}