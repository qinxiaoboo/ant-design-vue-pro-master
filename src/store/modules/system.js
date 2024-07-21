import storage from 'store'
import { getSetting } from '@/api/system'

const system = {
  state: {
    dictinfo: []
  },

  mutations: {
    SET_INFO: (state, info) => {
      state.dictinfo = info
    }
  },

  actions: {

    // 获取用户信息
    GetSetting ({ commit },parameter) {
      return new Promise((resolve, reject) => {
        // 请求后端获取用户信息 /api/user/info
        getSetting(parameter).then(response => {
          console.log('response: ',response)
          commit('SET_INFO', response.data)
        }).catch(error => {
          reject(error)
        })
      })
    },


  }
}

export default system
