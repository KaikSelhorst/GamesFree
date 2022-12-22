<template>
  <header class="header">
    <router-link to="/" class="logo title">Games Free</router-link>
    <router-link to="/credits">Credits</router-link>
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
.logo {
  font-weight: 500;
  font-size: 1.2rem;
}
</style>
