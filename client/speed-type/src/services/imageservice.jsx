import axios from '../config/axios';
import API_ENDPOINTS from '../config/endpoints';


const uploadProfileImage = async (file) => {
    if (!file) return null;
    try {
        const formData = new FormData();
        formData.append("userImage", file);
        const response = await axios.post(API_ENDPOINTS.UPLOAD_PROFILE_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
              },
        }) 
        return response.data.newImage.url;
    } catch (error) {
        console.error("Error uploading profile image:", error.response?.data || error.message);
        throw error;
    }
}


const fetchImages = async (userId) => {
    if (!userId) return null;
    try {
        const response = await axios.get(API_ENDPOINTS.FETCH_PROFILE_IMAGE(userId));
        return response.data.profileImg;
    } catch (error) {
        console.error ("Error fetching profile image", error.response?.data || error.message);
        throw error;
    }
}

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