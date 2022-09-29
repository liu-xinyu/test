import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/request'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
const app = createApp(App);   //建立一个vue3app
app.use(store).use(router).use(ElementPlus).mount('#app');            //将这个vue3app全局挂载到#app元素上
app.config.globalProperties.$axios=axios;  //配置axios的全局引用
