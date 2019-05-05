const state = {
}

const actions = {
  changeUserInfo({commit}, userInfo) {
    commit('CHANGENAME', userInfo);
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