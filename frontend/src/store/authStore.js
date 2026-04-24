import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  accessToken: localStorage.getItem('accessToken') || null,
  role: null, // 'consumer' | 'retailer' | 'admin'
  
  login: (userData, token) => {
    localStorage.setItem('accessToken', token);
    set({ user: userData, accessToken: token, role: userData.role });
  },
  
  logout: () => {
    localStorage.removeItem('accessToken');
    set({ user: null, accessToken: null, role: null });
  },
  
  setToken: (token) => {
    localStorage.setItem('accessToken', token);
    set({ accessToken: token });
  },
}));

export default useAuthStore;
