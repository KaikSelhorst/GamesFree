<template>
  <header class="header">
    <router-link :to="{ name: 'home' }" class="logo">Games Free</router-link>
    <TheSearch />
    <router-link :to="{ name: 'credits' }">Credits</router-link>
  </header>
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
export default {
  name: "TheHeader",
  components: {
    TheSearch,
  },
};
</script>

<style scoped>
.header {
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header > a {
  color: var(--c0);
}
.logo {
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
