import Vue from 'vue';
import App from './App';
import store from './store';

import IconFont from './compoments/Icon/index.vue';

import './icons/iconfont.css';

Vue.prototype.$store = store;
Vue.config.productionTip = false;

Vue.component('icon-font', IconFont);

App.mpType = 'app';

const app = new Vue({
    store,
    ...App
})
app.$mount()
