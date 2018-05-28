import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const module = {
  state: {
    user: {
      token: false,
      name: ''
    },
    fulllayout: true
  },
  getters: {
    doneTodos: state => {
      return state
    }
  },
  mutations: {
    SET_USER (state, payload) {
      if (payload.hasOwnProperty('token')) {
        state.user.token = payload.token
      }

      if (payload.hasOwnProperty('name')) {
        state.user.name = payload.name
      }
    },
    AUTH_LAYOUT (state) {
      state.fulllayout = true
    },
    ADMIN_LAYOUT (state) {
      state.fulllayout = false
    }
  },
  plugins: [createPersistedState()]
}
const store = new Vuex.Store(module)
export default store
