<template>
  <section class="search">
    <form @submit.prevent="onSubmit">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Game"
        v-model="searchQuery"
        @click="onClick"
      />
    </form>
    <ul v-if="isOpen && filterData.length">
      <li v-for="search in filterData" :key="search.id">
        <router-link :to="{ name: 'game', params: { id: search.id } }">
          {{ search.title }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { outSideClick } from "@/helpers.js";
export default {
  name: "TheSearch",
  data() {
    return { searchData: null, searchQuery: null, isOpen: false };
  },
  methods: {
    async getData() {
      const data = api.get("/");
      this.searchData = await data;
    },
    onClick({ currentTarget }) {
      this.isOpen = true;
      outSideClick(
        currentTarget,
        ["touchstart", "click"],
        () => (this.isOpen = false)
      );
    },
    onSubmit() {
      if (this.searchQuery) {
        if (!(this.$route.params.query === this.searchQuery)) {
          this.$router.push({
            name: "search",
            params: {
              query: this.searchQuery,
              results: this.filterData,
            },
          });
        }
      }
    },
  },
  computed: {
    filterData() {
      const data = this.searchData.filter((search) =>
        search.title.toLowerCase().includes(this.searchQuery) ? search : false
      );
      return data;
    },
  },
  watch: {
    $route() {
      this.searchQuery = null;
    },
  },
  created() {
    this.getData();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(from.params.query === to.params.query);
    console.log(next);
  },
};
</script>

<style scoped>
ul {
  position: absolute;
  max-width: 80vh;
  margin-top: 12px;
  background: var(--c3-back);
  color: var(--c1);
  border-radius: 1px;
  width: 100%;
  padding: 4px;
  border: 2px solid var(--c2-border);
  /* Center */
  left: 50%;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 1000;
  transform: translate3d(-50%, 0, 0);
}

li a {
  font-size: 1rem;
  padding: 8px;
  display: block;
}
li:hover {
  background: var(--c7-back);
}

input {
  padding: 6px 4px;
  font-size: 0.875rem;
  color: var(--c1);
  border-radius: 1px;
  font-weight: 500;
  border: 2px solid transparent;
  outline: none;
  width: 280px;
  background: var(--c3-back);
}
input:focus {
  border: 2px solid var(--c2-border);
}
</style>
