import api from "../index";

// 登录接口声明
export function loginApi(data) {
  return api.post("/auth/login", data);
}

// 注册接口声明
export function registerApi(data) {
  return api.post("/auth/register", data);
}