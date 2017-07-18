<template>
    <div class="container">
        url参数id的值：{{$route.params.id}}
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'User',
    watch: {
        '$route'(to, from) {
            console.log(to)
            console.log(from)
        }
    },
    created() {
        console.log(this.$route)
    }
}
</script>
