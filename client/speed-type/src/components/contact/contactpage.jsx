export default function ContactPage( ) {
    return (
        <div className="py-[112px] font-roboto flex flex-col items-center justify-center">
        <h2 className=" font-bold text-blue text-h2 pb-[24px]">Contact Us</h2>
        <p className=" font-normal text-t1 pb-[80px]">We&apos;d love to hear from you!</p>

        <form action="">
            <div className="pb-[24px] flex flex-col">
            <label htmlFor="Name" className="text-t2 font-normal pb-[8px]">Name</label>
            <input type="text" placeholder="jon doe"  className="w-[560px] px-[12px]  h-[48px] border-black border-2 rounded-[10px]"/>
            </div>
             <div className="pb-[24px] flex flex-col">
             <label htmlFor="Email" className="text-t2 font-normal pb-[8px]">Email</label>
             <input type="text" placeholder="example@gmail.com" className="w-[560px] border-black border-2 px-[12px]  rounded-[10px] h-[48px]"/>
             </div>
             <div className="pb-[80px] flex flex-col ">
             <label htmlFor="Message" className="text-t2 font-normal pb-[8px]">Message</label>
             <input type="text" placeholder="Type your message..." className="w-[560px] border-black border-2 rounded-[10px] px-[12px] pb-[114px] pt-[12px]"/>
             </div>
             <div className="flex  justify-center">
             <button type="submit" className="bg-blue py-[12px] text-white font-bold px-[24px] rounded-[10px]">Submit</button>
             </div>
           
           
        </form>
        </div>
    )
}