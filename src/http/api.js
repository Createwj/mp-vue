import fly from './config'
import qs from 'qs'

import config from '../config'
const host = config.host;
const appKey = config.appKey;
const appid = config.appid;


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
