function Footer() {
    return (
        <>
        <div className="px-[64px] pb-[80px]">
            <div className="flex justify-between">
                <div>
                    <h3 className=" font-roboto text-h3 font-bold pb-[24px]">Boost Your Typing Speed Today</h3>
                    <p className="font-normal font-roboto text-t1 ">Join our community and take on exciting typing challenges!</p>
                </div>
                <div className="flex items-center gap-[16px]">
                    <button className="py-[12px] px-[24px] rounded-[10px] font-roboto font-bold text-t2 text-blue border-blue border-2 hover:bg-blue hover:text-white"><a href="#">Start</a></button>
                    <a href="/About"> <button className="py-[12px] px-[24px] font-roboto font-bold text-t2 text-blue border-blue border-2 hover:bg-blue hover:text-white">Learn More</button></a>
                </div>
            </div>

            <div className=" font-roboto text-t3 font-normal  pt-[80px] flex flex-row">
                <p>LOGO</p>
            </div>
            <div className="flex justify-evenly">
                    <ul>
                        <li className=" text-t2 font-semibold">Quick Links</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Support Center</li>
                        <li>Blog Posts</li>
                        <li>FAQs</li>
                    </ul>

                    <ul>
                        <li className=" text-t2 font-semibold">Follow Us</li>
                        <li>Twitter Feed</li>
                        <li>Instagram Profile</li>
                        <li>YouTube Channel</li>
                        <li>LinkedIn Group</li>

                    </ul>
                </div>
        </div>
        </>
    )
}

export default Footer