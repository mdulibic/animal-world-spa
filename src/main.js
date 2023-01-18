import { createApp } from "vue";
import store from "./store";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import EncyclopediaItem from "./components/EncyclopediaItem.vue";
import SmallCard from "./components/SmallCard.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.component("encyclopedia-item", EncyclopediaItem);
app.component("small-card", SmallCard);

app.mount("#app");
