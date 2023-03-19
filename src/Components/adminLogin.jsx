import'../Styles/adminLogin.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
    let [email,setEmail]=useState('')
    let [password,setPassword] =useState('')
    let navigate =useNavigate()
    let login = (x) => {
        x.preventDefault();
        let data={email,password} //data from input

        //admin validation
        if(email == "nagisettipavankalyan00@gmail.com" && password == "Pavan@123"){
            navigate('/adminpage/')
        }else{
            alert(`invalid Credintials`)
        }
        console.log(data);
    }

    return (
        <div className="adminLogin">
            <div className="form-container1">
                <h1>Login as Admin</h1> <br />
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" required value={email} onChange={(x)=>setEmail(x.target.value)} placeholder="email address" /> <br /> <br />
                        </div>
                        <div className="password">
                            <input type="password" required placeholder="Password" value={password} onChange={(x) => setPassword(x.target.value)} />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;