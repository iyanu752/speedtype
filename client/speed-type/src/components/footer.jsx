import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logo from "/assets/speedlogo.svg";
function Footer() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true });
    return (
        <>
        <div className="px-[64px] pb-[80px]">
            <div className="flex justify-between">
                <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                >
                    <h3 className=" font-roboto text-h3 font-bold pb-[24px]">Boost Your Typing Speed Today</h3>
                    <p className="font-normal font-roboto text-t1 ">Join our community and take on exciting typing challenges!</p>
                </motion.div>
                <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-[16px]">
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        transition: {duration: 0.2}
                    }}
                    className="py-[12px] px-[24px] rounded-[10px] font-roboto font-bold text-t2 text-blue border-blue border-2 hover:bg-blue hover:text-white"><a href="/Signup">Start</a></motion.button>
                    <a href="/About"> <motion.button
                      whileHover={{
                        scale: 1.1,
                        transition: {duration: 0.2}
                    }}
                    className="py-[12px] px-[24px] font-roboto font-bold text-t2 text-blue border-blue border-2 hover:bg-blue hover:text-white">Learn More</motion.button></a>
                </motion.div>
            </div>

            <div className=" font-roboto text-t3 font-normal  pt-[80px] flex flex-row">
                 <img
                    src={logo} 
                    alt="Logo" 
                    className="w-[150px]" 
                 />
            </div>
            {/* <div className="flex justify-evenly">
                    <ul>
                        <li className=" text-t2 font-semibold">Quick Links</li>
                        <li> <a href="/About"></a>About Us</li>
                        <li> <a href="/Contact"></a>Contact Us</li>
                    </ul>
                </div> */}
        </div>
        </>
    )
}

export default Footer