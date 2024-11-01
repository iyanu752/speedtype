import React from 'react'
import hero from '/src/assets/hero-home.png'

export default function Herohome() {
  return (
    <>
    <div className='flex w-full'>
    <img src={hero} className='w-full' />
    <div className='absolute flex flex-col text-white justify-center items-center w-full h-full'>
        <h4 className='text-h1 w-[45%] text-center'>Boost Your Typing Speed With Fun Challenges</h4>
        <p className='w-[50%] text-center text-t1'>Welcome to our innovative speed typing trainer web app! Experience engaging challenges that enhance your typing skills while tracking your progress with detailed analytics and competitive leaderboards.</p>
        <div className='pt-8'>        
    <ul className='flex gap-3'>
    <li><button className="text-white bg-blue rounded-[10px] py-[10px] w-[134px]"> Start </button></li>
    <li><button className="border-blue border-2 rounded-[10px] py-[8px] w-[134px]">Learn More</button></li>
    </ul>
    </div>
    </div>
    </div>
    </>
  )
}
