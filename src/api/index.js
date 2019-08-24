// 包含n个接口请求函数的模块
//每个函数返回的都是promise
import ajax from './ajax'
const BASE='/api'
//获取商品导航
// export  const reqHomeData=()=>ajax({
//     methods:'GET',
//     url:'/home'
// })
export  const reqHomeData =()=> ajax('/home')

//输入关键字搜索请求数据
export const reqSearch=(value)=>ajax({
   url: BASE+'/xhr/search/searchAutoComplete.json?keywordPrefix='+value,
//    url: BASE+'/xhr/search/searchAutoComplete.json',
//     params:{
//         keywordPrefix:value
//     }
})

// 搜索页面默认显示keyword
export const reqHot =()=>ajax({
    url:BASE+'xhr/search/init.json'
    
})

//获取商品列表左侧
export const reqCategorys=()=>ajax('/categorylist')

//实物，推荐数据
export const reqShiWu=(value)=>ajax({
    url:BASE+'/topic/v1/find/getTabs.json'
    // params:{
    //     tab:value
    // }
})

//获取评论
export const reqCommons =()=>ajax({
    url:BASE+'/topic/v1/look/getLookSaleRank.json?topLooks=13170%2C13265%2C12843%2C12852%2C12597%2C12603%2C12487%2C12505%2C12398%2C12432%2C12263%2C11649%2C11601%2C11490%2C11465%2C10957&_=1566438735242'
})

//获取推荐的数据
export const reqTuijian=()=>ajax({
    url:BASE+'/topic/v1/find/recManual.json'
})

//发现页上拉加载
export const reqLoding=(value2,number)=>ajax({
url:BASE+'topic/v1/find/recAuto.json?',
params:{
    page:value2,
    size:number
}

})