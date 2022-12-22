<template>
  <div class="home">
    <QuerySection />
    <transition mode="out-in">
      <GamesSection :games="games" v-if="games" />
      <TheLoading v-else />
    </transition>
  </div>
</template>

<script>
import QuerySection from "@/components/QuerySection.vue";
import GamesSection from "@/components/GamesSection.vue";

import { api } from "@/services.js";
export default {
  name: "HomeView",
  components: { QuerySection, GamesSection },
  data() {
    return {
      games: null,
    };
  },
  methods: {
    async setGames() {
      this.games = null;
      const url = this.$route.fullPath;
      this.games = await api.get(url);
    },
  },
  watch: {
    $route() {
      this.setGames();
    },
  },
  created() {
    this.setGames();
  },
};
</script>
