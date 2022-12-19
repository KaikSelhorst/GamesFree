<template>
  <div class="query-item">
    <button @click="isOpen = !isOpen">
      {{ queryName | captalize }}: {{ activeQuery | captalize }}
    </button>

    <ul class="querys_list" v-if="isOpen">
      <li v-for="(query, key) in querys" :key="key" @click="test(query)">
        {{ query }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QueryItem",
  props: ["querys", "queryName"],
  data() {
    return {
      isOpen: false,
      activeQuery: `All ${this.queryName}`,
      q: this.$route.query,
    };
  },
  watch: {
    $route() {
      this.q = this.$route.query;
    },
  },
  methods: {
    test(query) {
      let route = { ...this.q };
      route[this.queryName] = query.toLowerCase();
      if (!(this.$route.query[this.queryName] === query.toLowerCase())) {
        this.$router.push({ query: route });
      }
    },
    createQueryRoute(query) {
      return { query: { [this.queryName]: query.toLowerCase() } };
    },
  },
};
</script>

<style scoped></style>
