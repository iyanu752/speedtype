import logo from '/assets/speedlogo.svg';
import dash from '/assets/dash.svg';
import help from '/assets/help.svg';
import challenge from '/assets/challenge.svg';
import leader from '/assets/leader.svg';

export default function Dashnav() {
  return (
    <div className="h-screen w-[300px] bg-white text-gray font-roboto flex flex-col">
      <div className="p-6 border-b border-gray">
        <img src={logo} alt="Logo" className='w-[100px]' />
      </div>
      <nav className="flex-grow p-4">
        <div className="mb-6">
  <span className="text-gray uppercase py-2 px-4 text-sm">Pages</span>
  <ul className="mt-2">
    <li className="py-2 px-4 text-black font-bold hover:bg-blue hover:bg-opacity-5 flex gap-[12px] hover:text-blue rounded cursor-pointer group">
      <img
        src={dash}
        alt="Dashboard"
        className="svg-icon"
      />
      Dashboard
    </li>
    <li className="py-2 px-4 text-black font-bold hover:bg-blue hover:bg-opacity-5 flex gap-[12px] hover:text-blue rounded cursor-pointer group">
      <img
        src={leader}
        alt="Leaderboard"
        className="svg-icon"
      />
      Leaderboard
    </li>
    <li className="py-2 px-4 text-black font-bold hover:bg-blue hover:bg-opacity-5 flex gap-[12px] hover:text-blue rounded cursor-pointer group">
      <img
        src={challenge}
        alt="Challenges"
        className="svg-icon"
      />
      Challenges
    </li>
  </ul>
</div>
<div>
  <span className="text-gray py-2 px-4 uppercase text-sm">Others</span>
  <ul className="mt-2">
    <li className="py-2 text-black font-bold px-4 flex gap-[12px] hover:bg-blue hover:bg-opacity-5 hover:text-blue rounded cursor-pointer group">
      <img
        src={help}
        alt="Help and Support"
        className="svg-icon"
      />
      Help and Support
    </li>
  </ul>
</div>

      </nav>
    </div>
  );
}
