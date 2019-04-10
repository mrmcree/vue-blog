import * as types from './mutation-types'
export const changeCate=({commit,state},{value})=>{
    commit(types.CHANGE_CATE,value)
}