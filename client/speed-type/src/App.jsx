import './App.css';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from './components/navbar';
import Home from './screens/home';
import Footer from './components/footer';
import About from './screens/about';
import Analytics from './screens/analytics';
import Challenges from './screens/challenges';
import { ToastContainer } from 'react-toastify';
import Leaderboard from './screens/leaderboards';
import PropTypes from 'prop-types';
import Contact from './screens/contact';
import Signup from './screens/signup';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import Dashnav from './components/dashboard/dashnav';
import Dashmain from './components/dashboard/dashmain';
import LeaderboardTable from './components/leaderboard/leaderboardtable';
import ChallengeList from './components/challenge/challengelist';
import SpeedTyper from './components/challenge/game/speedtyper/speedtyper';

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
  children: PropTypes.node,
}
AppLayout.propTypes = {
  children: PropTypes.node,
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
    },
    {
      path: '/dashchallenges',
      element: <NavLayout><ChallengeList/></NavLayout>
    },
    {
      path: '/speedtyper',
      element:<NavLayout><SpeedTyper/></NavLayout>
    }
  ]);

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme='light'
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      draggable={false}
    >
    </ToastContainer>
    <RouterProvider router={router} />
    </>
);
}

export default App;
