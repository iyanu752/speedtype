import { useLocation } from 'react-router-dom';
import logo from '/assets/speedlogo.svg';
import dash from '/assets/dash.svg';
import help from '/assets/help.svg';
import challenge from '/assets/challenge.svg';
import leader from '/assets/leader.svg';

export default function Dashnav() {
  const location = useLocation(); // Get the current path

  const isActive = (path) => location.pathname === path; // Check if the path matches the current route

  return (
    <div className="h-screen w-[300px] bg-white text-gray font-roboto flex flex-col">
      <div className="p-6 border-b border-gray">
        <img src={logo} alt="Logo" className="w-[100px]" />
      </div>
      <nav className="flex-grow p-4">
        <div className="mb-6">
          <span className="text-gray uppercase py-2 px-4 text-sm">Pages</span>
          <ul className="mt-2">
            <li
              className={`py-2 px-4 font-bold flex gap-[12px] rounded cursor-pointer group ${
                isActive('/dashmain') ? 'bg-blue bg-opacity-40 text-white groups' : 'text-black hover:bg-blue hover:bg-opacity-5 hover:text-blue'
              }`}
            >
              <img src={dash} alt="Dashboard" className="svg-icon" />
              <a href="/dashmain">Dashboard</a>
            </li>
            <li
              className={`py-2 px-4 font-bold flex gap-[12px] rounded cursor-pointer group ${
                isActive('/dashleaderboard') ? 'bg-blue bg-opacity-40 text-white groups' : 'text-black hover:bg-blue hover:bg-opacity-5 hover:text-blue'
              }`}
            >
              <img src={leader} alt="Leaderboard" className="svg-icon" />
              <a href="/dashleaderboard">Leaderboard</a>
            </li>
            <li
              className={`py-2 px-4 font-bold flex gap-[12px] rounded cursor-pointer group ${
                isActive('/dashchallenges') ? 'bg-blue bg-opacity-40 text-white  groups' : 'text-black hover:bg-blue hover:bg-opacity-5 hover:text-blue'
              }`}
            >
              <img src={challenge} alt="Challenges" className="svg-icon" />
              <a href="/dashchallenges">Challenges</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-gray py-2 px-4 uppercase text-sm">Others</span>
          <ul className="mt-2">
            <li
              className={`py-2 px-4 font-bold flex gap-[12px] rounded cursor-pointer group ${
                isActive('/help') ? 'bg-blue bg-opacity-40 text-white  groups' : 'text-black hover:bg-blue hover:bg-opacity-5 hover:text-blue'
              }`}
            >
              <img src={help} alt="Help and Support" className="svg-icon" />
              <a href="/help">Help and Support</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
