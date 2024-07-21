import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import system from './modules/system'

// default router permission control
// 默认路由模式为静态路由 (router.config.js)
import permission from './modules/static-router'

// dynamic router permission control (Experimental)
// 动态路由模式（api请求后端生成）
// import permission from './modules/async-router'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    system
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
