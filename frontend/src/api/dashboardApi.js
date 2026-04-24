import apiClient from './apiClient.js';

export const getDashboardStats = () => apiClient.get('/dashboard/stats');
