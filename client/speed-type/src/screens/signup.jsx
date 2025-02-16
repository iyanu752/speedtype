import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../services/authservice";
import signup from "/assets/signin.svg";
import logo from "/assets/logo.svg";
import google from "/assets/google.svg";
import guest from "/assets/guest.png";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryData = data
          .map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const submitSignin = async (e) => {
    e.preventDefault();
    const response = await signUpUser(name, country, email, password);
    if (response.success) {
      toast.success(response.message);
      navigate("/login");
    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="flex h-screen font-roboto">
      {/* Left side: Blue background with logo and image */}
      <div className="w-[40%] bg-blue flex flex-col justify-center items-center relative">
        <img src={logo} alt="Logo" className="absolute top-5 left-5 w-[150px]" />
        <img src={signup} alt="Sign Up" className="w-2/3" />
      </div>

      {/* Right side: Sign-up form */}
      <div className="w-[50%] flex justify-center items-center">
        <form onSubmit={submitSignin} className="w-2/3 max-w-sm">
          <div className="flex flex-col items-center text-center justify-center mb-3">
            <h4 className="text-h4 font-bold pb-[8px]">Sign Up</h4>
            <p className="text-t2 text-gray font-normal">
              Enter your details to get started
            </p>
          </div>

          {/* Username Input */}
          <div className="mb-4 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray rounded-[10px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue"
            />
          </div>

          {/* Country Dropdown with Flag */}
          <div className="mb-4 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <div className="relative">
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border-2 border-gray rounded-[10px] w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-blue appearance-none"
              >
                <option value="">Select your country</option>
                {countries.map((countryObj, index) => (
                  <option key={index} value={countryObj.name}>
                    {countryObj.name}
                  </option>
                ))}
              </select>

              {/* Display flag only if a country is selected */}
              {country && (
                <img
                  src={countries.find((c) => c.name === country)?.flag}
                  alt="Flag"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-4"
                />
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4 flex flex-col">
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

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray rounded-[10px] w-full py-2 px-3 text-gray focus:outline-none focus:ring focus:border-blue"
              />
              {showPassword ? (
                <FaRegEyeSlash
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaRegEye
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>

          <button type="submit" className="w-full bg-blue text-white font-bold mt-[16px] py-2 px-4 rounded-[10px] hover:bg-blue-600">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray"></div>
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray"></div>
          </div>

          {/* Additional Sign-Up Options */}
          <button type="button" className="border-2 border-gray w-full flex flex-row justify-center items-center gap-[8px] text-black font-bold py-2 px-4 rounded-[10px] mb-4">
            <img className="w-[24px] h-[24px]" src={google} alt="" />
            Sign Up with Google
          </button>
          <button type="button" className="border-2 border-gray w-full flex flex-row justify-center items-center gap-[8px] text-black font-bold py-2 px-4 rounded-[10px]">
            <img className="w-[24px] h-[24px]" src={guest} alt="" />
            Sign Up as a Guest
          </button>

          <p className="text-gray text-t2 text-center pt-[24px]">
            Already have an account? <span className="text-blue"><a href="/Login">Sign In</a></span>
          </p>
        </form>
      </div>
    </div>
  );
}
