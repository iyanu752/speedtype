import analyticsOne from "/assets/analytics1.png";
import analyticsTwo from "/assets/analysis2.png";
import analyticCard from "/assets/leaderboard-hero.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Analyticspage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  return (
    <div className="flex flex-col py-16 px-6 sm:px-12 lg:px-16 font-roboto">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
        className="flex flex-col lg:flex-row gap-8 lg:gap-20"
      >
        <div>
          <p className="text-t2 font-semibold pb-4 text-blue">Insights</p>
          <h2 className="text-h3 lg:text-h2 font-bold">
            Track Your Typing Progress and Performance
          </h2>
        </div>

        <div className="flex flex-col">
          <p className="text-t1 font-normal pb-8">
            Our analytics dashboard provides detailed insights into your typing
            performance. Monitor your words per minute, accuracy, and
            improvements over time to enhance your skills.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8">
            <div>
              <h2 className="font-bold text-h2 sm:text-h1 pb-2 text-blue">
                WPM
              </h2>
              <p className="text-t2 font-normal max-w-xs">
                Measure your typing speed with precision.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-h2 sm:text-h1 pb-2 text-blue">
                Accuracy
              </h2>
              <p className="text-t2 font-normal max-w-xs">
                Ensure your typing is both fast and accurate.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center py-16 gap-8 lg:gap-20">
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
          className="flex flex-col w-full lg:w-[616px]"
        >
          <h2 className="text-h3 lg:text-h2 font-bold pb-6">
            See How You Compare to Average Users
          </h2>
          <p className="text-t1 font-medium pb-8">
            Our analytics feature allows you to gauge your typing speed against
            average users. Discover where you stand and how you can improve.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-10">
            <div>
              <h6 className="text-blue font-bold text-h6 pb-4">
                Performance Insights
              </h6>
              <p className="font-text-t2 font-normal">
                Analyze your speed and track your progress over time.
              </p>
            </div>
            <div>
              <h6 className="text-blue font-bold text-h6 pb-4">
                Competitive Edge
              </h6>
              <p className="font-text-t2 font-normal">
                Join the leaderboard and challenge yourself against others.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 50 }}
          className="w-full max-w-md"
        >
          <img src={analyticsOne} alt="analytics one" className="w-full" />
        </motion.div>
      </div>

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
        className="flex items-center justify-center flex-col py-16 text-center"
      >
        <h2 className="font-bold text-h3 lg:text-h2 pb-6">
          Performance Insights
        </h2>
        <p className="text-t1 font-normal pb-12">
          Track your typing progress with detailed analytics.
        </p>
        <img src={analyticsTwo} alt="analytics two" className="w-full max-w-3xl" />
      </motion.div>

      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
        className="relative flex flex-col py-16"
      >
        <img
          src={analyticCard}
          className="w-full rounded-[10px]"
          alt="Analytics Card"
        />
        <div className="absolute inset-0 flex flex-col text-center px-4 sm:px-12 text-white justify-center items-center">
          <h2 className="text-h3 lg:text-h2 font-bold pb-6">
            Keep Improving Your Typing Skills
          </h2>
          <p className="font-normal text-t1 pb-8 max-w-2xl">
            Join the challenge today and unlock your potential with every
            keystroke you make!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="hover:text-white border-2 font-bold border-white hover:border-blue text-white hover:bg-blue rounded-[10px] py-3 px-6"
            >
              <a href="/Signup">Participate</a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="hover:text-white border-2 font-bold border-white hover:border-blue text-white hover:bg-blue rounded-[10px] py-3 px-6"
            >
              <a href="/Leaderboard">View Leaderboard</a>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
