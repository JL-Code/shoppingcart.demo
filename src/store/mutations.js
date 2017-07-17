/**
 * @desc 用于直接更改state tips:只能执行同步方法。
 */
import * as types from './mutation-types'
export default {
  [types.ADD_TO_CART](state, product) {
    let old = state.added.find(item => {
      return item.id === product.id
    })
    if (old)
      old.count++;
    else
      state.added.push(product)
  },
  [types.CHECKOUT_CART](state) {
    state.added = []
  },
  [types.CHECKOUT_REQUEST](state) {
    // clear cart
    state.added = []
    state.checkoutStatus = null
  },
  [types.CHECKOUT_SUCCESS](state) {
    state.checkoutStatus = 'successful'
  },
  [types.CHECKOUT_FAILURE](state, {
    saveItems
  }) {
    state.added = saveItems
    state.checkoutStatus = 'failed'
  },
  [types.DELTE_PRODUCT](state, id) {
    let deleteIndex = state.added.findIndex(item => {
      return item.id = id
    })
    state.added.splice(deleteIndex, 1)
  }
}
