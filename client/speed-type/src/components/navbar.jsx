import arrowDown from '/src/assets/Chevron Down.svg'
import challenges from '/src/assets/challenges.svg'
import analytics from '/src/assets/analytics.svg'
import leaderboard from '/src/assets/leaderboard.svg'
import { useState } from 'react';
function Navbar () {
    const [showDropdown, setShowDropdown] = useState(false)
    const toggleDropdown = () => {
        setShowDropdown (!showDropdown)
    }
    return (
        <>
            <div className="py-[16px] flex font-roboto w-full flex-row justify-between items-center bg-white px-[64px] shadow-md z-50">
                <div>LOGO</div>
                <div className=" font-roboto text-t2 font-bold text-black">
                    <ul className="flex items-center gap-[16px]">
                        <li className=' hover:text-blue'> <a href='/'>Home</a></li>
                        <li className=' hover:text-blue'><a href='/About'>About Us</a></li>
                        <li className="relative">
                            <div
                                className="flex items-center gap-[4px] cursor-pointer hover:text-blue"
                                onClick={toggleDropdown}
                            >
                                <span>More Options</span>
                                <button className="focus:outline-none">
                                    <img src={arrowDown} alt="arrow down" />
                                </button>
                            </div>

                            {showDropdown && (
                                <ul className="absolute top-[100%] left-0 mt-[4px] bg-white z-50 border-black border-2  px-[24px] py-[24px] w-[368px]">
                                    <li className="pb-[16px] flex flex-row items-start hover:bg-gray-100 cursor-pointer">
                                    <img src={challenges} className='pr-[12px]' alt="typing challenges" />
                                     <div className='flex flex-col hover:text-blue'>
                                        <a href="/Challenges" className='text-t2 font-semibold'>Typing Challenges</a>
                                        <p className=' font-normal text-t3'>
                                        Improve your typing speed with fun challenges.
                                        </p>
                                    </div>
                                    </li>
                                    <li className="pb-[16px]  flex flex-row items-start hover:bg-gray-100 cursor-pointer">
                                    <img src={analytics} className='pr-[12px]' alt="typing challenges" />
                                     <div className='flex flex-col  hover:text-blue'>
                                        <a href="/Analytics" className='text-t2 font-semibold'>Analytics Dashboard</a>
                                        <p className=' font-normal text-t3'>
                                        Track your progress and see your stats.
                                        </p>
                                    </div>
                                    </li>
                                    <li className="pb-[16px]  flex flex-row items-start hover:bg-gray-100 cursor-pointer">
                                    <img src={leaderboard} className='pr-[12px]' alt="typing challenges" />
                                     <div className='flex flex-col  hover:text-blue'>
                                        <a href="/Leaderboard" className='text-t2 font-semibold'>Leaderboard</a>
                                        <p className=' font-normal text-t3'>
                                        Track your typing speed and progress here.
                                        </p>
                                    </div>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className=' hover:text-blue'><a href='/Contact'>Contact Us</a></li>
                        <li className=' hover:text-blue'><button className="border-blue text-blue hover:bg-blue font-bold hover:text-white border-2 rounded-[10px] py-[8px] px-[20px]">Log in</button></li>
                        <li className=' hover:text-blue'><button className=" border-blue text-blue hover:bg-blue font-bold  hover:text-white border-2 rounded-[10px] py-[8px] px-[20px]"> Sign Up </button></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar;