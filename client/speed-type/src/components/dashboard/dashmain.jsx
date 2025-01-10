// import Progress from '/assets/progress.svg'
// import Inactive from '/assets/inactive.svg'
// import Completed from '/assets/completed.svg'
// import Point from '/assets/point.svg'
// import Typing from '/assets/typing.png'
// import Donut from '../../charts/donut'
// import Bar from '../../charts/bar'
// import Rader from '../../charts/rader'
import Area from '../../charts/area'
// import LeaderboardTable from '../leaderboard/leaderboardtable'
// import ApexCharts from 'apexcharts'
import { MdOutlineSpeed } from "react-icons/md";
import { MdAccessAlarm } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdInsights } from "react-icons/md";

export default function Dashmain() {
    return (
        <>
        <div className="bg-blue-gray-100 flex flex-col w-screen px-[16px] font-roboto py-[32px]">
            {/* <div className=" flex justify-between flex-wrap flex-row">
                <div className="bg-white shadow-md flex gap-[50px] items-center flex-row p-[10px] rounded-[10px]">
                    <div className="flex flex-col">
                        <p className='text-gray'>Todays Progress</p>
                        <span className='text-black font-bold'>2.3hrs</span>
                    </div>
                    <div>
                        <img src={Progress} alt="" />
                    </div>
                    
                </div>

                <div className="bg-white shadow-md  flex gap-[50px] items-center flex-row p-[10px] rounded-[10px]">
                <div className="flex flex-col">
                        <p className='text-gray'>Todays point</p>
                        <span className='text-black font-bold'>50</span>
                    </div>
                    <div>
                        <img src={Point} alt="" />
                    </div>
                </div>

                <div className="bg-white shadow-md  flex gap-[50px] items-center flex-row p-[10px] rounded-[10px]">
                <div className="flex flex-col">
                        <p className='text-gray'>No of challenges completed</p>
                        <span className='text-black font-bold'>30</span>
                    </div>
                    <div>
                        <img src={Completed} alt="" />
                    </div>
                </div>

                <div className="bg-white shadow-md flex gap-[50px] items-center flex-row p-[10px] rounded-[10px]">
                <div className="flex flex-col">
                        <p className='text-gray'>Inactive days</p>
                        <span className='text-black font-bold'>12</span>
                    </div>
                    <div>
                        <img src={Inactive} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex pt-[30px]  gap-[30px] flex-row'>
                <div className=''>
                    <img className='w-[200px] h-[200px] shadow-md  rounded-[10px]' src={Typing} alt="" />
                </div>
                <div className='bg-white rounded-[10px] shadow-md   flex items-center justify-center'><Donut/></div>
                <div className="bg-white w-[700px] px-[20px] h-[250px] shadow-md  rounded-[10px] flex flex-col justify-center">
                <span className="font-bold text-left ml-[30px] mb-[8px]">Leaderboard</span>
                <div className='flex justify-center'> <LeaderboardTable /></div>
               
                </div>
            </div>

            <div className='flex pt-[30px] gap-[30px] flex-row'>
                <div className='bg-white w-[300px] h-[300px] shadow-md  rounded-[10px] flex items-center justify-center '><Bar/></div>
                <div className='bg-white w-[250px] h-[300px] shadow-md  rounded-[10px] flex items-center justify-center '><Rader/></div>
                <div className='bg-white w-[600px] h-[300px] shadow-md  rounded-[10px] flex items-center justify-center'><Area/></div>

            </div> */}

            <>
            
            </>
            <div className='flex flex-row justify-evenly gap-[8px]'>
                <div className="relative flex flex-row p-4 justify-between my-6 bg-white shadow-sm border rounded-[10px] border-slate-200 w-[300px]">
                        <div>
                            <h5 className="mb-2 text-slate-800 text-t2 font-semibold">
                            Current Typing Speed 
                            </h5>
                            <p className=" mb-2 text-h5 text-slate-600 leading-normal font-bold">
                            25 WPM
                            </p>

                            <p className=" text-t3 text-slate-600 leading-normal font-normal">
                            +25% from last week
                            </p>

                        </div>

                        <div><MdOutlineSpeed className='h-5 w-5 text-blue' /></div>
                    </div>

                    <div className="relative flex flex-row p-4 justify-between my-6 bg-white shadow-sm border rounded-[10px] border-slate-200 w-[300px]">
                        <div>
                            <h5 className="mb-2 text-slate-800 text-t2 font-semibold">
                            Accuracy
                            </h5>
                            <p className=" mb-2 text-h5 text-slate-600 leading-normal font-bold">
                            76%
                            </p>

                            <p className=" text-t3 text-slate-600 leading-normal font-normal">
                            +30% from last week
                            </p>

                        </div>

                        <div><MdAccessAlarm className='h-5 w-5 text-blue' /></div>
                    </div>

                    <div className="relative flex flex-row p-4 justify-between my-6 bg-white shadow-sm border rounded-[10px] border-slate-200 w-[300px]">
                        <div>
                            <h5 className="mb-2 text-slate-800 text-t2 font-semibold">
                            Typing Consistency
                            </h5>
                            <p className=" mb-2 text-h5 text-slate-600 leading-normal font-bold">
                            50.77
                            </p>

                            <p className=" text-t3 text-slate-600 leading-normal font-normal">
                            +20% from last week
                            </p>

                        </div>

                        <div><MdInsights className='h-5 w-5 text-blue' /></div>
                    </div>

                    <div className="relative flex flex-row p-4 justify-between my-6 bg-white shadow-sm border rounded-[10px] border-slate-200 w-[300px]">
                        <div>
                            <h5 className="mb-2 text-slate-800 text-t2 font-semibold">
                            Adjusted Typing Speed
                            </h5>
                            <p className=" mb-2 text-h5 text-slate-600 leading-normal font-bold">
                            25 WPM
                            </p>

                            <p className=" text-t3 text-slate-600 leading-normal font-normal">
                            +2% from last week
                            </p>

                        </div>

                        <div><MdOutlineElectricBolt className='h-5 w-5 text-blue' /></div>
                    </div>

                    
            </div>
            
            <div className='flex flex-row justify-evenly gap-[8px]'>
                <div className="relative flex flex-row p-4 justify-between my-6 bg-white shadow-sm border rounded-[10px] border-slate-200 w-[720px]">
                    <Area/>
                </div>

                <div className="relative flex flex-row p-4 justify-between my-6 bg-white shadow-sm border rounded-[10px] border-slate-200 w-[500px]">
                    {/* <Area/> */}
                </div>

            </div>
               
                
          
        </div>
            </>
    )
}