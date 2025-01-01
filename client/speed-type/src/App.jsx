import './App.css';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from './components/navbar';
import Home from './screens/home';
import Footer from './components/footer';
import About from './screens/about';
import Analytics from './screens/analytics';
import Challenges from './screens/challenges';
import Leaderboard from './screens/leaderboards';
import PropTypes from 'prop-types';
import Contact from './screens/contact';
import Signup from './screens/signup';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import Dashnav from './components/dashboard/dashnav';
import Dashmain from './components/dashboard/dashmain';
import LeaderboardTable from './components/leaderboard/leaderboardtable';
function AppLayout({ children }) {
  const location = useLocation();
  const [showNavbarFooter, setShowNavbarFooter] = useState(true);

  useEffect(() => { 
    const hiddenRoutes = ['/signup', '/login', '/dashboard'];
    setShowNavbarFooter(!hiddenRoutes.includes(location.pathname));
  }, [location]);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      {children}
      {showNavbarFooter && <Footer />}
    </>
  );
}


function NavLayout ({children}) {
  return (
    <div className='flex flex-row'> 
    <Dashnav/>
    {children}
    </div>
  )
}

NavLayout.propTypes = {
  children: PropTypes.string.isRequired,
}
AppLayout.propTypes = {
  children: PropTypes.string.isRequired,
};


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout><Home /></AppLayout>,
    },
    {
      path: '/about',
      element: <AppLayout><About /></AppLayout>,
    },
    {
      path: '/analytics',
      element: <AppLayout><Analytics /></AppLayout>,
    },
    {
      path: '/challenges',
      element: <AppLayout><Challenges /></AppLayout>,
    },
    {
      path: '/leaderboard',
      element: <AppLayout><Leaderboard /></AppLayout>,
    },
    {
      path: '/contact',
      element: <AppLayout><Contact /></AppLayout>,
    },
    {
      path: '/signup',
      element: <div><Signup/></div>,
    },
    {
      path: '/login',
      element: <div><Login/></div>,
    },
    {
      path: '/dashboard',
      element: <div><Dashboard/></div>,
    },
    {
      path: '/dashmain',
      element: <NavLayout><Dashmain/></NavLayout>,
    },
    {
      path: '/dashleaderboard',
      element: <NavLayout><LeaderboardTable/></NavLayout>,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
