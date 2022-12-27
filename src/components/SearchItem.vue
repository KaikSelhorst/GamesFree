<template>
  <router-link :to="{ name: 'game', params: { id: search.id } }">
    {{ search.title }}
    <img :src="search.thumbnail" :alt="search.title" />
  </router-link>
</template>

<script>
export default {
  name: "SearchItem",
  props: ["search"],
};
</script>

<style scoped>
a {
  font-size: 1rem;
  padding: 8px;
  display: flex;
  justify-content: space-between;
}
a:hover {
  background: var(--c7-back);
}
img {
  max-height: 24px;
  align-items: center;
}
</style>
