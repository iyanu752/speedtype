const BASE_URL = "http://localhost:3001/api";

const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  UPLOAD_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  FETCH_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  DELETE_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
};

export default API_ENDPOINTS;
