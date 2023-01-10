import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/addUser.css';
const AddUser = () => {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [email, setEmail] = useState("")
    let [phoneNumber, setphoneNumber] = useState("")

    let navigate = useNavigate()
    let handleSubmit =(x)=>{
        x.preventDefault();  //prevent reloading of the page
        //data to be posted
        let userData = {name,age,email,phoneNumber}
        //posting to the server
        fetch('http://localhost:4000/Users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
       body:JSON.stringify(userData)
    })
    alert('User added successfully')
    navigate('/adminpage/user-list')
}


    return (
        <div className="addUser">
            <h1>Add a New User </h1>
           
                <div className="form">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="name">
                            {/* <label  htmlFor="">Title           :</label>  */}
                            <input value={name} onChange={(x) => setName(x.target.value)} type="text" placeholder="Enter Your Name" required /> <br />
                        </div>
                        <div className="age" >
                            {/* <label htmlFor="">Author:</label> */}
                            <input value={age} onChange={(x) => setAge(x.target.value)} type="number" placeholder="Enter Age" required /> <br />
                        </div>
                        <div className="email">
                            {/* <label htmlFor="">Category:</label> */}
                            <input value={email} onChange={(x) => setEmail(x.target.value)} type="email" placeholder="Enter  Email" required /> <br />
                        </div>
                        <div className="phoneNumber">
                            {/* <label htmlFor="">Category:</label> */}
                            <input value={phoneNumber} onChange={(x) => setphoneNumber(x.target.value)} type="tel" minLength='10' maxLength='10' placeholder="Enter Phone Number" required /> <br />
                        </div>

                        <button>Add Book</button>
                    </form>
                </div>
            </div>
    
    );
}

export default AddUser;