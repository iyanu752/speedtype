import peopleLaptop from '/assets/people-laptop.png'
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function Abouttop() {
      const ref1 = useRef(null);
      const ref2 = useRef(null);
      const ref3 = useRef(null);

      const isInView1 = useInView(ref1, { once: true });
      const isInView2 = useInView(ref2, { once: true });
      const isInView3 = useInView(ref3, { once: true });
    return(
        <>
        <div className = "  flex flex-col  font-roboto">
            <div className='flex flex-row  py-[112px] items-center gap-[80px]'>
            <motion.div
               ref={ref1}
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
               transition={{ duration: 0.5 }}
            >
                <p className="text-blue text-t2 font-semibold pb-[16px]">Speed</p>
                <p className=" font-bold text-h1 w-[616px]">Type Faster Today</p>
            </motion.div>


            <motion.div
               ref={ref1}
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
               transition={{ duration: 0.5 }}>
                <div className="w-[616px] pb-[32px]">
                <p className='text-t1'>
                At our core, we believe that everyone can improve their typing skills with the right tools and challenges. Our mission is to empower users to enhance their speed and accuracy through engaging exercises and insightful analytics.
                </p>
                </div>
               
                <div className=" flex gap-[16px]">
                <motion.button
                            whileHover={{
                                scale: 1.1,
                                transition: {duration: 0.2}
                            }}
                className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href='/About'>Learn More</a></motion.button>
                <motion.button
                            whileHover={{
                                scale: 1.1,
                                transition: {duration: 0.2}
                            }}
                className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-[10px] w-[134px]"><a href="/Signup"></a> Sign Up </motion.button>
                </div>
            </motion.div>


            </div>
          

            <div className="py-[112px] flex flex-col">
                <motion.img
                 ref={ref2}
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
                 transition={{ duration: 0.5 }}
                className='pb-[80px] rounded-[10px]' src={peopleLaptop} alt="people laptop" />
                <motion.div
                 ref={ref3}
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
                 transition={{ duration: 0.5 }}
                
                className='flex items-center gap-[80px]'>
                    <p className='text-h3 font-bold w-[616px]'>Empowering Your Typing Skills: Meet the Team Behind Our Innovative App</p>
                    <p className='text-t1 font-normal w-[616px]'>At our core, we are passionate about enhancing typing efficiency and speed. Our dedicated team of developers and educators came together to create a platform that not only challenges users but also tracks their progress through insightful analytics. Inspired by the need for improved digital communication, we aim to make typing training engaging and effective for everyone.</p>
                </motion.div>
            </div>
        </div>
      
        </>
    )
}