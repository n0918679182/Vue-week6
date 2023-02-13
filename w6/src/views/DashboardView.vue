<template>
    這是後台
    <router-link to="/admin/products">後臺產品列表</router-link> |
    <router-link to="/admin/orders">後臺訂單列表</router-link> |
    <router-link to="/">回前台</router-link> |
    <a href="#" @click.prevent="logout">登出</a>
    <hr>
    <RouterView></RouterView>
</template>
<script>
import { RouterView } from 'vue-router';
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
    components: {
        RouterView
    },
    methods: {
        logout() {
            document.cookie = `hexToken =;expires=${new Date()};`;
            this.$router.push('/login')
        },
        checkLogin() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
            this.$http.defaults.headers.common.Authorization = token;

            this.$http.post(`${VITE_APP_URL}/v2/api/user/check`).then((resp) => {
                    if(!resp.data.success) {
                        alert('請先登入')
                        this.$router.push('/login')    
                    }
                })
                .catch((err) => {
                    alert(err.response.data.message)
                    this.$router.push('/login')
                })
        }
    },
    mounted() {
        this.checkLogin()
    },
}
</script>