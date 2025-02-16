import axios from '../config/axios'
import API_ENDPOINTS from '../config/endpoints'

const loginUser = async (email, password) => {
    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, { email, password });
      const { message, user, userId, token } = response.data;
  
      if (message === "Login successful") {
        localStorage.setItem("userId", userId);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
  
        return { success: true, message };
      } else {
        return { success: false, message };
      }
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
      return { success: false, message: "Login Failed" };
    }
  };
 
const signUpUser = async (name, country, email, password) => {
    try {
      const response = await axios.post(API_ENDPOINTS.SIGNUP, { name, country, email, password });
  
      if (response.data && response.data.userId) {
        return { success: true, message: "Sign Up Successful" };
      } else {
        return { success: false, message: response.data.message || "Unknown error" };
      }
    } catch (error) {
      console.error("Sign Up Failed:", error.response?.data || error.message);
      return { success: false, message: "Sign Up Failed: Server Error" };
    }
  };

  const logoutUser = async () =>  {

    try {
      const response = await axios.post (API_ENDPOINTS.LOGOUT)
      if(response.data && response.data.message) {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return {success: true, message: "Logout sucessful"}
      }  
    } catch (error) {
      console.error("Logout failed", error.response?.data || error.message)
      return {sucess: false, message: "Logout failed"}
    }
   
  }
  

 export {loginUser, signUpUser, logoutUser};