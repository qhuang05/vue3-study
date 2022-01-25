import { createStore } from 'vuex'
import user from './user'
const store = createStore({
  state: {
    count: 0
  },
  getters: {
    filterCount(state){
      return state.count>5 ? 5 : state.count;
    }
  },
  mutations: {
    increase(state, args){
      state.count += args
    }
  },
  actions: {
    asyncIncrease({commit}, args){  
      setTimeout(()=>{
        commit('increase', args)
      }, 1000)
    }
  },
  modules: {
    user
  }
})
export default store