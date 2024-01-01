import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import categoryStore from '@/store/category';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import {
  faEnvelope, faPhone, faMapPin, faHouse, faRightLong, faPlus,
  faMinus, faGauge, faTableCellsLarge, faAddressCard, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,faTwitter,faYoutube,faProductHunt
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faPhone,
  faMapPin,
  faHouse,
  faRightLong,
  faFacebook,
  faTwitter,
  faYoutube,
  faPlus,
  faMinus,
  faGauge,
  faTableCellsLarge,
  faProductHunt,
  faAddressCard,
  faArrowRight
);

const app = createApp(App);

app.store = categoryStore;
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");

// router.push({
//   name: "category",
//   params: { slug: "category-slug" },
// });