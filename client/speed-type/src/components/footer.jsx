import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logo from "/assets/speedlogo.svg";

function Footer() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  return (
    <div className="px-4 sm:px-8 md:px-[64px] pb-[40px] md:pb-[80px]">
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h3 className="font-roboto text-2xl sm:text-3xl md:text-h3 font-bold pb-[16px] md:pb-[24px]">
            Boost Your Typing Speed Today
          </h3>
          <p className="font-normal font-roboto text-sm sm:text-base md:text-t1">
            Join our community and take on exciting typing challenges!
          </p>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row gap-3 md:gap-[16px]"
        >
          <motion.a
            href="/Signup"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            className="flex justify-center items-center py-2 px-5 w-[134px] rounded-[10px] font-roboto font-bold text-sm sm:text-base text-blue border-blue border-2 hover:bg-blue hover:text-white"
          >
            Start
          </motion.a>
          <motion.a
            href="/About"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            className="flex justify-center items-center py-2 px-5 w-[134px] rounded-[10px] font-roboto font-bold text-sm sm:text-base text-blue border-blue border-2 hover:bg-blue hover:text-white whitespace-nowrap"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      <div className="font-roboto text-xs sm:text-sm md:text-t3 font-normal pt-[40px] md:pt-[80px] flex flex-col sm:flex-row items-center gap-4">
        <img src={logo} alt="Logo" className="w-[120px] sm:w-[150px]" />
      </div>
    </div>
  );
}

export default Footer;
