/*
进行axios的二次封装（对ajax请求）
*/
import axios from "axios"
import qs from "qs";
import {message} from "antd";
import NProgress from "nprogress";//进度条
import 'nprogress/nprogress.css';
import store from "../redux/store";
import { removeUserToken } from "../redux/action-creators/user";
import history from "../history";


//创建一个人instance
const instance = axios.create({
timeout:100000//请求超时时间

})
/* 进度条*/

/* 进度条*/



//请求拦截器
instance.interceptors.request.use(config=>{


NProgress.start()


const {data} = config
if (data instanceof Object) {//只要是对象就要转换成urlencode格式
  qs.stringify(data)
config.data = qs.stringify(data)
}

//请求token
const token = store.getState().user.token
if (token) {
  config.headers['Authorization'] = 'atguigu_' +token
}



return config
})



//响应拦截器
instance.interceptors.response.use(
response=>{
console.log('request interceptor  onResolved')

/*结束进度条*/
NProgress.done()
/*结束进度条*/






const result = response.data



/*---------如果在ajax中有判断则外部的login也会判断，可以将此判断直接返回一个result----------------------- */
//if (result.status === 0) {
  //判断是否成功，如果成功择返回data数据
  //return result.data || {}
//}else{

  //return Promise.reject(result.msg || '？？')

//}
/*-------------------------------- */
return result
},
error=>{
  
  
//请求出错
const {status,data:{msg}={}} = error.response
if (status===401) {
  if (history.location.pathname !=='./login') {
    message.error(msg)
    store.dispatch(removeUserToken())
  }



}else if (status===404) {
  
message.error('请求资源不存在')

}else{
  message.error('请求出错' + error.message);
  
}






message.error('请求出错：' + error.message)


//中断请求处理不在将错误，传给外部处理
  return new Promise(()=>{})
}
  )








  
export default instance