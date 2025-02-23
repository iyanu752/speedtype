import axios from '../config/axios';
import API_ENDPOINTS from '../config/endpoints';

const sendEmail = async (name, email, message) => {
    try {
        const response = await axios.post(API_ENDPOINTS.SEND_EMAIL, { name, email, message });
        if(response.data) {
            return { success: true, message: "Sign Up Successful" };
        }

    } catch (error) {
        console.error("Failed to send email", error);
        return { success: false, message: "Failed to send email" };
    }
};

export {sendEmail}