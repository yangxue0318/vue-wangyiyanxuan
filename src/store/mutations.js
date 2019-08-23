//vuex中的mutations模块
import {RECEIVE_HOMEDATA,
    RECEIVE_SEARCH,
    RECEIVE_SEARCHTWO,
    RECEIVE_CATEGORYS,
    RECEIVE_SHIWU,
    RECTIVE_COMMONS,
    RECTIVE_PICTURES
} from './mutations-types'
export default{
    [RECEIVE_HOMEDATA](state,{kingKongList}){
        state.data=kingKongList;
    },
    //搜索关键字
    [RECEIVE_SEARCH](state,{initSearch}){
        state.value=initSearch;
    },
    [RECEIVE_SEARCHTWO](state,{words}){
        state.shops=words;
    },
    [RECEIVE_CATEGORYS](state,{category}){
        state.categorys=category
    },
    //实物
    [RECEIVE_SHIWU](state,shiwus){
        state.shiwu=shiwus
    },
    //评论
    [RECTIVE_COMMONS](state,{common}){
        state.common=common
    },

    //图片
    [RECTIVE_PICTURES](state,photos){
        state.picture=photos
    }
}
