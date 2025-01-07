import signup from '/assets/signin.svg';
import logo from '/assets/logo.svg';
import google from '/assets/google.svg'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import guest from '/assets/guest.png'
import axios from 'axios';
export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }


  const submitLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
      if (result.data === "success") {
        navigate('/dashmain');
        toast.success("Login Successful");
      } else if (result.data === "password is incorrect") {
        toast.error("Password is incorrect");
      } else {
        toast.error("No record existed");
      }
    })
    .catch(err => {
      console.log(err);
      toast.error("Login Failed");
    });
  }
    return (
      <>
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
            <form
             onSubmit={submitLogin}
            className="w-2/3 max-w-sm">
              {/* Form Header */}
              <div className="flex flex-col items-center text-center justify-center mb-6">
                <h1 className="text-h3 font-bold pb-[8px]">Sign In</h1>
                <p className="text-t1 font-normal">Welcome back! Please enter your email and password to Sign In.</p>
              </div>
    
              {/* Input Fields */}
              <div className="mb-4">
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 border-gray rounded-[10px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative w-full">
              <input
                type= {showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray rounded-[10px] w-full py-2 px-3 pr-10 text-gray focus:outline-none focus:ring focus:border-blue"
              />{showPassword ? <FaRegEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray cursor-pointer" onClick={togglePasswordVisibility} /> : <FaRegEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray cursor-pointer" onClick={togglePasswordVisibility} />}
      
            </div>    
                
              </div>
              <button
                type="submit"
                className="w-full bg-blue text-white font-bold mt-[16px] py-2 px-4 rounded-[10px] hover:bg-blue-600"
              >
                Sign In
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
                Sign In with Google
              </button>
              <button
                type="button"
                className=" border-2 border-gray w-full flex flex-row justify-center items-center gap-[8px]  text-black font-bold py-2 px-4 rounded-[10px]"
              >
                <img className='w-[24px] h-[24px]' src={guest} alt="" />
                Sign In as a Guest
              </button>
  
              <p className='text-gray text-t2 text-center pt-[32px]'>Don&apos;t have an account? <span className='text-blue'><a href="/Signup">Sign Up</a></span></p>
            </form>
          </div>
        </div>
      
      </>
       
    )
}