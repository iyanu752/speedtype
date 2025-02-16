import axios from '../config/axios';
import API_ENDPOINTS from '../config/endpoints';


const postDashboardStats = async ( wpm, accuracy) => {
    try {
        const response = await axios.post(API_ENDPOINTS.POST_DASH_STATS,{wpm, accuracy});
        if(response.data && response.data.userId) {
            console.log("stats saved sucessfully")
        }
    } catch (error) {
        console.error("Failed to save stats", error)
    }
}


const getCardStatistics = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.GET_DASH_STATS);
        console.log('response', response);
        return response.data;
    } catch (error) {
        console.error("Error fetching dash stat data: ", error.response?.data);
        return null;
    }
}

const getAreaStatistics = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.GET_AREA_STATS);
        return response.data;
    } catch (error) {
        console.error ("Error fetching area stat data", error);
        return null;
    } 
}

const getBarStats = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.GET_BARSTATS);
        return response.data;
    }catch (error) {
        console.error ("Error fetching area stat data", error);
        return null;
    }
}

const getLeaderboard = async () => {
    try{
        const response = await axios.get(API_ENDPOINTS.GET_LEADERBOARD);
        return response.data;
    }catch (error) {
        console.error("Error fetching leaderboard data", error);
        return null;
    }
}

const getTotalStats = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.GET_TOTAL_STATS)
        return response.data;
    } catch (error) {
        console.error("Error fetching total data", error);
        return null;
    }
}

export {postDashboardStats, getCardStatistics, getAreaStatistics, getLeaderboard, getBarStats, getTotalStats};