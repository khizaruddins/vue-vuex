
import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

export default createStore({
  state(){
    return {
      counter: 0
    }
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions
});
