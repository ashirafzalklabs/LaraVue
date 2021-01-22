import Vue from 'vue';
import App from './components/App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import BootstrapVue from 'bootstrap/dist/css/bootstrap.css';
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    render: h => h(App)
});