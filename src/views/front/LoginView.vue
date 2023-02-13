<template>
    這是登入畫面
    <form id="form" class="form-signin">
        <div class="form-floating mb-3">
            <input v-model="user.username" type="email" class="form-control" id="username"
                placeholder="name@example.com" required autofocus>
            <label for="username">Email address</label>
        </div>
        <div class="form-floating">
            <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Password"
                required>
            <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
            登入
        </button>
    </form>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$http.post(`${VITE_APP_URL}v2/admin/signin`, this.user).then(resp => {
                const { token, expired } = resp.data;
                console.log('token',token, expired)
                // 將回傳的token傳入cookie
                document.cookie = `hexToken = ${token};expires=${new Date(expired)};path=/`;
                // window.location = 'product-back.html'
                this.$router.push('/admin/products')
            }).catch(err => {
                alert(err.response.data.message);
            })
        }
    }
}
</script>