import * as types from './mutation-types'

const mutations = {
  [types.SET_SHOPID](state, shopId) {
    state.shopId = shopId
  }
}

export default mutations
