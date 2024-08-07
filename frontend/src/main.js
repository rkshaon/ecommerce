import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
// import { BootstrapVueNext } from "bootstrap-vue-next";
import store from "@/store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  faEnvelope, faPhone, faMapPin, faHouse, faRightLong, faPlus,
  faMinus, faGauge, faTableCellsLarge, faAddressCard, faArrowRight,
  faList, faEllipsisVertical, faTrash, faFilePen
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
  faArrowRight,
  faList,
  faEllipsisVertical,
  faTrash,
  faFilePen,
);

const app = createApp(App);
// app.use(BootstrapVueNext);
app.use(router);
app.use(store);
app.use(Toast, {
  duration: 1000,
  position: "top-right",
});
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");