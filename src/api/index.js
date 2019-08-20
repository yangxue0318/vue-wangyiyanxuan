// 包含n个接口请求函数的模块
//每个函数返回的都是promise
import ajax from 'axios'

//获取商品导航
// export  const reqHomeData=()=>ajax({
//     methods:'GET',
//     url:'/home'
// })
export  const reqHomeData =()=> ajax('/home')