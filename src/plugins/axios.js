import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://localhost:9999'   /*这里的地址就是刚刚启起来的服务器地址  */

/*请求拦截*/
axios.interceptors.request.use(
  config => {
    if (config.meth === 'post' && !(config.data instanceof FormData)) {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      config.data = qs.stringify(config.data, { arrayFormat: 'repeat' }) 
    }
    return config
  }, error => {
    return Promise.reject(error)
  }
)
/* 响应拦截 */
axios.interceptors.response.use(
  res => {
   /*可在这里根据返回的状态码做一些拦截操作*/
    return res
  }, err => {
    return Promise.resolve(err)
  }
)
export default axios  /*记得导出*/
