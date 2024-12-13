import signup from '/assets/signin.svg';
import logo from '/assets/logo.svg';
import google from '/assets/google.svg'
import guest from '/assets/guest.png'
export default function Signup() {
  return (
    <div className="flex h-screen font-roboto">
      {/* Left side: Blue background with logo at the top-left and image centered */}
      <div className="w-[40%] bg-blue flex flex-col justify-center items-center relative">
        <img 
          src={logo} 
          alt="Logo" 
          className="absolute top-5 left-5 w-[150px]" 
        />
        <img src={signup} alt="Sign Up" className="w-2/3" />
      </div>

      {/* Right side: Sign-up form */}
      <div className="w-1/2 flex justify-center items-center">
        <form className="w-2/3 max-w-sm">
          {/* Form Header */}
          <div className="flex flex-col items-center text-center justify-center mb-6">
            <h1 className="text-h3 font-bold pb-[8px]">Sign Up</h1>
            <p className="text-t1 font-normal">Enter your details to get started</p>
          </div>

          {/* Input Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border-2 border-gray rounded-[10px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border-2 border-gray rounded-[10px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border-2 border-gray rounded-[10px] w-full py-2 px-3 text-gray focus:outline-none focus:ring focus:border-blue"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue text-white font-bold mt-[16px] py-2 px-4 rounded-[10px] hover:bg-blue-600"
          >
            Sign Up
          </button>

          {/* Divider with "or" */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray"></div>
          </div>

          {/* Additional Sign-Up Options */}
          <button
            type="button"
            className=" border-2 border-gray w-full flex flex-row justify-center items-center gap-[8px]  text-black font-bold py-2 px-4 rounded-[10px] mb-4"
          >
            <img className='w-[24px] h-[24px]' src={google} alt="" />
            Sign Up with Google
          </button>
          <button
            type="button"
            className=" border-2 border-gray w-full flex flex-row justify-center items-center gap-[8px]  text-black font-bold py-2 px-4 rounded-[10px]"
          >
            <img className='w-[24px] h-[24px]' src={guest} alt="" />
            Sign Up as a Guest
          </button>
        </form>
      </div>
    </div>
  );
}
