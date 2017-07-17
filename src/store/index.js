import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  added: [],
  checkoutStatus: null,
  spu: [{
      color: '黑色',
      storeage: '标准版4GB内存+128GB',
      price: 3499
    },
    {
      color: '皓月白',
      storeage: '标准版4GB内存+128GB',
      price: 3499
    },
    {
      color: '黑金',
      storeage: '标准版4GB内存+128GB',
      price: 3499
    },
    {
      color: '黑色',
      storeage: '尊享版6GB内存+256GB',
      price: 3999
    },
    {
      color: '皓月白',
      storeage: '尊享版6GB内存+256GB',
      price: 3999
    },
    {
      color: '黑金',
      storeage: '尊享版6GB内存+256GB',
      price: 3999
    }
  ],
  products: [{
      id: 1,
      name: '小米MIX 黑色 标准版4GB内存+128GB',
      count: 1,
      selected: false,
      color: '黑色',
      imgurl: 'https://i8.mifile.cn/a1/pms_1490088813.05223210!560x560.jpg',
      disable: false,
      storeage: '标准版4GB内存+128GB',
      price: 3499
    }, {
      id: 2,
      name: '小米MIX 皓月白 标准版4GB内存+128GB',
      count: 1,
      selected: false,
      color: '皓月白',
      imgurl: 'https://i8.mifile.cn/a1/pms_1490088812.19079238!560x560.jpg',
      disable: false,
      storeage: '标准版4GB内存+128GB',
      price: 3499
    }, {
      id: 3,
      name: '小米MIX 黑金 标准版4GB内存+128GB',
      count: 1,
      selected: false,
      color: '黑金',
      imgurl: '',
      disable: true,
      storeage: '标准版4GB内存+128GB',
      price: 3499
    },
    {
      id: 4,
      name: '小米MIX 黑色 标准版4GB内存+128GB',
      count: 1,
      selected: false,
      color: '黑色',
      imgurl: 'https://i8.mifile.cn/a1/pms_1490088813.05223210!560x560.jpg',
      disable: true,
      storeage: '尊享版6GB内存+256GB',
      price: 3999
    }, {
      id: 5,
      name: '小米MIX 皓月白 尊享版6GB内存+256GB',
      count: 1,
      selected: false,
      color: '皓月白',
      imgurl: 'https://i8.mifile.cn/a1/pms_1490088812.19079238!560x560.jpg',
      disable: true,
      storeage: '尊享版6GB内存+256GB',
      price: 3999
    }, {
      id: 6,
      name: '小米MIX 黑金 尊享版6GB内存+256GB',
      count: 1,
      selected: false,
      color: '黑金',
      imgurl: 'https://i8.mifile.cn/a1/pms_1490088813.05223210!560x560.jpg',
      disable: false,
      storeage: '尊享版6GB内存+256GB',
      price: 3999
    }
  ]
}

const getters = {
  cartCount() {
    if (!state.added.length)
      return 0
    let sum = state.added.reduce((pre, next) => {
      return {
        count: pre.count + next.count
      }
    })
    return sum.count
  },
  product() {
    return state.product
  },
  addedProducts() {
    return state.added
  },
  selectedProducts() {
    return state.added.filter(m => {
      return m.selected === true
    })
  },
  selectedProductsCount(state, getters) {
    let selectedProducts = getters.selectedProducts
    if (!selectedProducts.length)
      return 0
    return selectedProducts.reduce((pre, next) => {
      return {
        count: pre.count + next.count
      }
    }).count
  },
  totalPrice(state, getters) {
    let selectedProducts = getters.selectedProducts
    if (selectedProducts.length) {
      let sum = selectedProducts.reduce((pre, next) => {
        return {
          price: pre.price + next.price,
          count: pre.count + next.count
        }
      })
      return sum.price * sum.count
    } else
      return 0
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
