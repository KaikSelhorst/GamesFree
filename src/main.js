import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("captalize", (string) => {
  const captalize = (string) => string[0].toUpperCase() + string.slice(1);

  const ArrayString = string.split(" ");
  const ArrayCaptalize = ArrayString.map(captalize);
  return ArrayCaptalize.join(" ");
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
