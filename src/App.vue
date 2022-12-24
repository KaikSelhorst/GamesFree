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
import "@/assets/css/global.css";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
body {
  background: var(--c7-back);
}
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
  color: var(--c1);
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
  color: var(--c0);
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
