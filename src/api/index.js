/*包含n个借口请求函数
函数的返回值是promise
*/
/*用于管理登录用户信息*/

import ajax from "./ajax";
import { message } from "antd";
import jsonp from "jsonp";
/*登录*/
export const reqLogin = ({username,password}) =>ajax({
url:'/login',
method: 'POST',
data: {username,password}
})



export const reqUsers = () =>ajax({
url:'/manage/user/list',
method:'GET',

})



export const reqWeather = (city) =>{
return new Promise((resolve,reject) =>{
const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
jsonp(url,{},(err,data) =>{

if (!err && data.status ==='success') {
  const {dayPictureUrl,weather} = data.results[0].weather_data[0]
  resolve({dayPictureUrl,weather})
}else{

message.error('获取天气失败')
return new Promise(()=>{})
    }
})
})
}

/*获取所有分类的列表
*/
export const reqCategorys = () => ajax('/manage/category/list')



export const reqAddCategory = (categoryName) => ajax.post('/manage/category/add', {categoryName})

/* 
更新分类
*/
export const reqUpdateCategory = ({categoryId, categoryName}) => ajax({
  url: '/manage/category/update',
  method: 'POST',
  data: {categoryId, categoryName}
})
