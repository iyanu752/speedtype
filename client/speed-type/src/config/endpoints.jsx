const BASE_URL = "http://localhost:3001/api";

const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  UPLOAD_PROFILE_IMAGE: `${BASE_URL}/profile/image`,
  FETCH_PROFILE_IMAGE: (userId) => `${BASE_URL}/image/${userId}`,
  DELETE_PROFILE_IMAGE: (userId) =>` ${BASE_URL}/image/${userId}`,

//   GET_USER: `${BASE_URL}/user/profile`,
//   UPDATE_USER: `${BASE_URL}/user/update`,
  // Add more endpoints as needed
};

export default API_ENDPOINTS;
