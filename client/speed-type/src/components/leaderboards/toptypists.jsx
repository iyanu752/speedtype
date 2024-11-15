import Trophy from '/src/assets/trophy.png'
import arrowright from '/src/assets/chevron-right.svg'
export default function Toptypists() {
    return(
        <div className="py-[112px] font-roboto px-[64px] gap-[80px] flex flex-row items-center">
            <div className='w-[707px]'>
                <img src={Trophy} className='pb-[24px]' alt="" />
                <h2 className='text-h2 pb-[24px] font-bold'>Celebrate Our Monthly Typing Champions!</h2>
                <p className='pb-[32px] font-normal text-t1'>Check out the top typists of the month and see how you stack up against the competition. Join the race to improve your typing speed and claim your spot on the leaderboard!</p>
                <div className='flex flex-row gap-[24px]'>
                    <button className="hover:text-white border-2 font-bold border-blue  text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>View</a></button>
                    <button className='flex font-bold text-blue mt-3'><span>Join</span> <img src={arrowright} alt="arrow right" /></button>
                </div>
            </div>
            <div>
                {/* the table will be replaced with the incomming data for the top leaders, hard coded for now */}
            <table className=' border-2 border-solid w-[600px] h-[200px]'>
                <tr>
                    <th>Name</th>
                    <th>WPM</th>
                    <th>Accuracy</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
                    <td>Nigeria</td>
                </tr>
                <tr>
                    <td>Megha</td>
                    <td>19</td>
                    <td>Female</td>
                    <td>USA</td>
                </tr>
                <tr>
                    <td>Subham</td>
                    <td>25</td>
                    <td>Male</td>
                    <td>UK</td>
                </tr>
            </table>
            </div>
        </div>
    )
}