import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="logo">
                 {/* <img src="images/admin1.jpeg" alt="" />  */}
                  <h1><b>Admin Portal</b> </h1>
            </div>
            <div className="lists">
                <ul>
                    <li><Link to="/adminpage/">DashBoard</Link></li>
                    <li><Link to="/adminpage/add-book" >Add Books</Link></li>
                    <li><Link to="/adminpage/add-user" >Add Users</Link></li>
                    <li><Link to="/adminpage/book-list" >Book List</Link></li>
                    <li><Link to="/adminpage/user-list" >User List</Link></li>
                    <li><Link to="/" >Logout</Link></li>
                </ul>
            </div>

        </div>
     );
}
 
export default AdminNavbar;