import'../Styles/landingPage.css';
import { Link } from "react-router-dom";
const LandingPage =() =>{
    return(
        <div className="landingpage"  >
            <div className="loginType" >

                <div className="head">
                       <h1> Library Management System</h1>
                </div>

                <div className="login">

               <div className="admin">
                <img src="images/admin.jpg" height="130" width="130" alt="" /> <br /> 
               <Link to='/admin-login'><button type='button'> Admin Login</button></Link>
               </div>
                
                <div className="user">
                    <img src="images/users.png" height="130" width="130" alt="" /> <br /> 
                <Link to='/user-login'><button type='button'> Users Login</button></Link>
                </div>

                </div>
            </div>
        </div>
    )
}
export default LandingPage;