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

  return (
    <div className="flex flex-col font-roboto">
      <div className="flex flex-col lg:flex-row py-[64px] lg:py-[112px] items-center gap-10 lg:gap-[80px] px-4 sm:px-8">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <p className="text-blue text-base sm:text-lg font-semibold pb-4">Speed</p>
          <p className="font-bold text-2xl sm:text-4xl lg:text-h1 leading-tight">Type Faster Today</p>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="pb-6">
            <p className="text-sm sm:text-base md:text-t1">
              At our core, we believe that everyone can improve their typing skills with the right tools and challenges. Our mission is to empower users to enhance their speed and accuracy through engaging exercises and insightful analytics.
            </p>
          </div>

<div className="flex gap-4">
  <motion.button
    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-2 px-6 text-sm sm:text-base whitespace-nowrap w-[134px]"
  >
    <a href="/About">Learn More</a>
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    className="hover:text-white border-2 font-bold border-blue text-blue hover:bg-blue rounded-[10px] py-2 px-6 text-sm sm:text-base whitespace-nowrap w-[134px]"
  >
    <a href="/Signup">Sign Up</a>
  </motion.button>
</div>

        </motion.div>
      </div>

      <div className="py-[64px] lg:py-[112px] flex flex-col px-4 sm:px-8">
        <motion.img
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="pb-[40px] lg:pb-[80px] rounded-[10px] w-full h-auto"
          src={peopleLaptop}
          alt="people laptop"
        />
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[80px]"
        >
          <p className="text-xl sm:text-2xl lg:text-h3 font-bold w-full lg:w-1/2">
            Empowering Your Typing Skills: Meet the Team Behind Our Innovative App
          </p>
          <p className="text-sm sm:text-base md:text-t1 font-normal w-full lg:w-1/2">
            At our core, we are passionate about enhancing typing efficiency and speed. Our dedicated team of developers and educators came together to create a platform that not only challenges users but also tracks their progress through insightful analytics. Inspired by the need for improved digital communication, we aim to make typing training engaging and effective for everyone.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
