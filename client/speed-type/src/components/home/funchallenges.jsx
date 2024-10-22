import TechLady from '/Users/iyanu/speedtype/client/speed-type/src/assets/woman-laptop.png'
export default function FunChallenge() {
    return(
        <div className=' px-[64px] gap-[80px] items-center justify-center font-roboto py-[112px] flex flex-row'>
            <div> <img className='w-[616px] h-[640px]' src={TechLady} alt="Lady typing" /></div>
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
    )
}