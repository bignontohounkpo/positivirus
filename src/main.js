import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

import 'aos/dist/aos.css';

createApp(App).mount('#app')
app.config.globalProperties.$AOS = AOS.init();
