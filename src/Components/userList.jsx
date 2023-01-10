import '../Styles/userList.css';
import { useState,useEffect } from "react";
const UserList = () => {
    let [users,setUsers]=useState([])
    useEffect (() => {
       let fetchData = async() =>{
         let response = await fetch(' http://localhost:4000/users')
         let data = await response.json()
         setUsers(data)
       }
       fetchData()
   },[])
   let handleDelete =(id,name) =>{
    setUsers(users.filter(x => x.id !=id))
    alert(`${name} has been deleted`)
}
    return ( 
        <div className="userList">
            <h1>User List</h1>

            <div className="users_section">
                {users.map(data => (
                    <div className="usercard">
                        <h2>{data.name}</h2>
                        <p><b>Age:</b> {data.age}</p>
                        <p><b> Email:</b>{data.email}</p>
                        <p><b> Phone Number:</b>{data.phoneNumber}</p>
                        <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                    </div>
                ))}
            </div>
            
        </div>
     );
}
 
export default UserList;