import TechLady from "/assets/woman-laptop.png";
import TechMan from "/assets/man-laptop.png";
import track from "/assets/track.svg";
import analyze from "/assets/analyze.svg";
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
      image: track,
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
    <div className="px-4 sm:px-8 md:px-[64px] gap-[80px] items-center justify-center font-roboto py-[64px] md:py-[112px] flex flex-col">
      
    
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[80px]">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-h3 font-bold pb-5">
            Unleash Your Typing Potential with Engaging Challenges and Real-Time Insights
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-normal text-gray-700">
            Our app offers a variety of challenges designed to enhance your typing speed and accuracy. With real-time
            analytics, you can track your progress and see how you stack up against others on our dynamic leaderboards.
          </p>
        </motion.div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img className="w-full max-w-md md:max-w-lg h-auto object-contain" src={TechMan} alt="Man typing" />
        </motion.div>
      </div>

   
      <div className="flex flex-col items-center justify-center">
        <motion.h3
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-h3 text-center max-w-2xl font-bold pb-10"
        >
          Unlock Your Typing Potential with Our Engaging Speed Training Challenges
        </motion.h3>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              ref={ref3}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 30 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="flex flex-col justify-center items-center px-4"
            >
              <img src={feature.image} className="w-12 h-12 mb-4" alt={feature.title} />
              <h5 className="text-lg sm:text-xl font-semibold">{feature.title}</h5>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              <a href={feature.buttonLink}>
                <button className="flex items-center gap-2 text-blue mt-3 font-semibold">
                  <span>{feature.buttonText}</span> 
                  <motion.img src={arrowright} alt="arrow right" />
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row gap-10 md:gap-[80px] items-center justify-center py-[64px] md:py-[112px]">
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img className="w-full max-w-md md:max-w-lg h-auto object-contain" src={TechLady} alt="Woman typing" />
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView4 ? 1 : 0, x: isInView4 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <span className="text-blue text-sm sm:text-base font-semibold pb-4"> Speed </span>
          <h2 className="text-2xl sm:text-3xl lg:text-h1 font-bold pb-6">
            Unlock Your Typing Potential with Fun Challenges
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 pb-6">
            Experience a transformative journey to faster typing. Our app combines engaging challenges with competitive
            elements to enhance your skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <span className="block text-lg font-bold text-blue">Boost Speed</span>
              <p className="text-sm sm:text-base">
                Increase your typing speed significantly with our interactive training modules.
              </p>
            </div>
            <div className="flex-1">
              <span className="block text-lg font-bold text-blue">Enhance Accuracy</span>
              <p className="text-sm sm:text-base">
                Achieve greater accuracy while typing through targeted exercises and real-time feedback.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
