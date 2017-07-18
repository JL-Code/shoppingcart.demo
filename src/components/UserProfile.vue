<template>
    <transition name="fade">
        <div>
            我是用户描述 嵌套路由
            <input type="text" v-model="name">
        </div>
    </transition>
</template>
<script>
export default {
    name: 'userProfile',
    data() {
        return { name: '' }
    },
    beforeRouteEnter: (to, from, next) => {
        console.log("路由要进来了")
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
        //可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。
        next(vm => {
            // 通过 `vm` 访问组件实例
        })
    },
    beforeRouteLeave: (to, from, next) => {
        // 路由离开前
        console.log("路由要离开了")
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        // if (this.name !== '') {
        //     alert("当前表单数据尚未保存，你确定要离开？")
        //     next(false)
        // }
        next()

    },
    beforeRouteUpdate: (to, from, next) => {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        console.log("路由要更新了")
    }
}
</script>

