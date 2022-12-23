<template>
  <div id="app" class="container">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#app > main {
  flex: 1;
}
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
/* Variant Animation */
.v2-enter {
  opacity: 0;
  transform: translate3d(-30px, 0, 0);
}
.v2-enter-active {
  transition: all 0.3s;
}
</style>
