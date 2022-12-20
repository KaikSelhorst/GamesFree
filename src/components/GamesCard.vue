<template>
  <router-link :to="{ name: 'game', params: { id: game.id } }">{{
    game.title
  }}</router-link>
</template>

<script>
export default {
  name: "GamesCard",
  props: ["game"],
};
</script>

<style scoped></style>
