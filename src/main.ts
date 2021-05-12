import { createApp } from 'vue'
import App from './App.vue'

// 如果想要兼容IE等不支持promise 的环境
import 'es6-promise/auto'

import './assets/index.css'
import router from "./router";
import store from './store';
createApp(App)
    .use(router)
    .use(store).mount('#app')
