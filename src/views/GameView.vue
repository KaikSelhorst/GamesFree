<template>
  <section class="game">{{ game }}</section>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "GameView",
  props: ["id"],
  data() {
    return {
      game: null,
    };
  },
  methods: {
    async setGame() {
      this.game = await api.getGame(this.id);
    },
  },
  created() {
    this.setGame();
  },
};
</script>

<style></style>
