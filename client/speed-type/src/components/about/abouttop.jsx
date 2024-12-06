import peopleLaptop from '/assets/people-laptop.png'

export default function Abouttop() {
    return(
        <>
        <div className = "  flex flex-col  font-roboto">
            <div className='flex flex-row  py-[112px] items-center gap-[80px]'>
            <div>
                <p className="text-blue text-t2 font-semibold pb-[16px]">Speed</p>
                <p className=" font-bold text-h1 w-[616px]">Type Faster Today</p>
            </div>


            <div>
                <div className="w-[616px] pb-[32px]">
                <p className='text-t1'>
                At our core, we believe that everyone can improve their typing skills with the right tools and challenges. Our mission is to empower users to enhance their speed and accuracy through engaging exercises and insightful analytics.
                </p>
                </div>
               
                <div className=" flex gap-[16px]">
                <button className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>Learn More</a></button>
                <button className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"> Sign Up </button>
                </div>
            </div>


            </div>
          

            <div className="py-[112px] flex flex-col">
                <img className='pb-[80px] rounded-[10px]' src={peopleLaptop} alt="people laptop" />
                <div className='flex items-center gap-[80px]'>
                    <p className='text-h3 font-bold w-[616px]'>Empowering Your Typing Skills: Meet the Team Behind Our Innovative App</p>
                    <p className='text-t1 font-normal w-[616px]'>At our core, we are passionate about enhancing typing efficiency and speed. Our dedicated team of developers and educators came together to create a platform that not only challenges users but also tracks their progress through insightful analytics. Inspired by the need for improved digital communication, we aim to make typing training engaging and effective for everyone.</p>
                </div>
            </div>
        </div>
      
        </>
    )
}