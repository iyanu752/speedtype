import { sendEmail } from "../../services/emailservice";
import { toast } from "react-toastify";
import { useState } from "react";
export default function ContactPage( ) {
 const [isLoading, setIsLoading] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const response = await sendEmail(name, email, message);
        if (response.success) {
            setIsLoading(false)
            toast.success('Email sent successfully')
            setName("");
            setEmail("");
            setMessage("");
        }else{
            setIsLoading(false)
            toast.error('Failed to send email')
        }
    }


    return (
        <div className="py-[112px] font-roboto flex flex-col items-center justify-center">
        <h2 className=" font-bold text-blue text-h2 pb-[24px]">Contact Us</h2>
        <p className=" font-normal text-t1 pb-[80px]">I&apos;d love to hear from you!</p>

        <form action="">
            <div className="pb-[24px] flex flex-col">
            <label htmlFor="Name" className="text-t2 font-normal pb-[8px]">Name</label>
            <input type="text" placeholder="jon doe"  className="w-[560px] px-[12px]  h-[48px] border-black border-2 rounded-[10px]" 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>
            </div>
             <div className="pb-[24px] flex flex-col">
             <label htmlFor="Email" className="text-t2 font-normal pb-[8px]">Email</label>
             <input type="text" placeholder="example@gmail.com" className="w-[560px] border-black border-2 px-[12px]  rounded-[10px] h-[48px]" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)}/>
             </div>
             <div className="pb-[80px] flex flex-col ">
             <label htmlFor="Message" className="text-t2 font-normal pb-[8px]">Message</label>
             <input type="text" placeholder="Type your message..." className="w-[560px] border-black border-2 rounded-[10px] px-[12px] pb-[114px] pt-[12px]"
             value={message} 
             onChange={(e) => setMessage(e.target.value)}
             />
             </div>
             <div className="flex  justify-center">
             <button type="submit" className="bg-blue py-[12px] text-white font-bold px-[24px] rounded-[10px] flex items-center justify-center gap-[8px]" onClick={submitHandler}> <span> Submit</span> <span className={`loader ${isLoading ? 'flex' : 'hidden'}`}></span></button>
             </div>
           
           
        </form>
        </div>
    )
}