import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './screens/home';
import Footer from './components/footer';
import About from './screens/about';
import Analytics from './screens/analytics';
import Challenges from './screens/challenges';
import Leaderboard from './screens/leaderboards';
import Contact from './screens/contact';
function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/About',
      element: <About/>
    },
    {
      path: '/Analytics',
      element: <Analytics/>
    },
    {
      path: '/Challenges',
      element: <Challenges/>
    },
    {
      path: '/Leaderboard',
      element: <Leaderboard/>
    },
    {
      path: '/Contact',
      element: <Contact/>
    },
  ])
  return (
    <>
      <Navbar/>
      <RouterProvider router = {router} />
      <Footer/>
    </>
  )
}

export default App
