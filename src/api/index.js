import axios from "axios";

// 1、实例化一个axios
// baseURL => 后端域名


const api = axios.create({
  baseURL: "http://localhost:3000/api",  // 你的后端地址
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});


// /auth/login

// // 请求拦截
// 请求头 请求体
// 响应头 响应体
// {
//   header:鉴权 => token jwt cookie 
//   body:后端定义接口需要你传递的参数
// }
// 请求接口的时候如果你已经登录，那么就会把鉴权放在请求头带给后端
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem("user");
//   if (token) {
//     config.headers.Authorization = "Bearer " + JSON.parse(token).token;
//   }
//   return config;
// });

export default api;
