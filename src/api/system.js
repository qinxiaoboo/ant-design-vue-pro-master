import request from '@/utils/request'

const userApi = {
  Setting: '/system/setting/get',

}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function getSetting (parameter) {
  return request({
    url: userApi.Setting,
    method: 'get',
    params: parameter
  })
}
