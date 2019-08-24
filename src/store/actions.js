//vuex中的action模块、
//
import {reqHomeData,reqSearch,reqHot,reqCategorys,reqShiWu,reqCommons,reqTuijian,reqLoding} from '../api'
import {
    RECEIVE_HOMEDATA,
    RECEIVE_SEARCH,
    RECEIVE_SEARCHTWO,
    RECEIVE_CATEGORYS,
    RECEIVE_SHIWU,
    RECTIVE_COMMONS,
    RECTIVE_PICTURES,
    RECTIVE_MANYPICTURE
} from './mutations-types'
export default {
    //异步获取商品导航
    async getHomeData({commit}){
        const result=await reqHomeData()
        commit(RECEIVE_HOMEDATA,{kingKongList:result.data})
    },

    ////异步输入关键字搜索请求数据
    async getSearch({commit},number){
        
        const result=await reqSearch(number)
        const initSearch=result.data
        commit(RECEIVE_SEARCH,{initSearch})
    },
    // //实时触发
     async getSearchTwo({commit,value}){
       const result=await reqHot(value)
        commit(RECEIVE_SEARCHTWO,{words:result.data})
    },
    //异步获取商品
    async getCategorys({commit}){
        const result =await reqCategorys()
        commit(RECEIVE_CATEGORYS,{category:result.data})
    },
    //异步获取实物，推荐等数据
    async getShiWu({commit,data}){
        const result=await reqShiWu(data)
        const shiwus=result.data
        commit(RECEIVE_SHIWU,shiwus)
    },
    //异步获取评论
    async getCommons({commit}){
        const result=await reqCommons()
        const common=result.data
        commit(RECTIVE_COMMONS,{common})
    },
    //异步获取实物-推荐
    async getPictures({commit}){
        const result=await reqTuijian()
        const photos=result.data
        commit(RECTIVE_PICTURES,photos)
    },
    //异步实现上拉加载
    async getManyPhotos({commit},{value2,number}){
        const result=await reqLoding(value2,number)
        const manyPhotos=result.data
       
        commit(RECTIVE_MANYPICTURE,{first:manyPhotos})
    }
}