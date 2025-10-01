import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import routes from "./Router/routes";
import { createPinia } from "pinia";

const app = createApp(App);
const piniaApp = createPinia();

app.use(piniaApp);
app.use(routes);
app.mount("#app");
