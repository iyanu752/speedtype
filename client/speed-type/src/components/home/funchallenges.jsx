import TechLady from "/assets/woman-laptop.png";
import TechMan from "/assets/man-laptop.png";
import track from "/assets/track.svg";
import analyze from "/assets/analyze.svg"
import analytics from "/assets/analytics.svg";
import arrowright from "/assets/chevron-right.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FunChallenge() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  const featureData = [
    {
      image:track,  
      title: "Track Your Progress and Compete with Others on Our Leaderboard",
      description: "Our web app offers a seamless experience from registration to skill enhancement.",
      buttonText: "Sign Up",
      buttonLink: "/Signup",
    },
    {
        image: analytics,
      title: "Engage in Fun Challenges to Boost Your Typing Speed and Accuracy",
      description: "Complete various typing challenges designed to improve your speed and precision.",
      buttonText: "Start",
      buttonLink: "/Challenges",
    },
    {
        image: analyze,
      title: "Analyze Your Performance with Detailed Charts and Insights",
      description: "View your typing statistics and track your improvement over time.",
      buttonText: "View",
      buttonLink: "/Analytics",
    },
  ];

  return (
    <div className="px-[64px] gap-[80px] items-center justify-center font-roboto py-[112px] flex flex-col">
      <div className="flex justify-center items-center gap-[80px]">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h3 className="text-h3 font-bold pb-5">
            Unleash Your Typing Potential with Engaging Challenges and Real-Time Insights
          </h3>
          <p className="text-t1 font-normal">
            Our app offers a variety of challenges designed to enhance your typing speed and accuracy. With real-time
            analytics, you can track your progress and see how you stack up against others on our dynamic leaderboards.
          </p>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <img className="w-[616px] h-[640px]" src={TechMan} alt="Man typing" />
        </motion.div>
      </div>

      <div className="flex align-center justify-center flex-col">
        <div className="flex justify-center pb-10">
          <motion.h3
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="text-h3 text-center w-[50%] flex justify-center font-bold"
          >
            Unlock Your Typing Potential with Our Engaging Speed Training Challenges
          </motion.h3>
        </div>

        <div className="flex justify-evenly text-center gap-20">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              ref={ref3}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 30 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="flex flex-col justify-center items-center"
            >
              <img src={feature.image} className="w-[48px] h-[48px]" />
              <h5 className="text-h5 font-semibold">{feature.title}</h5>
              <p>{feature.description}</p>
              <a href={feature.buttonLink}>
                <button className="flex text-blue mt-3">
                  <span>{feature.buttonText}</span> <motion.img
                   src={arrowright} alt="arrow right" />
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="gap-[80px] items-center justify-center font-roboto py-[112px] flex flex-row">
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-[616px] h-[640px]" src={TechLady} alt="Woman typing" />
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-[616px] h-[456px] flex flex-col justify-center"
        >
          <span className="text-blue text-t2 font-semibold pb-[16px]"> Speed </span>
          <h2 className="text-black text-h1 font-bold pb-[24px]">Unlock Your Typing Potential with Fun Challenges</h2>
          <p className="text-black text-t1 font-normal pb-[32px]">
            Experience a transformative journey to faster typing. Our app combines engaging challenges with competitive
            elements to enhance your skills.
          </p>

          <div className="flex flex-row gap-[24px]">
            <div>
              <span className="text-h6 text-blue font-bold">Boost Speed</span>
              <p className="text-t2 font-normal">
                Increase your typing speed significantly with our interactive training modules.
              </p>
            </div>
            <div>
              <span className="text-h6 text-blue font-bold">Enhance Accuracy</span>
              <p>Achieve greater accuracy while typing through targeted exercises and real-time feedback.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
