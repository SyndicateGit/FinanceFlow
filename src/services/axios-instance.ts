import axios from 'axios';

const axiosInstance = (contentType = 'application/json') => {
  
  const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:8080/api/'}`,
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${localStorage.getItem('finance_flow_auth_token')}`,
    },
  });

  axiosClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        window.location.href = '/sign-in';
      }
      return Promise.reject(error);
    }
  );

  return axiosClient;
};

export default axiosInstance;
