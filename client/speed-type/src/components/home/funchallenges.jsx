import TechLady from '/assets/woman-laptop.png'
import TechMan from '/assets/man-laptop.png'
import relume from '/assets/Relume.svg'
import arrowright from '/assets/chevron-right.svg'
export default function FunChallenge() {
    return(
        <div className=' px-[64px] gap-[80px] items-center justify-center font-roboto py-[112px] flex flex-col'>
        <div className='flex justify-center items-center gap-[80px]'>
        <div className='w-full'>
            <h3 className='text-h3 font-bold pb-5'>Unleash Your Typing Potential with Engaging Challenges and Real-Time Insights </h3>
            <p className='text-t1 font-normal'>Our app offers a variety of challenges designed to enhance your typing speed and accuracy. With real-time analytics, you can track your progress and see how you stack up against others on our dynamic leaderboards.</p>
        </div>
        <div className='w-full'><img className='w-[616px] h-[640px]' src={TechMan} alt="Man typing" /></div>
        </div>

        {/* Unlock Your Typing Potential with Our Engaging Speed Training Challenges */}
        <div className='flex align-center justify-center flex-col '> 
        <div className='flex justify-center pb-10'>
        <h3 className='text-h3 text-center w-[50%] flex justify-center font-bold'>Unlock Your Typing Potential with Our Engaging Speed Training Challenges</h3>
        </div>
        <div className='flex justify-evenly text-center gap-20'>
        <div className='flex flex-col justify-center items-center'>
        <img src={relume} className='w-[48px] h-[48px]' />
        <h5 className='text-h5 font-semibold'>Track Your Progress and Compete with Others on Our Leaderboard</h5>
        <p>Our web app offers a seamless experience from registration to skill enhancement.</p>
        <button className='flex font-semibold text-blue mt-3'><span>Sign Up</span> <img src={arrowright} alt="arrow right" /></button>
        </div>

        <div className='flex flex-col justify-center items-center'>
        <img src={relume} className='w-[48px] h-[48px]' />
        <h5 className='text-h5 font-semibold'>Engage in Fun Challenges to Boost Your Typing Speed and Accuracy</h5>
        <p>Complete various typing challenges designed to improve your speed and precision.</p>
        <a href="/Challenges"><button className='flex text-blue mt-3'><span> Start</span> <img src={arrowright} alt="arrow right" /></button></a>
        </div>

        <div className='flex flex-col justify-center items-center'>
        <img src={relume} className='w-[48px] h-[48px]' />
        <h5 className='text-h5 font-semibold'>Analyze Your Performance with Detailed Charts and Insights</h5>
        <p>View your typing statistics and track your improvement over time.</p>
       <a href="/Analytics"> <button className='flex text-blue mt-3'><span>View</span> <img src={arrowright} alt="arrow right" /></button></a>
        </div>
        </div>
</div>

            <div className='gap-[80px] items-center justify-center font-roboto py-[112px] flex flex-row'>
            <div><img className='w-[616px] h-[640px]' src={TechLady} alt="Man typing" /> </div>
            <div className='w-[616px] h-[456px] flex flex-col justify-center'> 
                <span className='text-blue text-t2 font-semibold pb-[16px]'> Speed </span>
                <h2 className='  text-black text-h1 font-bold pb-[24px]'>Unlock Your Typing Potiential with Fun Challenges</h2>
                <p className=' text-black text-t1 font-normal pb-[32px]'>
                    Experience a transformative journey to faster typing. 
                    Our app combines engaging challenges with competitive elements to enhance your skills.
                </p>
                <div className='flex flex-row gap-[24px]'>
                    <div>
                        <span className='text-h6 text-blue  font-bold'> Boost Speed </span>
                        <p className=' text-t2 font-normal '>
                             Increase your typing speed significantly with our interactive training modules.
                        </p>
                    </div>
                    <div> 
                        <span className='text-h6 text-blue  font-bold' >Enhance Accuracy</span>
                        <p>Achieve greater accuracy while typing through targeted exercises and real-time feedback.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}