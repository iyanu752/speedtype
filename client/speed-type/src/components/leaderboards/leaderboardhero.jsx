import Leaderboard from '/assets/leaderboard-hero.png'
import { motion } from 'framer-motion'

export default function Leaderboardhero() {
    return (
        <div className="relative w-full font-roboto">
            <img src={Leaderboard} className="w-full h-full object-cover rounded-[10px]" alt="leaderboard" />
            <div className="absolute inset-0 flex flex-col text-white justify-center items-start px-6 sm:px-12 lg:px-16 py-16 sm:py-24 lg:py-28">
                <p className="text-t2 font-semibold text-start pb-4">Compete</p>
                <h1 className="text-h3 sm:text-h2 lg:text-h1 font-bold pb-6">Top Typists Unite</h1>
                <p className="text-t1 font-medium max-w-xl">Join the race to the top and see how you stack up against the best typists!</p>
                <div className="pt-8">
                    <ul className="flex flex-col sm:flex-row gap-4">
                        <li>
                            <motion.button
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                className="text-white border-2 font-bold hover:border-blue border-white hover:bg-blue rounded-[10px] py-2 px-6 w-full sm:w-[134px]"
                            >
                                <a href="/Login">View</a>
                            </motion.button>
                        </li>
                        <li>
                            <motion.button
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                className="text-white border-2 font-bold hover:border-blue border-white hover:bg-blue rounded-[10px] py-2 px-6 w-full sm:w-[134px]"
                            >
                                <a href="/Signup">Challenge</a>
                            </motion.button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
