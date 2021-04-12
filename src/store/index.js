import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        CartList: [],
        isCheck: true
    },
    mutations: {
        addOldCart(state, payload) {
            payload.count++;
            payload.isCheck = state.isCheck;
        },
        addNewCart(state, payload) {
            payload.count = 1;
            payload.isCheck = state.isCheck;
            state.CartList.push(payload);
        },
    },
    actions: {
        addCart(context, payload) {
            let oldProduct = context.state.CartList.find(item => item.iid == payload.iid);
            if (oldProduct) {
                context.commit("addOldCart", oldProduct);
            } else {
                context.commit("addNewCart", payload);
            }
        },

    }
})
export default store