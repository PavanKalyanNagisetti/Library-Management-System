import { Route, Routes } from 'react-router-dom';
import '../Styles/adminportal.css';
import AddBook from './addBook';
import AddUser from './addUser';
import AdminDashBoard from './adminDashBoard';
import AdminNavbar from './adminNavbar';
import BookList from './bookList';
import ReadBook1 from './readbook1';
import UserList from './userList';
const AdminHomePage = () => {
    return ( 
       <div className="adminhome">
        <AdminNavbar/>
        <Routes>
          <Route path='/' element={<AdminDashBoard/>}/>
          <Route path='/book-list' element={<BookList/>}/>
          <Route path='/book-list/:id' element={<ReadBook1/>}/>
          <Route path='/user-list' element={<UserList/>}/>
          <Route path='/add-book' element={<AddBook/>}/>
          <Route path='/add-user' element={<AddUser/>}/>
        </Routes>

       </div>
     );
}
 
export default AdminHomePage;