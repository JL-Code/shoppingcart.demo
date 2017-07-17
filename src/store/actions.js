/**
 * @desc 用于提交mutation 间接更改state tips:可以执行异步方法。
 */
import * as types from './mutation-types'
export default {
  //结算购物车
  checkout({
    commit,
    state
  }, products) {
    //暂存购物车里的商品
    const saveItems = [...state.added]
    //清空购物车
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, {
        saveItems
      })
    )
  },
  //添加到购物车
  addToCart({
    commit
  }, product) {
    commit(types.ADD_TO_CART, product)
  },
  deleteProduct({
    commit,
    state
  }, id) {
    commit(types.DELTE_PRODUCT, id)
  }
}
