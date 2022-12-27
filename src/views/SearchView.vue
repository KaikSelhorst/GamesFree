<template>
  <transition name="v2" mode="out-in">
    <section class="search" v-if="!!this.dataResults.length">
      <span>
        The search results with the term<strong> {{ query }}</strong> were
        these:</span
      >
      <GamesSection :games="dataResults" />
    </section>
    <p v-else>No results found!</p>
  </transition>
</template>

<script>
import { api } from "@/services.js";
import GamesSection from "@/components/GamesSection.vue";
export default {
  name: "SearchView",
  props: ["query", "results"],
  data() {
    return { dataResults: [] };
  },
  components: {
    GamesSection,
  },
  methods: {
    async getResults() {
      const data = await api.get();
      this.dataResults = data.filter((search) =>
        search.title.toLowerCase().includes(this.query) ? search : false
      );
    },
  },
  watch: {
    results() {
      this.dataResults = this.results;
    },
  },
  mounted() {
    if (this.results === undefined) {
      this.getResults();
    } else {
      this.dataResults = this.results;
    }
  },
};
</script>

<style scoped></style>
