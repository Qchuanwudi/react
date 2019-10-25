/* 
向外暴露一个总的reducer函数
*/
import {combineReducers} from 'redux'
import user from "./user";
import xxx from "./xxx";
export default combineReducers({
user,
xxx


})