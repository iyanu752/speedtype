import hero from '/assets/hero-home.png'
import { motion } from 'framer-motion'

export default function Herohome() {
  return (
    <div className="relative flex w-full">
      <img src={hero} className="w-full h-[70vh] md:h-screen object-cover" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute flex flex-col text-white justify-center items-center w-full h-full px-4"
      >
        <h4 className="text-2xl sm:text-3xl md:text-h1 w-full md:w-[70%] lg:w-[50%] text-center font-bold">
          Boost Your Typing Speed With Fun Challenges
        </h4>
        <p className="mt-4 text-sm sm:text-base md:text-t1 w-full md:w-[80%] lg:w-[60%] text-center">
          Welcome to our innovative speed typing trainer web app! Experience engaging challenges that enhance your typing skills while tracking your progress with detailed analytics and competitive leaderboards.
        </p>
        <div className="pt-6 md:pt-8">
          <ul className="flex flex-col sm:flex-row gap-3">
            <li>
              <motion.button
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-2 px-6 w-full sm:w-[134px]"
              >
                <a href="/Signup">Start</a>
              </motion.button>
            </li>
            <li>
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-2 px-6 w-[150px] whitespace-nowrap text-center"
          >
            <a href="/About">Learn More</a>
          </motion.button>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
