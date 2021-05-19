import { createApp } from 'vue'
import App from './App.vue'

// 如果想要兼容IE等不支持promise 的环境
// import 'es6-promise/auto'

import router from "./router";
import store from './store';
// tailwindcss 的部分配置
import './assets/index.css'
// 响应式插件
import 'amfe-flexible/index.js'

import NutUI, {Toast} from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

const app = createApp(App);
    app.config.globalProperties.Toast = Toast;
    app.use(router)
    .use(store).use(NutUI).mount('#app')

