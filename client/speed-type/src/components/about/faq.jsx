import { useState } from "react";
import PropTypes from 'prop-types';
function FAQItem({ question, answer }) {


    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    

    return (
        <div className="border-b border-gray-700 pb-[16px] mb-[16px]">
            <button 
                onClick={toggleFAQ} 
                className="w-full text-left flex justify-between items-center text-black text-t1 font-roboto font-bold"
            >
                <span>{question}</span>
                <button
                    className="ml-[50px] p-[8px] bg-orange-500 rounded-full"
                >
                <svg
                        className={`w-5 h-5 text-black transform transition-transform duration-300 ${
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
            {isOpen && (
                <div 
                    className="mt-[8px] text-black font-roboto font-normal text-t2 "
                >
                    {answer}
                </div>
            )}
        </div>
    );
}

function Faq() {

    const faqData = [
        {
            question: "How does it work?",
            answer: "Our app provides typing challenges that adapt to your skill level. You can track your progress through detailed analytics and compare your speed with others on the leaderboard. This gamified approach makes learning to type faster both fun and effective."
        },
        {
            question: "Is it free?",
            answer: "Yes, our app is free to use with optional premium features. You can access a variety of typing exercises without any cost. Upgrade for advanced analytics and exclusive challenges."
        },
        {
            question: "Can I track progress?",
            answer: "Absolutely! Our app includes comprehensive analytics that show your typing speed and accuracy over time. You can view your performance trends and identify areas for improvement. This helps you stay motivated and focused on your goals."
        },
        {
            question: "What devices support it?",
            answer: "Our app is designed to be compatible with most devices, including desktops, laptops, and tablets. You can access it via any modern web browser. This flexibility allows you to practice typing anytime, anywhere."
        },
        {
            question: "How can I improve?",
            answer: "Consistent practice is key to improving your typing speed. Use our app regularly to challenge yourself and track your progress. Additionally, focusing on accuracy before speed can lead to better long-term results."
        },
    ];

    return (
        <div className="py-[112px] gap-[80px] justify-center">
            <div
            className="flex flex-row justify-between">
                <div className="flex flex-col justify-between">
                    <div className="w-[500px]">
                      <h1 className="text-left text-black pb-[24px] text-h2 font-bold font-roboto">
                        FAQs
                        </h1>
                        <p className=" font-roboto pb-[32px] text-t1 font-normal">Find answers to common questions about our typing trainer app and enhance your skills.</p>
                        <button className="py-[12px] rounded-[10px] px-[24px] border-blue border-2 text-blue hover:bg-blue font-bold hover:text-white"><a href="/Contact">Contact</a></button>
                    </div>
  
                </div>

                <div className="flex flex-col font-roboto w-[732px]">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
}

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

export default Faq;