export default {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {},
  mutations: {
    setToken(state, token){
      state.token = token
    }
  },
  actions: {
    getRoles({commit}, args){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let roles = ['admin', 'test']
          commit('SET_TOKEN', roles)
          resolve(roles)
        }, 1000);
      })
    }
  }
}