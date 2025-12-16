<template>
    <div class="login-page">
        <div class="container">
            <h1 class="page-title">账户登录</h1>
            <div class="login-wrapper">
                <div class="login-left">
                    <h2 class="section-title">注册账户</h2>
                    <p>如果您有账户，请直接输入您的用户名称</p>
                    <form @submit.prevent="onSubmit" class="login-form">
                        <label>用户名称</label>
                        <input v-model="userName" type="text" required />
                        <label>密码</label>
                        <input v-model="password" type="password" required />
                        <button type="submit" class="btn-login">登录</button>
                        <a href="#" class="forgot">忘记密码?</a>
                    </form>
                </div>
                <div class="login-right">
                    <h2 class="section-title">新账户</h2>
                    <p>创建账户有很多好处：快速结账，保存多个地址，追踪订单等等。</p>
                    <!-- 修改为router.push -->
                    <!-- <router-link to="/Register" class="btn-create">确认创建</router-link> -->
                    <!-- <div class="btn-create" @click="router.push('/register')">确认创建</div> -->
                    <div class="btn-create" @click="router.push('/register')">确认创建</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { loginApi } from "@/api/user";

const userStore = useUserStore();
const router = useRouter();

const userName = ref("");
const password = ref("");
const loading = ref(false);

async function onSubmit() {
    if (!userName.value || !password.value) {
        alert("邮箱和密码不能为空");
        return;
    }
    loading.value = true;
    try {
        // const res = await loginApi({
        //     username: userName.value,
        //     password: password.value,
        // });
        await userStore.login(userName.value, password.value);
        alert("登录成功！");
        router.push("/");
    } catch (error) {
        console.error("登录异常：", error);
        if (error.response && error.response.data && error.response.data.message) {
            alert("登录失败：" + error.response.data.message);
        } else {
            alert("登录失败，请检查账号或服务器问题");
        }
    } finally {
        loading.value = false;
    }
}





// 是否需要一个路由

//增加一个路由
// <template>登录</template> => 能否在页面中渲染出来  

// 开发样式

// 分析是否有需要存全局管理的变量   例如：用户token  头像 用户名  或者  用户的购物车；
// 如果有： 查看store 中是否有对应类型的模块，没有就新增   
// 在store中声明需要的变量 

// 页面交互
// 1、判断用户名称或 密码是否必填
// 2、按钮点击

// 联调接口
// 分析获取的数据是否需要存到store中
// 需要则在action中开发


// 测试

</script>

<style scoped>
.login-page {
    width: 100%;
    padding: 50px 0;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 0 15px;
}

.page-title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
}

.login-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 40px;
}

.login-left,
.login-right {
    width: 50%;
}

.section-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
}

input {
    width: 40%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

.btn-login {
    background: black;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    width: 120px;
    margin-top: 10px;
}

.forgot {
    margin-left: 10px;
    color: #c00;
    font-size: 14px;
}

.btn-create {
    display: inline-block;
    background: black;
    color: white;
    padding: 12px 25px;
    margin-top: 20px;
    text-decoration: none;
}
</style>