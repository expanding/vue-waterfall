const state = {
  display: false
}
const getters = {
  display: state => state.display
}
const mutations = {
  onempty (state, payload) {
    state.display = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations
}
