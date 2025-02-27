import LeaderboardTable from "../leaderboard/leaderboardtable";
import Trophy from "/assets/Trophy.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Toptypists() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  return (
    <div className="py-[112px] font-roboto px-[64px] gap-[80px] flex flex-row items-center">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
        className="w-[707px]"
      >
        <img src={Trophy} className="pb-[24px]" alt="" />
        <h2 className="text-h2 pb-[24px] font-bold">
          Celebrate Our Monthly Typing Champions!
        </h2>
        <p className="pb-[32px] font-normal text-t1">
          Check out the top typists of the month and see how you stack up
          against the competition. Join the race to improve your typing speed
          and claim your spot on the leaderboard!
        </p>
      </motion.div>
      <div className=" w-full">
        <LeaderboardTable limit={5}/>
      </div>
    </div>
  );
}
