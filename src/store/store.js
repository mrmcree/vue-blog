/**
 * Created with
 * User:
 * Date: 2017-12-28
 * Time: 11:58
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// console.log(mutations,actions)
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
  })
  