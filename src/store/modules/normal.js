import Utils from '../../libs/utils'

const state = {
  showTopTab: false, // 商品详情显示顶部标签栏
  allItemSelect: null,
  editMode: null,
  focusAddress: null,
  defaultAddress: null,
  selectedAddress: null,
  selectCartIds: null,
  globalCartList: null,
  currentAddressManageType: null, // 地址列表页模式
  focusProduct: null,
  notProductIds: [],
  fetchIndexCount: 0,
  lastFromRoute: ''
}

const mutations = {
  updateShowTopTab (state, payload) {
    state.showTopTab = payload
  },
  updateAllItemSelectStatus (state, payload) {
    state.allItemSelect = payload
  },
  updateFocusAddress (state, payload) {
    state.focusAddress = Utils.deepCopyObj(payload)
  },
  updateDefaultAddress (state, payload) {
    state.defaultAddress = Utils.deepCopyObj(payload)
  },
  updateSelectedAddress (state, payload) {
    state.selectedAddress = Utils.deepCopyObj(payload)
  },
  updateSelectCartIds (state, payload) {
    state.selectCartIds = Utils.deepCopyObj(payload)
  },
  updateGlobalCartList (state, payload) {
    state.globalCartList = Utils.deepCopyObj(payload)
  },
  updateCurrentAddressManageType (state, payload) {
    state.currentAddressManageType = Utils.deepCopyObj(payload)
  },
  updateFocusProduct (state, payload) {
    state.focusProduct = Utils.deepCopyObj(payload)
  },
  updateNotProductIds (state, payload) {
    state.notProductIds = Utils.deepCopyObj(payload)
  },
  updateFetchIndexCount (state, payload) {
    state.fetchIndexCount = Utils.deepCopyObj(payload)
  },
  updateLastFromRoute (state, payload) {
    state.lastFromRoute = Utils.deepCopyObj(payload)
  }
}

const actions = {
  updateShowTopTab ({commit, state}, payload) {
    commit('updateShowTopTab', payload)
  },
  updateAllItemSelectStatus ({commit, state}, payload) {
    commit('updateAllItemSelectStatus', payload)
  },
  updateFocusAddress ({commit, state}, payload) {
    commit('updateFocusAddress', payload)
  },
  updateDefaultAddress ({commit, state}, payload) {
    commit('updateDefaultAddress', payload)
  },
  updateSelectedAddress ({commit, state}, payload) {
    commit('updateSelectedAddress', payload)
  },
  updateSelectCartIds ({commit, state}, payload) {
    commit('updateSelectCartIds', payload)
  },
  updateGlobalCartList ({commit, state}, payload) {
    commit('updateGlobalCartList', payload)
  },
  updateCurrentAddressManageType ({commit, state}, payload) {
    commit('updateCurrentAddressManageType', payload)
  },
  updateFocusProduct ({commit, state}, payload) {
    commit('updateFocusProduct', payload)
  },
  updateNotProductIds ({commit, state}, payload) {
    commit('updateNotProductIds', payload)
  },
  updateFetchIndexCount ({commit, state}, payload) {
    commit('updateFetchIndexCount', payload)
  },
  updateLastFromRoute ({commit, state}, payload) {
    commit('updateLastFromRoute', payload)
  }
}

const getters = {
  showTopTab: state => state.showTopTab,
  allItemSelect: state => state.allItemSelect,
  focusAddress: state => state.focusAddress,
  defaultAddress: state => state.defaultAddress,
  selectedAddress: state => state.selectedAddress,
  selectCartIds: state => state.selectCartIds,
  globalCartList: state => state.globalCartList,
  currentAddressManageType: state => state.currentAddressManageType,
  focusProduct: state => state.focusProduct,
  notProductIds: state => state.notProductIds,
  fetchIndexCount: state => state.fetchIndexCount,
  lastFromRoute: state => state.lastFromRoute
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
