import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  MdDashboard,
  MdLeaderboard,
  MdGames,
  MdArrowForwardIos,
  MdLogout ,
  MdLightMode,
  MdNightlightRound
} from "react-icons/md";
import ProfileForm from "../profile/profile";
import logo from "/assets/speedlogo.svg";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../../services/authservice";
import { fetchImages} from "../../services/imageservice";
import { fetchUsers } from "../../services/imageservice";

export default function Dashnav() {
  const location = useLocation();
  const navigate = useNavigate()
  const [isMinimized, setIsMinimized] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const isActive = (path) => location.pathname === path;

  const [user, setUser] = useState({});
  const [users, setUsers] = useState({})
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );


  const logout = async () => {
    const response = await logoutUser();
    if(response.success) {
      toast.success(response.message)
      navigate("/login");
    }else {
      toast.error(response.message)
    }
  }

  const onUploadSuccess = async (imageUrl) => {
    const userProfile = await fetchImages()
    setUser({...userProfile, profileImg: imageUrl})
  }

  // const onDeleteSuccess = async() => {
  //   const deleteUserProfile = await deleteProfileImage()
  //   setUser ({...deleteUserProfile, profileImg: "https://i.pravatar.cc/300"})
  // }
  const fetchUser = async () => {
    try {
    const userImage = await fetchImages();
    setUser(userImage.user)
    } catch (error) {
      console.error("Error fetching images:", error.response?.data || error.message);
    } 
  };

  const getUser = async () => {
    try {
      const userProfile = await fetchUsers();
      setUsers(userProfile.user)
      } catch (error) {
        console.error("Error fetching images:", error.response?.data || error.message);
      } 
  }

  useEffect (() => {
    
    if(localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
    fetchUser()
    getUser()
  }, []) 

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
<Card
  className={`h-screen rounded-none border border-black dark:border-white transition-all duration-300 
  ${isMinimized ? "w-[5rem]" : "w-[320px]"} 
  p-4 shadow-xl shadow-blue-gray-900/5 overflow-hidden flex flex-col bg-white dark:bg-dark 
  sticky top-0`}
>
      {/* Toggle Button */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute top-6 right-4 flex items-center justify-center w-[24px] h-[24px] rounded-full bg-blue-gray-50 shadow hover:bg-blue-gray-100"
      >
        <MdArrowForwardIos
          className={`w-4 h-5 text-blue-gray-600 transition-transform duration-300 ${
            !isMinimized ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Logo Section */}
      <div className={`mb-2 p-4 ${isMinimized ? "hidden" : ""}`}>
        <img src={logo} alt="Logo" className="w-[100px]" />
      </div>

      <hr
        className={`my-2 border-blue-gray-50 ${isMinimized ? "hidden" : ""}`}
      />

      {/* Navigation List */}
      <List className={isMinimized ? " pt-[70px]" : ""}>
        <ListItem
          className={`hover:text-blue hover:bg-light-blue-50 dark:hover:bg-blue-gray-700 dark:text-white  ${
            isActive("/dashmain") ? "bg-light-blue-50 dark:hover:bg-blue-gray-700 text-blue dark:text-blue" : ""
          }`}
        >
          <ListItemPrefix>
            <Link to="/dashmain">
              <MdDashboard className="h-5 w-5" />
            </Link>
          </ListItemPrefix>
          {!isMinimized && <Link to="/dashmain">Dashboard</Link>}
        </ListItem>
        <ListItem
          className={`hover:text-blue hover:bg-light-blue-50 dark:hover:bg-blue-gray-700 dark:text-white  ${
            isActive("/dashleaderboard") ? "bg-light-blue-50 dark:hover:bg-blue-gray-700 text-blue dark:text-blue" : ""
          }`}
        >
          <ListItemPrefix>
            <Link to="/dashleaderboard">
              <MdLeaderboard className="h-5 w-5" />
            </Link>
          </ListItemPrefix>
          {!isMinimized && <Link to="/dashleaderboard">Leaderboard</Link>}
        </ListItem>
        <ListItem
          className={`hover:text-blue hover:bg-light-blue-50 dark:hover:bg-blue-gray-700 dark:text-white ${
            isActive("/dashchallenges") ? "bg-light-blue-50 dark:hover:bg-blue-gray-700 text-blue dark:text-blue" : ""
          }`}
        >
          <ListItemPrefix>
            <Link to="/dashchallenges">
              <MdGames className="h-5 w-5" />
            </Link>
          </ListItemPrefix>
          {!isMinimized && <Link to="/dashchallenges">Challenges</Link>}
        </ListItem>

        <hr className="my-2 border-t border-blue-gray-50 dark:border-gray " />

        <ListItem onClick={toggleTheme} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-blue-gray-700">
          <ListItemPrefix>
            {darkMode ? <MdLightMode className="h-5 w-5 text-yellow-500" /> : <MdNightlightRound className="h-5 w-5 text-gray-700 dark:text-white" />}
          </ListItemPrefix>
          {!isMinimized && <span className="dark:text-white">{darkMode ? "Light Mode" : "Dark Mode"}</span>}
        </ListItem>
      </List>

      {/* Profile Section */}
      <hr
        className={`my-2 border-blue-gray-50  dark:border-gray ${isMinimized ? "hidden" : ""}`}
      />
      <div
        className={`flex items-center gap-4 mt-auto p-2 ${
          isMinimized ? "w-[100px] h-[100px] justify-start" : ""
        }`}
      >
        <img
          src={user.profileImg || "https://avatar.iran.liara.run/public/boy?username=Ash"}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
          onClick={toggleModal}
        />
        <ProfileForm userProfileImage={user.profileImg} onUploadSuccess={onUploadSuccess} open={modalOpen} handleOpen={toggleModal} />
        <div className={`${isMinimized ? "hidden" : ""}`}>
          <Typography variant="small" color="blue-gray" className="font-medium dark:text-white">
            {users.name || "john doe"}
          </Typography>
          <Typography variant="small" color="blue-gray" className="text-xs dark:text-white">
           {users.email || "email@example.com"}
          </Typography>
        </div>
      </div>
        <ListItem
        onClick={logout}
        className="hover:text-blue hover:bg-light-blue-50 cursor-pointer flex items-center"
      >
        <ListItemPrefix>
          <MdLogout className="h-5 w-5 text-red" />
        </ListItemPrefix>
        {!isMinimized && <span className="font-bold text-red">Logout</span>}
  </ListItem>
    </Card>
  );
}
