//vuex中的action模块、
import {reqHomeData} from '../api'
import {RECEIVE_HOMEDATA} from './mutations-types'
export default {
    //异步获取商品导航
    async getHomeData({commit,state}){
        const result=await reqHomeData()
        commit(RECEIVE_HOMEDATA,{kingKongList:result.data})
    }
}