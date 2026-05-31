import axios from 'axios';

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:/api',
//   withCredentials: true,
// });
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  withCredentials: true,
});
// Attach JWT token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Use the headers object directly — works correctly in axios 1.x
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 globally: clear session and redirect to login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      // Only redirect if not already on auth page
      if (!window.location.pathname.includes('/auth') && !window.location.pathname.includes('/login')) {
        window.location.href = '/auth';
      }
    }
    return Promise.reject(error);
  }
);

export const register = (userData) => api.post('/auth/register', userData);
export const login = (userData) => api.post('/auth/login', userData);
export const getMe = () => api.get('/auth/me');

// Interview API
// Do NOT set Content-Type manually for multipart — axios auto-sets it with the correct boundary
export const parseResume = (formData) => api.post('/interview/parse-resume', formData);
export const initializeInterview = (data) => api.post('/interview/initialize', data);
export const sendInterviewMessage = (data) => api.post('/interview/chat', data);
export const generateFeedback = (data) => api.post('/interview/feedback', data);

export default api;