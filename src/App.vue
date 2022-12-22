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
  padding: 0px 12px;
  margin: 0 auto;
}
.title {
  color: #273849;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(-30px, 0, 0);
}
.v-leave-to {
  transform: translate3d(30px, 0, 0);
}
.v-enter-active,
.v-leave-active {
  transition: 0.3s all;
}
</style>
