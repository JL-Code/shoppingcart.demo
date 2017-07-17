<template>
    <div class="container">
        <div class="main">
            <div class="pull-left product-img">
                <img :src="product.currStyle.imgurl" :alt="product.name">
            </div>
            <div class="pull-right product-params text-left">
                <h2 v-text="product.name"></h2>
                <h4>选择版本</h4>
                <ul class="clearfix">
                    <li :class="['item',{active:item.text == product.currStoreage.text}]" v-for="item in product.storeages" :key="item.text" @click="changeStoreage(item)">
                        <a v-text="item.text"></a>
                    </li>
                </ul>
                <h4>选择颜色</h4>
                <ul class="clearfix">
                    <li :class="['item',{'disable':item.disable},{active:item.text == product.currStyle.text}]" v-for="item in product.styles" :key="item.text" @click="changeStyle(item,item.disable,$event)">
                        <a v-text="item.text"></a>
                    </li>
                </ul>
                <p> 小米MIX 全网通 {{product.currStoreage.text}} </p>
                <p>
                    <h2 class="totalPrice">总计 : {{product.currStoreage.price}}</h2>
                </p>
                <button type="button" class="btn" @click="addToCart">加入购物车</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Home',
    data() {
        return {
            message: '我是主页'
        }
    },
    computed: {
        ...mapGetters(['product', 'cartCount'])
    },
    methods: {
        addToCart() {
            let product = {
                id: this.product.id,
                name: this.product.name,
                selected: true,
                storeage: this.product.currStoreage.text,
                style: this.product.currStyle.text,
                price: this.product.currStoreage.price,
                imgurl: this.product.currStyle.imgurl,
                count: 1
            }
            this.$store.dispatch('addToCart', product)
        },
        changeStyle(style, disable, event) {
            if (!disable)
                this.product.currStyle = style
        },
        changeStoreage(storeage) {
            this.product.currStoreage = storeage
        }
    }
}
</script>
<style>
.container {
    padding: 0 5px;
}

.main {
    overflow: hidden;
    width: 1024px;
    padding: 15px;
}

.product-img {
    width: 560px;
}

.product-params {
    width: 434px;
}

.item {
    float: left;
    padding: 10px;
    margin: 10px 5px 0 0;
    border: 2px solid #cfcfcf;
    min-width: 172px;
    text-align: center;
}

.disable {
    border: 2px dashed #e0e0e0
}

.disable a {
    color: #e0e0e0 !important;
}

.active {
    border: 2px solid red;
}
</style>

