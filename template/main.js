import '@/common/styles/app.less'
import '@/common/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Render from './app'

const pinia = createPinia()
//vue实例化
const vm = createApp(Render)

vm.use(pinia)

vm.mount('#app')

App.vm = vm
