import hero from '/assets/hero-home.png'
import { motion } from 'framer-motion'
export default function Herohome() {
  return (
    <>
    <div className='flex w-full'>
    <img src={hero} className='w-full' />
    <motion.div
     initial={{ opacity: 0, y: 50 }} 
     animate={{ opacity: 1, y: 0 }} 
     transition={{ duration: 1, ease: "easeOut" }}
    className='absolute flex flex-col text-white justify-center items-center w-full h-full'>
        <h4 className='text-h1 w-[45%] text-center'>Boost Your Typing Speed With Fun Challenges</h4>
        <p className='w-[50%] text-center text-t1'>Welcome to our innovative speed typing trainer web app! Experience engaging challenges that enhance your typing skills while tracking your progress with detailed analytics and competitive leaderboards.</p>
        <div className='pt-8'>        
    <ul className='flex gap-3'>
    <li><motion.button
        whileHover={{
          scale: 1.1,
          transition: {duration: 0.2}
      }}
    className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"> <a href="/Signup">Start </a> </motion.button></li>
    <li><motion.button 
        whileHover={{
          scale: 1.1,
          transition: {duration: 0.2}
      }}
    className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>Learn More</a></motion.button></li>
    </ul>
    </div>
    </motion.div>
    </div>
    </>
  )
}
