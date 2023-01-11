
import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
            <div className="logo">
                 {/* <img src="images/admin1.jpeg" height="10" width="40" alt="" />   */}
                  <h1><b>User Portal</b> </h1>
            </div>
            <div className="lists">
                <ul>
                    <li><Link to="/userpage/">DashBoard</Link></li>
                   <li><Link to="/userpage/book-list" >Book List</Link></li>
                    <li><Link to="/" >Logout</Link></li>
                </ul>
            </div>

        </div>
     );
}
 
export default UserNavbar;