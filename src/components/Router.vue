<template>
    <transition name="fade">
        <div class="container">
            <router-link to="/user/12">『动态路径参数』</router-link>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'routerTest'
}
</script>
