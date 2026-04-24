import apiClient from './apiClient';

/**
 * authApi.js
 * Handles authentication requests to the backend
 */

export const login = async (credentials) => {
  return apiClient.post('/users/login', credentials);
};

export const register = async (userData) => {
  return apiClient.post('/users/register', userData);
};

export const getProfile = async () => {
  return apiClient.get('/users/profile');
};

const authApi = {
  login,
  register,
  getProfile,
};

export default authApi;
