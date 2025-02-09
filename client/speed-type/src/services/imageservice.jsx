import axios from '../config/axios';
import API_ENDPOINTS from '../config/endpoints';


const uploadProfileImage = async (file) => {
    if (!file) {
      console.warn("No file provided for upload");
      return null;
    }
    try {
      const formData = new FormData();
      formData.append("userImage", file); 
      const response = await axios.post(API_ENDPOINTS.UPLOAD_PROFILE_IMAGE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      localStorage.setItem('user', JSON.stringify(response.data.user))
      return response.data.profileImg; //todo: comeback to this 
    } catch (error) {
      console.error("Error uploading profile image:", error.response?.data || error.message);
      throw error;
    }
  };
  


const fetchImages = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.FETCH_PROFILE_IMAGE);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching profile image:", error.response?.data || error.message);
    return null;
  }
};


const deleteProfileImage = async(userId) => {
    if (!userId) return null;
    try {
        const response = await axios.delete(API_ENDPOINTS.DELETE_PROFILE_IMAGE(userId));
        return response.data.profileImg;

    }catch (error) {
        console.error("Eror deleting profile image", error.response?.data || error.message)
    }
}

export {uploadProfileImage, fetchImages, deleteProfileImage};