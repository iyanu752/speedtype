import Bar from '../../charts/bar'
import Rader from '../../charts/rader'
import Area from '../../charts/area'
import { MdOutlineSpeed } from "react-icons/md";
import { MdAccessAlarm } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import LeaderboardTable from '../leaderboard/leaderboardtable';

export default function Dashmain() {
    return (
      <div className="flex flex-col w-full px-4 py-8 bg-white font-roboto overflow-y-auto h-screen">
        {/* Stat Cards */}
        <div className="flex flex-wrap justify-between gap-4">
            <div className="bg-white flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
                <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Current Typing Speed</h5>
                <p className="text-slate-600 font-bold text-h5">25 WPM</p>
                <p className="text-slate-600 text-t3">+25% from last week</p>
                </div>
            <div><MdOutlineSpeed className='h-5 w-5 text-blue' /></div>
            </div>
             <div className="bg-white  flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
                <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Accuracy</h5>
                <p className="text-slate-600 font-bold text-h5">76%</p>
                <p className="text-slate-600 text-t3">+30% from last week</p>
                </div>
                <div><MdAccessAlarm  className='h-5 w-5 text-blue' /></div>
             </div>
            <div className="bg-white flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
                <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Typing Consistency</h5>
                <p className="text-slate-600 font-bold text-h5">50.77</p>
                <p className="text-slate-600 text-t3">+20% from last week</p>
                </div>
                <div>< MdInsights className='h-5 w-5 text-blue' /></div>
            </div>
            <div className="bg-white flex flex-row justify-between shadow-sm border rounded-[10px] p-4 flex-1 max-w-[300px]">
                <div>
                <h5 className="text-slate-800 text-t2 font-semibold">Adjusted Typing Speed</h5>
                <p className="text-slate-600 font-bold text-h5">25 WPM</p>
                <p className="text-slate-600 text-t3">+2% from last week</p>
                </div>
                <div>< MdOutlineElectricBolt className='h-5 w-5 text-blue' /></div>
            </div>
        </div>
  
        {/* Area Chart and Leaderboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white flex justify-center items-center  shadow-sm border rounded-[10px] p-4">
          <Area />
        </div>
        <div className="bg-white shadow-sm flex justify-center items-center  border rounded-[10px] p-4 overflow-hidden">
          <LeaderboardTable />
        </div>
      </div>

      <div className='flex flex-row gap-4 mt-6'>
        <div className="bg-white flex justify-center items-center shadow-sm border rounded-[10px] p-4 overflow-hidden w-[30%]">
            <Bar />
        </div> 
        <div className="bg-white flex justify-center items-center shadow-sm border rounded-[10px] p-4 overflow-hidden w-[25%] ">
            <Rader />
        </div> 
        <div className="bg-white shadow-sm border rounded-[10px] p-4 overflow-hidden flex-grow">
            <LeaderboardTable />
        </div>
        </div>


      </div>
    );
  }  