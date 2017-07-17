import { expect } from 'chai'
import mutations from './mutations'
// 解构 mutations
const { add_to_cart } = mutations

describe('mutations', () => {
  it('ADD_TO_CART', () => {
    // 模拟状态
    const state = {
      added: []
    }
    // 应用 mutation
    add_to_cart(state, {
      id: 1,
      name: '小米MIX'
    })
    // 断言结果
    expect(state.added.count).to.equal(1)
  })
})
