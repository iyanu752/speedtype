import cardOne from "/assets/card-one.png";
import cardTwo from "/assets/card-two.png";
import cardThree from "/assets/card-three.png";
import arrowright from "/assets/chevron-right.svg";
import typewriter from "/assets/typewriter.png";
import typing from "/assets/typing.png";
import Tc from "/assets/tc.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Challengespage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const cardData = [
    {
      img: cardOne,
      category: "Focus",
      title: "Speed Challenges to Race Against Time",
      description: "Test your speed with exciting timed tasks.",
    },
    {
      img: cardTwo,
      category: "Precision",
      title: "Accuracy Challenges to Perfect Your Skills",
      description: "Test your typing accuracy with focused exercises.",
    },
    {
      img: cardThree,
      category: "Endurance",
      title: "Timed Challenges for Typing Stamina",
      description: "Challenge yourself with time-bound typing tests.",
    },
  ];

  return (
    <div className="flex flex-col py-12 px-4 sm:px-8 md:px-[64px] font-roboto">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="pb-12 md:pb-[80px] flex items-center flex-col text-center"
      >
        <p className="pb-4 text-blue text-base sm:text-lg md:text-t2 font-semibold">
          Challenge
        </p>
        <h2 className="pb-6 font-bold text-2xl sm:text-3xl md:text-h2">
          Boost Your Typing Skills
        </h2>
        <p className="text-sm sm:text-base md:text-t1 font-normal">
          Engage in various challenges to enhance your typing speed
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center py-12 md:py-[112px] justify-center gap-8 md:gap-[32px]">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="border-black border-[1px] rounded-[10px] w-full sm:w-[350px] md:w-[416px] min-h-[450px] flex flex-col"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <img
              src={card.img}
              alt={`card-${index}`}
              className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover rounded-t-[10px]"
            />
            <div className="px-6 py-8 flex-1">
              <p className="text-blue pb-2 text-base sm:text-lg md:text-t2 font-semibold">
                {card.category}
              </p>
              <h4 className="text-lg sm:text-xl md:text-h4 pb-4 font-bold">
                {card.title}
              </h4>
              <p className="text-sm sm:text-base md:text-t2 pb-6 font-normal">
                {card.description}
              </p>
              <button className="flex font-bold text-blue mt-3 items-center">
                <a href="/Signup">Join</a>
                <img src={arrowright} alt="arrow right" className="ml-2 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row py-12 md:py-[112px] items-center justify-between gap-8 md:gap-[80px]">
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[616px] text-center md:text-left"
        >
          <h3 className="text-xl sm:text-2xl md:text-h3 font-bold pb-6">
            Boost Your Typing Speed with Engaging Speed Challenges
          </h3>
          <p className="font-normal text-sm sm:text-base md:text-t1">
            Our Speed Challenges are designed to push your limits and enhance
            your typing skills. With a variety of fun and engaging tasks, you
            will see your speed soar while enjoying the process!
          </p>
        </motion.div>
        <div className="w-full md:w-auto">
          <img
            src={typewriter}
            className="rounded-[10px] w-full md:w-auto"
            alt="typewriter"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-12 md:py-[112px] items-center justify-between gap-8 md:gap-[80px]">
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-auto"
        >
          <img
            className="rounded-[10px] w-full md:w-auto"
            src={typing}
            alt="typing"
          />
        </motion.div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[616px] text-center md:text-left"
        >
          <p className="font-semibold text-sm sm:text-base md:text-t1 text-blue pb-4">
            Precision
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold pb-6">
            Boost Your Typing Accuracy with Challenges
          </h2>
          <p className="font-normal text-sm sm:text-base md:text-t1">
            Accuracy Challenges are designed to enhance your typing precision.
            Tackle various exercises that focus on minimizing errors and
            improving your overall speed.
          </p>
          <div className="flex flex-col pt-8 gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-center md:text-left">
              <div>
                <h6 className="text-lg sm:text-xl md:text-h6 font-bold text-blue pb-4">
                  Challenge Yourself
                </h6>
                <p className="text-sm sm:text-base">
                  Engage in fun activities that sharpen your typing skills.
                </p>
              </div>
              <div>
                <h6 className="text-lg sm:text-xl md:text-h6 font-bold text-blue pb-4">
                  Track Progress
                </h6>
                <p className="text-sm sm:text-base">
                  Monitor your improvement with detailed analytics and feedback.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView4 ? 1 : 0, y: isInView4 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row py-12 md:py-[112px] gap-8 md:gap-[80px] items-center"
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-h2 font-bold pb-6">
            Take Your Typing Challenge Now
          </h2>
          <p className="pb-8 text-sm sm:text-base md:text-t1 font-normal">
            Join our community and improve your typing speed with exciting new
            challenges tailored for you!
          </p>
        </div>
        <div className="w-full md:w-auto">
          <img src={Tc} alt="typing challenge" className="w-full md:w-auto" />
        </div>
      </motion.div>
    </div>
  );
}
