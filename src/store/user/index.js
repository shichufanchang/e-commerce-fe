import { defineStore } from "pinia";
import api from "@/api";

export const useUserStore = defineStore("user", {
  //全局变量
  state: () => ({
    username: localStorage.getItem("username") || "",
    token: localStorage.getItem("token") || "",
    isLogin: !!localStorage.getItem("token"),
  }),
  // 全局方法(一般只有涉及到state里数据的方法才会在这里写)
  actions: {
    async login(username, password) {
      const res = await api.post("/auth/login", { username, password });
      this.username = res.data.username;
      this.token = res.data.token;
      this.isLogin = true;
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
    },

    async register(formData) {
      await api.post("/auth/register", formData);
    },

    logout() {
      this.username = "";
      this.token = "";
      this.isLogin = false;

      localStorage.removeItem("token");
      localStorage.removeItem("username");
    },
  },
  //存储到本地缓存
  persist: true,
});

/* import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 创建 pinia 实例
const pinia = createPinia();

// 使用持久化插件
pinia.use(piniaPluginPersistedstate);

// 创建用户 store
export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    token: "",
    isLogin: false,
  }),

  actions: {
    login(username) {
      this.username = username;
      this.token = "token_" + Date.now(); // 模拟 token
      this.isLogin = true;
    },

    logout() {
      this.username = "";
      this.token = "";
      this.isLogin = false;
    },
  },

  persist: true,
});

// 导出 pinia 供 main.js 使用
export default pinia;
 */

/* export const useUserStore = defineStore("userStore", {
  // 存储数据
  state: () => ({
    userData: 1,
    //鉴权
    token: "",
    // 登录 =》 token => 调用其他接口 =》 后端 =》 判断token是否有效 =》（身份证）
    //调用其他需要鉴权接口的时候 通常会把token放在请求头中
    // 自定义请求头
    //   headers: {'X-Requested-With': 'XMLHttpRequest'},
  }),
  //   获取数据
  getters: {
    doubleCount: (state) => state.userData * 2,
  },
  //   存储公用方法
  actions: {
    // async await Promise 成功 失败 padding
    // 请求方法 4种 get 获取  post 修改数据 delete 删除 put
    // get   参数 http://localhost:3000/api/auth/login?username=123&password=1234
    // post 参数 body{}
    async login() {
      let token = '';
      let res = await axios({
        method: "post",
        url: "http://localhost:3000/api/auth/login",
        data: {
          username: "123",
          password: "123424",
        },
      });
      token = res.data.token
      this.token = token;
    },
  },
}); */
