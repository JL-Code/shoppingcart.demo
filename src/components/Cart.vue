<template>
    <div class="container">
        <div class="cart-goods">
            <div class="goods-head clearfix">
                <div class="col col-check">
                    <input type="checkbox" id="allSelected" v-model="allSelected">
                    <label for="allSelected">全选</label>
                </div>
                <div class="col col-name">商品名称</div>
                <div class="col col-img"></div>
                <div class="col col-price">单价</div>
                <div class="col col-num">数量</div>
                <div class="col col-total">小计</div>
                <div class="col col-action">操作</div>
            </div>
            <div class="goods-body clearfix" v-for="item in addedProducts" :key="item.id">
                <div class="col col-check">
                    <input type="checkbox" v-model="item.selected">
                </div>
                <div class="col col-name" v-text="item.name"></div>
                <div class="col col-img">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="col col-price">{{item.price}}元</div>
                <div class="col col-num">
                    <input type="number" v-model="item.count">
                </div>
                <div class="col col-total">
                    <span>{{item.price * item.count}}元</span>
                </div>
                <div class="col col-action">
                    <button type="button" @click="deleteProduct(item.id)">删除</button>
                </div>
            </div>
            <div class="cart-bar clearfix text-right">
                <div class="selection-left">
                    共
                    <span class="price">{{cartCount}}</span>
                    件商品，已选择
                    <span class="price">{{selectedProductsCount}}</span>
                    件
                </div>
                <span class="price">合计（不含运费）：
                    <h1 class="totalPrice">{{totalPrice}}</h1>元&nbsp;
                </span>
                <button type="button" class="btn">结算</button>
            </div>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'cart',
    data() {
        return {
            selecteCount: 0
        }
    },
    computed: {
        ...mapGetters(['addedProducts', 'totalPrice', 'cartCount', 'selectedProductsCount']),
        allSelected: {
            get() {
                if (!this.addedProducts.length)
                    return false
                for (let i = 0; i < this.addedProducts.length; i++) {
                    if (this.addedProducts[i].selected === false) {
                        return false
                    }
                }
                return true
            },
            set(val) {
                for (let i = 0; i < this.addedProducts.length; i++) {
                    this.addedProducts[i].selected = val
                }
            }
        }
    },
    methods: {
        ...mapActions(['deleteProduct'])
    }
}
</script>
<style>
.cart-goods {
    width: 1200px;
    margin: 0 auto;
}

.cart-bar {
    padding: 10px 0;
}

.goods-head {
    border-bottom: 1px solid #cfcfcf;
}

.goods-body {
    padding: 10px 0;
}

.col {
    float: left;
    min-width: 160px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}

.col-img img {
    width: 60px;
    height: 60px;
    display: block;
}

.col-check {
    text-align: left;
}

.selection-left {
    float: left
}

.col-name {}

.col-price {}

.col-num input {
    width: 60px;
    text-align: center;
}

.col-total span {
    color: #ff6700;
}

.col-action button {
    font-size: 12px;
    padding: 5px 15px;
    color: #fff;
    background-color: #ff6700;
    border: 1px solid #ff6700;
}

h1.totalPrice {
    display: inline-block;
    margin: 0;
}
</style>

