//创建路由器实例
import { createRouter, createWebHistory } from "vue-router";


//定义路由
const routes = [
  {
    path: '/',
    component: () => import("@/components/homePage.vue"),
    children: [
      {
        path:'',
        name:"homePage",
        component:()=>import("@/components/productList.vue")
      },
      {
        path: 'login',
        name: "Login",
        component: () => import("@/pages/login.vue"),
      },
      {
        path: 'register',
        name: "Register",
        component: () => import("@/pages/register.vue"),
      },
      {
        path:'cart',
        name: 'Cart',
        component:()=> import("@/pages/cart.vue")
      }
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
