import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state =>  state.count * 3,
  },
  mutations: {
    increment(state, number){
      state.count += number;
    },
    decrement(state, number){
      state.count -= number;
    }
  },
  actions: {
    increment({commit}, number){
      commit('increment', number);
    },
    decrement({commit}, number){
      commit('decrement', number);
    }
  }
})
