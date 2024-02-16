import { createApp } from 'vue'
import Toast from "vue-toastification"

// import stylings
import './assets/style.css'
import "vue-toastification/dist/index.css"
import App from './App.vue'

const app = createApp(App)

const options = {}

app.use(Toast)
app.mount('#app')