<template>
  <div class="card-game">
    <router-link :to="{ name: 'game', params: { id: game.id } }">
      <div class="card_img">
        <img :src="game.thumbnail" :alt="game.title" />
      </div>
      <div class="card_text">
        <h2>{{ game.title }}</h2>
        <p>{{ game.short_description }}</p>
        <span class="genre">{{ game.genre }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "GamesCard",
  props: ["game"],
};
</script>

<style scoped>
.card-game {
  border-radius: 2px;
  transition: all 0.3s;
  max-width: 260px;
  overflow: hidden;
}
.card-game:hover {
  transform: scale(1.05);
}
:is(p, h2) {
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  display: block;
  overflow: hidden;
}

h2 {
  font-size: 1.125rem;
}
span {
  margin: 4px 0;
  color: rgba(255, 255, 255, 0.85);
  background: #304455;
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.825rem;
  font-weight: 500;
  border-radius: 2px;
}
.card_text {
  background: #f9f9f9;
  padding: 12px;
}
</style>
