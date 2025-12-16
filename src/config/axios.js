import axios from 'axios';

// 1. Création de l'instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// 2. Intercepteur de REQUÊTE (Request Interceptor)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Intercepteur de RÉPONSE (Response Interceptor)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Session expirée ou token invalide. Déconnexion...");
      
      // Action : Nettoyer le stockage local
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Action : Rediriger vers la page de login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;