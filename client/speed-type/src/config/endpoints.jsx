const BASE_URL = "http://localhost:3001/api";

const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  USER: `${BASE_URL}/profile/getprofile`,
  UPLOAD_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  FETCH_PROFILE_IMAGE: `${BASE_URL}/profile/getimage`,
  DELETE_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  POST_DASH_STATS: `${BASE_URL}/dashstat/dashstats`,
  GET_DASH_STATS: `${BASE_URL}/dashstat/dashstats`,
  GET_AREA_STATS: `${BASE_URL}/dashstat/performance-history`,
  GET_LEADERBOARD: `${BASE_URL}/dashstat/leaderboard`,
  GET_BARSTATS: `${BASE_URL}/dashstat/barstats`,
  GET_TOTAL_STATS: `${BASE_URL}/dashstat/totalstats`,
  SEND_EMAIL: `${BASE_URL}/email/sendemail`

};

export default API_ENDPOINTS;
