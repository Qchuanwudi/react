/*local数据存储的工具函数封装*/

import store from "store";


function set(key,value) {
store.set(key,value)

}



function get(key,defaultValue) {
  if (defaultValue === undefined) {
    throw new Error('get() 必须指定默认值' )

  }

return store.get(key,defaultValue)


}


function remove(key) {
  
if (key) {
  
  store.remove(key)
}else{

store.clearAll()
    }
}


export default {
set,
get,
remove,
KEYS:{
USER_KEY:'user_key',
TOKEN_KEY:'token_key'
}


}




