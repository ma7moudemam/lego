import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    //   SHOW LOADER
    console.log("INTERCEPTOR", config);
    // Do something before request is sent
    let token = localStorage.getItem("token")
    config.headers["Authorization"] =
      `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // HIDE LOADER
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // HIDE LOADER
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
