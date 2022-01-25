import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'element-plus/dist/index.css'
const app = createApp(App)
// 自定义指令
import autofocus from './directives/autofocus'
app.directive('autofocus', autofocus)
app.use(store)
app.mount('#app')
