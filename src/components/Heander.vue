<template>
    <div class="header">
        <router-link class="a-header pull-left" to="/">小米MIX</router-link>
        <router-link class="a-header pull-right" to="/cart">购物车（{{cartCount}}）</router-link>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Header',
    data() {
        return { count: 0 }
    },
    computed: {
        ...mapGetters(['cartCount'])
    }
}
</script>
<style>
.header {
    padding: 10px 50px;
    background: #fff;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
    overflow: hidden;
}

.a-header {
    font-size: 18px;
    line-height: 50px;
}
</style>


