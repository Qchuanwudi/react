
/*主要是操作用户登录信息和行动*/
/* 操作登录用户信息数据的action creator*/
import {reqLogin} from "../../api";

import { message } from "antd";
import { SAVE_USER_TOKEN, REMOVE_USER_TOKEN } from "../action-types";
import storage from "../../utils/storage";
/*
保存user和token的同步action creator
*/
const saveUserToken = (user,token)=>({
  type:SAVE_USER_TOKEN ,data:{user,token}
})
export const removeUserToken =()=>{
// localStorage.removeItem('user_key')
// localStorage.removeItem('token_key')
storage.remove(storage.KEYS.USER_KEY)
storage.remove(storage.KEYS.TOKEN_KEY)
return {type:REMOVE_USER_TOKEN}
}






/*用于登录请求的异步的action creator*/
export function loginAsync(username,password) {
  //返回有个异步action函数
  return async dispatch =>{
//执行异步请求
//根据结果分发同步action
const result = await reqLogin({username,password})
if (result.status===0) {
 const{user,token} = result.data

 storage.set(storage.KEYS.USER_KEY,user)
 storage.set(storage.KEYS.TOKEN_KEY,token)


//  localStorage.setItem('user_key',JSON.stringify(user))
//  localStorage.setItem('token_key',token)
//分发保存user信息和tonke的同步action
dispatch(saveUserToken(user,token))
/*分别给reducers:user.js和action-type.js*/

}else{
//登录失败
message.error(result.msg)

}



  }

}