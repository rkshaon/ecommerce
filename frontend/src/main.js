import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

/* import specific icons */
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons'
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faPhone, faMapPin, faTwitter)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");