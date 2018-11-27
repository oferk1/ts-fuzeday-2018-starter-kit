import Vue from 'vue'
import Vuex from 'vuex'
import products from "../tests/data";


Vue.use(Vuex);

// hint: try to separate your state into modules.
export default new Vuex.Store({
    state: {products: []},
    mutations: {
        fetchAction(state, payload) {
            state.products = payload;
        },
        addAction(state, product) {
          state.products.push(product)
          localStorage.setItem('products', JSON.stringify(state.products))
        }
    },
    actions: {
        async fetchAction({commit}) {
            if(!localStorage.getItem('products')) {
                localStorage.setItem('products', JSON.stringify(products))
            }
            commit('fetchAction', JSON.parse(localStorage.getItem('products') as string));
        },
        addAction({commit}, payload) {
          commit('addAction', payload);
          // commit('fetchAction', payload.product);
        }
    },
    getters: {
        products: state => state.products
    }
});
