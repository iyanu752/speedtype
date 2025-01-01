import Progress from '/assets/progress.svg'
import Inactive from '/assets/inactive.svg'
import Completed from '/assets/completed.svg'
import Point from '/assets/point.svg'
import Typing from '/assets/typing.png'
import Donut from '../../charts/donut'
import Bar from '../../charts/bar'
import Rader from '../../charts/rader'
import Area from '../../charts/area'
import LeaderboardTable from '../leaderboard/leaderboardtable'
// import ApexCharts from 'apexcharts'

export default function Dashmain() {
    return (
        <div className="bg-gradient-to-r from-lightblue via-darkblue to-blue w-full px-[32px] font-roboto py-[32px]">
            <h6 className='text-black font-bold pb-[24px]'>Dashboard</h6>
            <div className=" flex justify-between flex-wrap flex-row">
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

            </div>

            
        </div>
    )
}