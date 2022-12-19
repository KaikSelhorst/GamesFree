<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  font-family: "Hanken Grotesk", sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #304455;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  max-width: 1160px;
  margin: 0 auto;
}
.title {
  color: #273849;
}
</style>
