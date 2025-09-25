import LeaderboardTable from "../leaderboard/leaderboardtable";
import Trophy from "/assets/Trophy.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Toptypists() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  return (
    <div className="py-16 sm:py-24 lg:py-[112px] font-roboto px-6 sm:px-12 lg:px-[64px] flex flex-col lg:flex-row items-center gap-12 lg:gap-[80px]">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
        className="w-full lg:w-[707px]"
      >
        <img src={Trophy} className="pb-6 sm:pb-[24px] w-[80px] sm:w-[100px] lg:w-auto" alt="trophy" />
        <h2 className="text-h3 sm:text-h2 font-bold pb-6 sm:pb-[24px]">
          Celebrate Our Monthly Typing Champions!
        </h2>
        <p className="font-normal text-sm sm:text-base lg:text-t1 pb-8 sm:pb-[32px]">
          Check out the top typists of the month and see how you stack up against the competition. Join the race to improve your typing speed and claim your spot on the leaderboard!
        </p>
      </motion.div>
      <div className="w-full">
        <LeaderboardTable limit={5} />
      </div>
    </div>
  );
}
