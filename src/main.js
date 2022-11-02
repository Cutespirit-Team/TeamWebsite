import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import VueUseWebp from 'vue-use-webp'

/* import font awesome icon component */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

const app = createApp(App)
app.use(router)
app.use(VueUseWebp)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false
app.mount('#app');
