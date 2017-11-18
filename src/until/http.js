// import axios from 'axios'
// import { baseURL } from ''
// axios.defaults.baseURL = 'http://www.hellomoho.com/thrumapp';
// axios.defaults.timeout = 1000;
// axios.interceptors.request.use(
//     config => {
//         config.data =JSON.stringify(config.data)
//         config.headers = {
//             'content-Type' : 'appliction/x-www-form-urlencoded'
//         }
//         // if(token){
//         //     config.params = {'token' : token}
//         // }
//         return config;
//     },
//     err => {
//         return Promise.reject(err)
//     }
// )

// export function get (url,params = {}) {
//     return new Promise(
//         (resolve,reject) => {
//             axios.get(url,{
//                 params : params
//             })
//             .then(response => {
//                 resolve(response.data);
//             }).catch(err => {
//                 reject(err)
//             })
//         }
//     )
// }

// export function post(url,data ={}){
//     return new Promise(
//         (resolve,reject) => {
//             axios.post(url,data).then(response => {
//                 resolve(response.data);
//             }).catch(err => {
//                 reject(err)
//             })
//         }
//     )
// }
import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

// //返回状态判断
// axios.interceptors.response.use((res) =>{
//     if(!res.data.success){
//         // _.toast(res.data.msg);
//         return Promise.reject(res);
//     }
//     return res;
// }, (error) => {
//     return Promise.reject(error);
// });