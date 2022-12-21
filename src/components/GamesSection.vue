<template>
  <section class="games-section">
    <ul>
      <li v-for="(game, index) in games" :key="index">
        <GamesCard :game="game" />
      </li>
    </ul>
  </section>
</template>

<script>
import GamesCard from "@/components/GamesCard.vue";
export default {
  name: "GamesSection",
  props: ["games"],
  components: {
    GamesCard,
  },
};
</script>

<style scoped>
.games-section {
  margin-top: 40px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
li {
  margin-bottom: 24px;
}
</style>
