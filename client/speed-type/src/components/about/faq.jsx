import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence, useInView } from "framer-motion";

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="border-b border-gray-700 pb-4 mb-4"
      ref={ref1}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 20 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
    >
      <button
        onClick={toggleFAQ}
        className="w-full text-left flex justify-between items-center text-black text-base sm:text-t1 font-roboto font-bold"
      >
        <span>{question}</span>
        <button className="ml-4 sm:ml-[50px] p-2 bg-blue rounded-full">
          <svg
            className={`w-5 h-5 text-white transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden text-black font-roboto font-normal text-sm sm:text-t2 mt-2"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Faq() {
  const faqData = [
    { question: "How does it work?", answer: "Our app provides typing challenges..." },
    { question: "Is it free?", answer: "Yes, our app is free to use with optional premium features..." },
    { question: "Can I track progress?", answer: "Absolutely! Our app includes comprehensive analytics..." },
    { question: "What devices support it?", answer: "Our app is designed to be compatible with most devices..." },
    { question: "How can I improve?", answer: "Consistent practice is key to improving your typing speed..." },
  ];

  return (
    <div className="py-16 sm:py-[112px] px-4 sm:px-8 lg:px-16 gap-10 lg:gap-[80px] justify-center">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        <div className="flex flex-col justify-between w-full lg:w-[500px]">
          <h1 className="text-left text-black pb-6 text-2xl sm:text-3xl md:text-h2 font-bold font-roboto">
            FAQs
          </h1>
          <p className="font-roboto pb-8 text-sm sm:text-base md:text-t1 font-normal">
            Find answers to common questions about our typing trainer app and enhance your skills.
          </p>
          <motion.button
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            className="py-3 rounded-[10px] px-6 border-blue border-2 text-blue hover:bg-blue font-bold hover:text-white text-sm sm:text-base w-fit"
          >
            <a href="/Contact">Contact</a>
          </motion.button>
        </div>
        <div className="flex flex-col font-roboto w-full lg:w-[732px]">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Faq;
