const BASE_URL = "http://localhost:3001/api";

const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  UPLOAD_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  FETCH_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  DELETE_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  POST_DASH_STATS: `${BASE_URL}/dashstat/dashstats`,
  GET_DASH_STATS: `${BASE_URL}/dashstat/dashstats`,
  GET_AREA_STATS: `${BASE_URL}/dashstat/performance-history`,
  GET_LEADERBOARD: `${BASE_URL}/dashstat/leaderboard`

};

export default API_ENDPOINTS;
