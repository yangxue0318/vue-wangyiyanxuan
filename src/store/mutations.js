//vuex中的mutations模块
import {RECEIVE_HOMEDATA} from './mutations-types'
export default{
    [RECEIVE_HOMEDATA](state,{kingKongList}){
        state.data=kingKongList;
    }
}
