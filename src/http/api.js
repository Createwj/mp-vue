import fly from './config'
import qs from 'qs'  // 序列化参数

import config from '../config'
const host = config.host;
const appKey = config.appKey;
const appid = config.appid;

// 封装fly  使用中间件 进行数据交互
export const get = (params) => {
    return fly.get(`${host}${params.url}`,qs.stringify(params.data))
};

export const post = (params) => {
    return fly.post(`${host}${params.url}`,qs.stringify(params.data))
};

// export function getInter(){
//   return fly.get('/community/h5/discussions/1jeeidl/detail').then((res)=>{
//     return res
//   })
// }
