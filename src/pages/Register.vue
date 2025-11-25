<template>
    <div class="register-page">
        <div class="register-inner">
            <h1 class="page-title">注册账户</h1>
            <form class="form-wrap" @submit.prevent="onSubmit">

                <h2 class="section-title">个人信息</h2>
                <label class="form-label">姓</label>
                <input v-model="firstName" type="text" class="form-input" />

                <label class="form-label">名</label>
                <input v-model="lastName" type="text" class="form-input" />

                <div class="newsletter"><input type="checkbox" id="news" v-model="newsletter" /><label
                        for="news">确认注册</label></div>
                <h2 class="section-title">登录的个人信息</h2>

                <label class="form-label">邮箱</label>
                <input v-model="email" type="email" class="form-input" />

                <label class="form-label">密码</label>
                <input v-model="password" type="password" class="form-input" />

                <label class="form-label">确认密码</label>
                <input v-model="confirmPassword" type="password" class="form-input" />

                <button class="submit-btn">创建账户</button>
            </form>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerApi } from '../api';

const router = useRouter()

//表单字段的数据绑定声明
const firstName = ref("")
const lastName = ref("")
const newsletter = ref(false)
const email = ref("")
const password = ref("")
const confirmPassword = ref("")

//提交校验
async function onSubmit() {
    // 1. 必填校验
    if (!firstName.value || !lastName.value || !email.value || !password.value) {
        alert("请完整填写所有必填字段");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("两次密码不一致");
        return;
    }

    try {
        // 2. 调用注册接口
        await registerApi({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            newsletter: newsletter.value,
        });

        alert("注册成功！请登录");
        router.push("/Login");

    } catch (error) {
        console.error("注册失败：", error);
        alert("注册失败，请检查服务器或网络");
    }
}

</script>

<style scoped>
/* 页面仍然撑 满屏幕 */
.register-page {
    width: 100%;
    padding: 40px 0;
    background: white;
    box-sizing: border-box;
}

.register-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
}

/* 标题居中排版 */
.page-title {
    font-size: 26px;
    margin-bottom: 25px;
    width: 600px;
    text-align: left;
}

/* 表单居中，宽度固定 */
.form-wrap {
    max-width: 600px;
    width: 100%;
}

/* 分区标题 */
.section-title {
    margin-top: 30px;
    font-size: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ddd;
}

/* 标签 */
.form-label {
    font-size: 15px;
    margin-top: 18px;
    display: block;
}

/* 输入框占满屏幕 */
.form-input {
    width: 100%;
    height: 45px;
    border: 1px solid #ccc;
    margin-top: 6px;
    padding: 0 12px;
    font-size: 15px;
    box-sizing: border-box;
}

/* 复选框 */
.newsletter {
    display: flex;
    align-items: center;
    margin-top: 12px;
    gap: 8px;
}

/* 提交按钮左对齐 */
.submit-btn {
    margin-top: 25px;
    height: 48px;
    width: 220px;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
}

.submit-btn:hover {
    background: #e53935;
}

/* 响应式处理 */
@media (max-width: 768px) {
    .register-page {
        padding: 20px;
    }

    .form-input {
        height: 40px;
    }
}
</style>
