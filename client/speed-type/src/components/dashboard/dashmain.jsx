import Bar from '../../charts/bar'
// import Rader from '../../charts/rader'
import Area from '../../charts/area'
import { MdOutlineSpeed } from "react-icons/md";
import { MdAccessAlarm } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import LeaderboardTable from '../leaderboard/leaderboardtable';
import Statistics from '../statistics/statistics';
import { useState, useEffect } from 'react';
import { getCardStatistics } from '../../services/dashstatsservice';

export default function Dashmain() {
  const [stats, setStats] = useState (null);
  const [darkMode] = useState(() => localStorage.getItem("theme") === "dark");

  const getStatData = async () => {
    const dashStats = await getCardStatistics()
    setStats(dashStats.current)
  }
  const renderChange = (change) => {
    const validNumber = Number(change); 
  
    if (isNaN(validNumber)) {
      return <span className=" text-gray">0%</span>;
    }
  
    return (
      <span className={validNumber >= 0 ? "text-green-500" : "text-red"}>
        {validNumber >= 0 ? `+${validNumber.toFixed(1)}%` : `${validNumber.toFixed(1)}%`}
      </span>
    );
  };



  useEffect (() => {
    getStatData()
  }, [])

  useEffect(() => {
    getStatData();
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
 

    return (
      <div className="flex flex-col w-full px-4 py-8 bg-white dark:bg-dark dark:text-white font-roboto overflow-y-auto h-screen">
        <h4 className=" text-h4 font-bold font-roboto pb-[32px] text-slate-800"> DASHBOARD </h4>
        {/* Stat Cards */}
        <div className="flex flex-wrap justify-between gap-4">
            <div className="bg-white  dark:bg-dark dark:text-white flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
              <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Current Typing Speed</h5>
                <p className="text-slate-600 font-bold text-h5">{`${stats ? stats.currentTypingSpeed : 0} WPM`}</p>
                <p className="text-slate-600 text-t3">{renderChange(stats ? stats.wpmChange : 0)}</p>
              </div>
              <div><MdOutlineSpeed className='h-5 w-5 text-blue' /></div>
            </div>

            <div className="bg-white  dark:bg-dark dark:text-white flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
              <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Accuracy</h5>
                <p className="text-slate-600 font-bold text-h5">{`${ stats ? stats.accuracy : 0}%`}</p>
                <p className="text-slate-600 text-t3">{renderChange(stats ? stats.accuracyChange : 0)}</p>
              </div>
              <div><MdAccessAlarm className='h-5 w-5 text-blue' /></div>
            </div>

            <div className="bg-white  dark:bg-dark dark:text-white flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
              <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Typing Consistency</h5>
                <p className="text-slate-600 font-bold text-h5">{`${stats ? stats.typingConsistency : 0}%`}</p>
                <p className="text-slate-600 text-t3">{renderChange(stats ? stats.typingConsistencyChange : 0)}</p>
              </div>
              <div><MdInsights className='h-5 w-5 text-blue' /></div>
            </div>

            <div className="bg-white  dark:bg-dark dark:text-white flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
              <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Adjusted Typing Speed</h5>
                <p className="text-slate-600 font-bold text-h5">{`${stats ? stats.AdjustedTypingSpeed : 0} WPM`}</p>
                <p className="text-slate-600 text-t3">{renderChange(stats ? stats.AdjustedTypingSpeedChange : 0)}</p>
              </div>
              <div><MdOutlineElectricBolt className='h-5 w-5 text-blue' /></div>
            </div>
      </div>

  
        {/* Area Chart and Leaderboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white  dark:bg-dark dark:text-white flex justify-center items-center  shadow-sm border rounded-[10px] p-4">
          <Area  darkMode={darkMode}/>
        </div>
        <div className="bg-white  dark:bg-dark dark:text-white shadow-sm flex   border rounded-[10px] p-4 overflow-hidden">
          <LeaderboardTable />
        </div>
      </div>

      <div className='flex flex-row gap-4 mt-6'>
        <div className="bg-white  dark:bg-dark dark:text-white flex justify-center items-center shadow-sm border rounded-[10px] p-4 overflow-hidden w-[30%]">
            <Bar />
        </div> 
        {/* <div className="bg-white flex justify-center items-center shadow-sm border rounded-[10px] p-4 overflow-hidden w-[25%] ">
            <Rader />
        </div>  */}
        <div className="bg-white   dark:bg-dark dark:text-white flex flex-col justify-start  shadow-sm border rounded-[10px] p-4 overflow-hidden flex-grow">
            <Statistics/>
        </div>
        </div>


      </div>
    );
  }  