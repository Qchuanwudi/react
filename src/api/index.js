/*包含n个借口请求函数
函数的返回值是promise
*/
/*用于管理登录用户信息*/

import ajax from "./ajax";
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

ajax('/manage/user/list')