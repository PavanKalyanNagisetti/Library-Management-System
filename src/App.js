
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/landingPage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userLogin'
import AdminHome from './Components/adminhomepage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<UserLogin/>} />
        <Route path='/adminpage/*'  element={<AdminHome/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

