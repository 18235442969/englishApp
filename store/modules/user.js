const state = {
  name: 'hzy'
}

const actions = {
  changeName({commit}) {
    commit('CHANGENAME')
  }
}


const mutations = {
  CHANGENAME(state) {
    state.name = 'hou'
  }
}

export default{
  namespaced: true,
  state,
  actions,
  mutations
}