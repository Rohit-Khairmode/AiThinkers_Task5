import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 10000,
  headers: {},
});
// axiosInstance.interceptors.request.use((config) => {
//   if (config.url === "/tabs") {
//     config.timeout = 12000;
//   }
//   return config;
// });
