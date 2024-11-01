import arrowDown from '/src/assets/Chevron Down.svg'
function Navbar () {
    return (
        <>
            <div className="py-[16px] flex fixed w-full flex-row justify-between items-center bg-white px-[64px] shadow-md z-50">
                <div>LOGO</div>
                <div className=" font-roboto text-t2 font-bold text-blue">
                    <ul className="flex items-center gap-[16px]">
                        <li> <a href='/'>Home</a></li>
                        <li><a href='/About'>About Us</a></li>
                        <li className="flex items-center gap-[4px] cursor-pointer">
                        <span>More Options</span> <button className="focus:outline-none"> <img src={arrowDown} alt="arrow down" /></button>
                        </li>
                        <li><a href='/Contact'>Contact Us</a></li>
                        <li><button className="border-blue border-2 rounded-[10px] py-[8px] px-[20px]">Log in</button></li>
                        <li><button className="text-white bg-blue rounded-[10px] py-[8px] px-[20px]"> Sign Up </button></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar;