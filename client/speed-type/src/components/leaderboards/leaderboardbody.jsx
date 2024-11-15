import Champions from '/src/assets/Champions.png'
import arrowright from '/src/assets/chevron-right.svg'
import cup from '/src/assets/cup.png'
export default function Leaderboardbody() {
    return (
        <div className="py-[112px] px-[64px] flex flex-col font-roboto">
            <div className='flex flex-row items-center gap-[80px]'>
                <div>
                    <p className='font-semibold text-t2 text-blue pb-[16px]'>Champions</p>
                    <h2 className='font-bold text-h2 pb-[24px]'>See Who Typing Speed Champions Are</h2>
                    <p className='text-t1 font-normal pb-[32px]'>See Who Typing Speed Champions Are</p>
                    <div className='flex flex-row gap-[24px]'>
                    <button className="hover:text-white border-2 font-bold border-blue  text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>Join</a></button>
                    <button className='flex font-bold text-blue mt-3'><span>View</span> <img src={arrowright} alt="arrow right" /></button>
                    </div>
                </div>
                <div>
                    <img src={Champions} className='rounded-[10px]' alt="champions" />
                </div>
            </div>

            <div className=' flex flex-row py-[112px]'>
                <div>
                     <h2 className='font-bold text-h2'>Celebrate Your Typing Speed Achievements Here</h2>
                </div>
                <div>
                    <p className='font-t1 font-normal w-[616px] pb-[32px]'>Our improved leaderboard showcases users who have made remarkable strides in their typing speed. Track your progress alongside others and get inspired by top performers. Join the community of fast typists and see how you measure up!</p>
                    <div className='flex flex-row gap-[24px]'>
                    <button className="hover:text-white border-2 font-bold border-blue  text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>View</a></button>
                    <button className='flex font-bold text-blue mt-3'><span>Button</span> <img src={arrowright} alt="arrow right" /></button>
                    </div>
                </div>
            </div>

            <div>
                    <img className='w-full' src={cup} alt="" />
            </div>
        </div>
    )
}