import { useState } from "react";
import PropTypes from 'prop-types';
import { useRef } from "react";
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
            className="border-b border-gray-700 pb-[16px] mb-[16px]"
            ref={ref1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView1 ? 1 : 0, y:  isInView1 ? 0 : 20 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
        >
            <button
                onClick={toggleFAQ}
                className="w-full text-left flex justify-between items-center text-black text-t1 font-roboto font-bold"
            >
                <span>{question}</span>
                <button className="ml-[50px] p-[8px] bg-blue rounded-full">
                    <svg
                        className={`w-5 h-5 text-white transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </button>

            {/* Smooth open and close animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden text-black font-roboto font-normal text-t2 mt-[8px]"
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
        <div className="py-[112px] gap-[80px] justify-center">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-between">
                    <div className="w-[500px]">
                        <h1 className="text-left text-black pb-[24px] text-h2 font-bold font-roboto">FAQs</h1>
                        <p className="font-roboto pb-[32px] text-t1 font-normal">
                            Find answers to common questions about our typing trainer app and enhance your skills.
                        </p>
                        <motion.button
                         whileHover={{
                        scale: 1.1,
                        transition: {duration: 0.2}
                        }}
                        className="py-[12px] rounded-[10px] px-[24px] border-blue border-2 text-blue hover:bg-blue font-bold hover:text-white">
                            <a href="/Contact">Contact</a>
                        </motion.button>
                    </div>
                </div>

                <div className="flex flex-col font-roboto w-[732px]">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
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
