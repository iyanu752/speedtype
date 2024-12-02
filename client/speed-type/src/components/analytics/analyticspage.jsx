import arrowright from '/src/assets/chevron-right.svg'
import analyticsOne from '/src/assets/analytics1.png'
import analyticsTwo from '/src/assets/analysis2.png'
import analyticCard from '/src/assets/leaderboard-hero.png'
export default function Analyticspage() {
    return (
        <div className=" flex flex-col py-[112px] px-[64px] font-roboto">
            <div className="flex flex-row gap-[80px]">
                <div>
                   <p className='text-t2 font-semibold pb-[16px]'>Insights</p> 
                   <h2 className='text-h2 font-bold'>Track Your Typing Progress and Performance</h2>
                </div>

                <div className="flex flex-col">
                    <p className='text-t1 font-normal pb-[32px]'>Our analytics dashboard provides detailed insights into your typing performance. Monitor your words per minute, accuracy, and improvements over time to enhance your skills.</p>
                    <div className=" flex flex-row items-center pb-[32[x]]">
                        <div>
                            <h2 className='font-bold text-h1 pb-[8px] text-blue'>WPM</h2>
                            <p className='text-t2 font-normal w-[296px]'>Measure your typing speed with precision.</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-h1 pb-[8px] text-blue'>Accuracy</h2>
                            <p className='text-t2 font-normal  w-[296px]'>Ensure your typing is both fast and accurate.</p>
                        </div>
                    </div>
                    <button className='flex font-bold text-blue mt-3'><span>Join</span> <img src={arrowright} alt="arrow right" /></button>
                </div>
            </div>


            <div className= "flex flex-row items-center justify-center py-[112px] gap-[80px]">
                <div className='flex flex-col w-[616px]'>
                    <h2 className=' text-h2 font-bold pb-[24px]'>See How You Compare to Average Users</h2>
                    <p className=' text-t1 font-medium pb-[32px]'>Our analytics feature allows you to gauge your typing speed against average users. Discover where you stand and how you can improve.</p>
                    <div className='flex items-center flex-row pb-[44px]' >
                        <div>
                            <h6 className=' text-blue font-bold text-h6 pb-[16px]'>Performance Insights</h6>
                            <p className='font-text-t2 font-normal'>Analyze your speed and track your progress over time.</p>
                        </div>
                        <div>
                            <h6 className=' text-blue font-bold text-h6 pb-[16px]'>Competitive Edge</h6>
                            <p className='font-text-t2 font-normal'>Join the leaderboard and challenge yourself against others.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-[24px] pt-[40px]'>
                            <button className="hover:text-white border-2 font-bold border-blue  text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>Learn More</a></button>
                            <button className='flex font-bold text-blue mt-3'><span>Sign Up</span> <img src={arrowright} alt="arrow right" /></button>
                        </div>
                </div>
                <div><img src={analyticsOne} alt="analytics one" /></div>
            </div>



            <div className=' flex items-center justify-center flex-col py-[112px]'>
                <h2 className=' font-bold text-h2 pb-[24px]'>Performance Insights</h2>
                <p className=' text-t1 font-normal pb-[80px]'>Track your typing progress with detailed analytics.</p>
                <img src= {analyticsTwo} alt="analytics two" />
            </div>

            <div className="relative flex flex-col py-[112px]">
            <img src={analyticCard} className="w-full h-[full] rounded-[10px]"  alt="Analytics Card" />
            <div className="absolute inset-0 flex flex-col text-white justify-center items-center py-[64px]">
                <h2 className="text-h2 font-bold pb-[24px]">Keep Improving Your Typing Skills</h2>
                <p className="font-normal text-t1 pb-[32px]">
                Join the challenge today and unlock your potential with every keystroke you make!
                </p>
                <div className="pt-[32px]">
                <div className="flex flex-row gap-3">
                    <button className="hover:text-white border-2 font-bold border-white hover:border-blue text-white hover:bg-blue rounded-[10px] py-[12px] px-[24px]">
                        Participate
                    </button>  
                    <button className="hover:text-white border-2 font-bold border-white hover:border-blue text-white hover:bg-blue rounded-[10px] py-[12px] px-[24px]">
                        <a href="#">View Leaderboard</a>
                    </button>
               
                </div>
                </div>
            </div>
            </div>

        </div>
        
    )
}
