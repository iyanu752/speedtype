import Leaderboard from '/src/assets/leaderboard-hero.png'

export default function Leaderboardhero () {
    return (
        <>
    <div className='flex w-full'>
        <img src={Leaderboard} className='w-full h-full' />
        <div className='absolute flex flex-col text-white justify-center items-start py-[112px] px-[64px] font-roboto'>
            <p className='text-t2 font-semibold text-start pb-[16px]'>Compete</p>
            <h1 className='text-h1 font-bold pb-[24px]'>Top Typists Unite</h1>
            <p className='text-t1 font-medium'>Join the race to the top and see how you stack up against the best typists!</p>
            <div className='pt-[32px]'>        
                <ul className='flex gap-3'>
                <li><button className="text-white border-2 font-bold hover:border-blue  border-white hover:bg-blue rounded-[10px] py-[10px] w-[134px]"> View </button></li>
                <li><button className="text-white border-2 font-bold hover:border-blue border-white hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>Challenge</a></button></li>
                </ul>
            </div>
        </div>
    </div>
        </>
    )
}