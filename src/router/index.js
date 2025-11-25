//创建路由器实例
import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../store/user";
import WebHomePage from "@/components/WebHomePage.vue";

//定义路由
const routes = [
  {
    path: '/',
    name: "WebHomePage",
    component: () => import("@/components/WebHomePage.vue"),
    children: [
      {
        path: 'Login',
        name: "Login",
        component: () => import("@/pages/Login.vue"),
      },
      {
        path: 'Register',
        name: "Register",
        component: () => import("@/pages/Register.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
/* router.beforeEach((to) => {
  const user = useUserStore();
  // 已登录 → 不允许去登录/注册
  if (user.isLogin && (to.path === "/Login" || to.path === "/Register")) {
    return "/";
  }
}); */
export default router;
