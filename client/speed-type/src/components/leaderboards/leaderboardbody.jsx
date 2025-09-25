import Champions from '/assets/champions.png'
import arrowright from '/assets/chevron-right.svg'
import cup from '/assets/cup.png'
export default function Leaderboardbody() {
    return (
        <div className="py-16 px-6 sm:px-12 lg:px-16 flex flex-col font-roboto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
                <div>
                    <p className="font-semibold text-t2 text-blue pb-4">Champions</p>
                    <h2 className="font-bold text-h3 lg:text-h2 pb-6">See Who Typing Speed Champions Are</h2>
                    <p className="text-t1 font-normal pb-8">See Who Typing Speed Champions Are</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-2 px-6 w-full sm:w-[134px]">
                            <a href="/About">Join</a>
                        </button>
                        <button className="flex font-bold text-blue items-center gap-2">
                            <span>View</span>
                            <img src={arrowright} alt="arrow right" />
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <img src={Champions} className="rounded-[10px] w-full" alt="champions" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row py-16 gap-8 lg:gap-20">
                <div className="flex-1">
                    <h2 className="font-bold text-h3 lg:text-h2">Celebrate Your Typing Speed Achievements Here</h2>
                </div>
                <div className="flex-1">
                    <p className="text-t1 font-normal pb-8">Our improved leaderboard showcases users who have made remarkable strides in their typing speed. Track your progress alongside others and get inspired by top performers. Join the community of fast typists and see how you measure up!</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-2 px-6 w-full sm:w-[134px]">
                            <a href="/About">View</a>
                        </button>
                        <button className="flex font-bold text-blue items-center gap-2">
                            <span>Button</span>
                            <img src={arrowright} alt="arrow right" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <img className="w-full rounded-[10px]" src={cup} alt="cup" />
            </div>
        </div>
    )
}
