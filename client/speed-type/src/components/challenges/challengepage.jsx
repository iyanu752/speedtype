import cardOne from '/assets/card-one.png'
import cardTwo from '/assets/card-two.png'
import cardThree from '/assets/card-three.png'
import arrowright from '/assets/chevron-right.svg'
import typewriter from '/assets/typewriter.png'
import typing from '/assets/typing.png'
import Tc from '/assets/tc.png'
export default function Challengespage () {
    return (
        <div className=" flex flex-col py-[112px] px-[64px] font-roboto">
            <div className="pb-[80px] flex items-center flex-col">
                <p className="pb-[16px] text-blue text-t2 font-semibold">Challenge</p>
                <h2 className="pb-[24px] font-bold text-h2">Boost Your Typing Skills</h2>
                <p className=" text-t1 font-normal">Engage in various challenges to enhance your typing speed</p>
            </div>
            <div className=' flex flex-row items-center py-[112px] justify-center gap-[32px]'>
                <div className=' border-black border-[1px] rounded-[10px]'>
                    <img src={cardOne} alt="cardone" />
                    <div className='px-[32px] py-[53px] w-[416px]'>
                    <p className='text-blue pb-[8px] text-t2 font-semibold'>Focus</p>
                    <h4 className='text-h4 pb-[16px] font-bold'>Speed Challenges to Race Against Time</h4>
                    <p className='text-t2 pb-[24px] font-normal'>Test your speed with exciting timed tasks.</p>
                    <button className='flex font-bold text-blue mt-3'><span>Join</span> <img src={arrowright} alt="arrow right" /></button>
                    </div>
                </div>
                <div className=' border-black border-[1px] rounded-[10px]'>
                    <img src={cardTwo} alt="cardone" />
                    <div className='px-[32px] py-[53px] w-[416px]'>
                    <p className='text-blue pb-[8px] text-t2 font-semibold'>Focus</p>
                    <h4 className='text-h4 pb-[16px] font-bold'>Speed Challenges to Race Against Time</h4>
                    <p className='text-t2 pb-[24px] font-normal'>Test your speed with exciting timed tasks.</p>
                    <button className='flex font-bold text-blue mt-3'><span>Join</span> <img src={arrowright} alt="arrow right" /></button>
                    </div>
                </div>
                <div className=' border-black border-[1px] rounded-[10px]'>
                    <img src={cardThree} alt="cardone" />
                    <div className='px-[32px] py-[53px] w-[416px]'>
                    <p className='text-blue pb-[8px] text-t2 font-semibold'>Focus</p>
                    <h4 className='text-h4 pb-[16px] font-bold'>Speed Challenges to Race Against Time</h4>
                    <p className='text-t2 pb-[24px] font-normal'>Test your speed with exciting timed tasks.</p>
                    <button className='flex font-bold text-blue mt-3'><span>Join</span> <img src={arrowright} alt="arrow right" /></button>
                    </div>
                </div>
            </div>

            <div className='flex py-[112px] flex-row items-center justify-between gap-[80px]'>
                <div className='w-[616px]'>
                    <h3 className='text-h3 font-bold pb-[24px]'>Boost Your Typing Speed with Engaging Speed Challenges</h3>
                    <p className=' font-normal text-t1'>Our Speed Challenges are designed to push your limits and enhance your typing skills. With a variety of fun and engaging tasks, you will see your speed soar while enjoying the process!</p>
                </div>
                <div>
                    <img src={typewriter} className='rounded-[10px]' alt="typewriter" />
                </div>
            </div>

            <div className='flex py-[112px] flex-row items-center justify-between gap-[80px]'>
                <div><img   className='rounded-[10px]' src={typing} alt="typing" /></div>
                <div className='w-[616px]'>
                    <p className='font-semibold text-t1 text-blue pb-[16px]'>Precision</p>
                    <h2 className='text-h2 font-bold pb-[24px]'>Boost Your Typing Accuracy with Challenges</h2>
                    <p className='font-normal text-t1'>Accuracy Challenges are designed to enhance your typing precision. Tackle various exercises that focus on minimizing errors and improving your overall speed.</p>

                    <div className=' flex flex-col pt-[40px]'>
                        <div  className='flex flex-row'>
                                <div>
                                    <h6 className='text-h6 font-bold text-blue pb-[16px]'>Challenge Yourself</h6>
                                    <p>Engage in fun activities that sharpen your typing skills.</p>
                                </div>
                                <div>
                                    <h6 className='text-h6 font-bold text-blue pb-[16px]'>Track Progress</h6>
                                <p>Monitor your improvement with detailed analytics and feedback.</p> 
                                </div>
                         </div> 
                            {/* <div className='flex flex-row gap-[24px] pt-[40px]'>
                            <button className="hover:text-white border-2 font-bold border-blue  text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>View</a></button>
                            <button className='flex font-bold text-blue mt-3'><span>Join</span> <img src={arrowright} alt="arrow right" /></button>
                            </div> */}
                        </div>

               
                </div>
            </div>

            <div className='flex flelx-row py-[112px] gap-[80px] items-center'>
                <div>
                    <h2 className='text-h2 font-bold pb-[24px]'>Take Your Typing Challenge Now</h2>
                    <p className='pb-[32px] text-t1 font-normal'>Join our community and improve your typing speed with exciting new challenges tailored for you!</p>
                    {/* <div className='flex gap-[24px]'>
                    <button className="border-blue text-blue hover:bg-blue font-bold hover:text-white border-2 rounded-[10px] py-[8px] px-[20px]">Start</button>
                    <button className=" border-blue text-blue hover:bg-blue font-bold  hover:text-white border-2 rounded-[10px] py-[8px] px-[20px]"> Button </button>
                    </div> */}
                </div>
                <div>
                    <img src={Tc} alt="" />
                </div>
            </div>
        </div>
    )
}