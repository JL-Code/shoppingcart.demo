<template>
    <div class="container">
        <input type="text" v-model="account" placeholder="用户名">
        <input type="password" autocomplete="new-password" v-model="password" placeholder="密码">
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            account: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log(this.account, this.password)
        }
    }
}
</script>

