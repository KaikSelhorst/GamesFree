<template>
  <div class="card-game">
    <router-link :to="{ name: 'game', params: { id: game.id } }">
      <div class="card_img">
        <img :src="game.thumbnail" :alt="game.title" />
      </div>
      <div class="card_text">
        <h2>{{ game.title }}</h2>
        <p>{{ game.short_description }}</p>
        <div class="platform-genre">
          <span class="genre">{{ game.genre }}</span>
          <GamesCardPlatform :platform="game.platform" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import GamesCardPlatform from "@/components/GamesCardPlatform.vue";
export default {
  name: "GamesCard",
  props: ["game"],
  components: {
    GamesCardPlatform,
  },
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
  color: var(--c4);
  background: var(--c1-back);
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.825rem;
  font-weight: 500;
  border-radius: 2px;
}
.card_text {
  background: var(--c3-back);
  padding: 16px 12px 12px 12px;
}
.platform-genre {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.platform-genre img {
  max-width: 18px;
}
</style>
