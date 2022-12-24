<template>
  <header class="header">
    <router-link :to="{ name: 'home' }" class="logo">Games Free</router-link>
    <router-link :to="{ name: 'credits' }">Credits</router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
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
