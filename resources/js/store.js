import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        apiURL: 'http://laravelvue/api',
        serverPath: 'http://laravelvue/'
    },
    mutations: {},
    actions: {}
});