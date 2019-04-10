import * as types from './mutation-types'
const mutations={
    [types.CHANGE_CATE](state,value){
        state.categories=value
    }
}
export default mutations