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

<style scoped></style>
