import {Navigate, Route, BrowserRouter as Router, Routes,} from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './components/common/Navbar';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Blogs } from './pages/Blogs';
import { Blogdetails } from './pages/blogdetails';
import { MoveToTop } from './components/common/MoveToTop';
// import { Bookings } from './pages/Bookings';


function App() {
  

  // console.log(token);

  const ProtectRoute = ({ children }) => {
    const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token'))
    return token !== null && token !== undefined ? ( children ) : ( <Navigate to={'/login'} /> )
  }

  const PublicRoutes = [
    {
      path: '/',
      component: <Home/>
    },
    {
      path: '/register',
      component: <Register />
    },
    {
      path: '/login',
      component: <Login />
    },
    
    // {
    //   path: '/bookings',
    //   component: <Bookings />
    // }
  ]

  const PrivateRoutes = [
    {
      path: '/blogs',
      component: <Blogs />
    },
    {
      path: '/blogdetails/:id',
      component: <Blogdetails />
    },
  ]
  return (
    <div className="">
      <ToastContainer/>
      <Router>
      <Navbar/>
        <Routes>

        {
          PublicRoutes.map(item => {
            return(
              <Route path={item.path} element={item.component} key={item.path}/>
            )
          })
        }
          {
            PrivateRoutes.map(item => {
              return (
                <Route path={item.path} element={<ProtectRoute>{item.component}</ProtectRoute>} key={item.path} />
              )
            })
          }
        </Routes>
        <MoveToTop />
      </Router>
    </div>
  );
}

export default App;
