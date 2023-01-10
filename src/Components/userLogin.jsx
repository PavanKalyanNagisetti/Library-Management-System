import '../Styles/userLogin.css';
import { useNavigate } from "react-router-dom";
const UserLogin =()=>{
    let navigate=useNavigate()
    let login =()=>{
        navigate('/user/')
    }
  return(
    <div className="userLogin">
    <div className="form-container">
        <h1>Login as User</h1> <br />
        <div className="form_input">
            <form onSubmit={login}>
                <div className="email">
                    <input type="email" required  placeholder="email Address" /> <br /> <br />
                </div>
                <div className="password">
                    <input type="password" required placeholder="Password"  />
                </div>
                <button>Login</button>
            </form>
        </div>
    </div>
</div>
  )
}
export default UserLogin;
