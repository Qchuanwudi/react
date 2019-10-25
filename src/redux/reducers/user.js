/*
管理登录用户数据reducer

*/
import {SAVE_USER_TOKEN,REMOVE_USER_TOKEN} from "../action-types";
import storage from "../../utils/storage";
// const _user=JSON.parse(localStorage.getItem('user_key')  || '{}')
//const _user=1
const _user= storage.get(storage.KEYS.USER_KEY, {})
const _token = storage.get(storage.KEYS.TOKEN_KEY, '')
const initUser ={
user:_user,
token:_token,

hasLogin:_token && _user._id//是否已经登录
}
export default function user(state=initUser,action) {
  
switch (action.type) {
 case SAVE_USER_TOKEN:
   const {user,token}=action.data//如果有SAVE_USER_TOKEN则登录成功
   return{
user,
token,
hasLogin:true
   }
   case REMOVE_USER_TOKEN:
 
   return{
user:{},
token:'',
hasLogin:false
   }
  default:
    return state
}


}