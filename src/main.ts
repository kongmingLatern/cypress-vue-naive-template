import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'

const app = createApp(App)
app.use(createPinia())
app.use(naive).mount('#app')
