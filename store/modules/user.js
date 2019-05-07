const state = {
  userInfo: uni.getStorageSync('user-info') || {}
}

const actions = {
  changeUserInfo({commit}, userInfo) {
    commit('CHANGEUSERINFO', userInfo);
  }
}

const mutations = {
  CHANGEUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  }
}

export default{
  namespaced: true,
  state,
  actions,
  mutations
}