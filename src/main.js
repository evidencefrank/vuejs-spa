import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPhone, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPhone, faEnvelope, faFax)

/* add font awesome icon component */

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')