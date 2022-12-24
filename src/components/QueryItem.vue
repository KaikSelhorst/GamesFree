<template>
  <div class="query-item">
    <button @click="openMenu">
      <span class="title">{{ queryName | captalize }}:</span>
      <span :class="['active-query', { active: isOpen }]">
        {{ activeQuery | captalize }}</span
      >
    </button>

    <ul class="querys-list" v-if="isOpen">
      <li v-for="(query, key) in querys" :key="key" @click="onClick(query)">
        {{ query }}
      </li>
    </ul>
  </div>
</template>

<script>
import { outSideClick } from "@/helpers.js";
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
    openMenu({ currentTarget }) {
      outSideClick(
        currentTarget,
        ["touchstart", "click"],
        () => (this.isOpen = false)
      );
      this.isOpen = !this.isOpen;
    },
    onClick(query) {
      let route = { ...this.q };
      this.activeQuery = query;
      const fQueryName = this.queryName;
      route[fQueryName] = query.toLowerCase();
      if (!(this.$route.query[fQueryName] === query.toLowerCase())) {
        this.$router.push({ query: route });
      }
    },
  },
};
</script>

<style scoped>
.query-item {
  padding: 8px;
  position: relative;
}

button {
  background: none;
  font-size: 1rem;
  gap: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
}

.active-query::after {
  margin-left: 8px;
  content: "";
  background: url("../assets/arrow.svg") center top no-repeat;
  background-size: 12px;
  position: relative;
  display: inline-block;
  color: red;
  transform: rotate(180deg);
  top: 1px;
  height: 12px;
  transition: all 0.4s;
  width: 12px;
}
.active-query.active::after {
  transform: rotate(0);
}

.querys-list {
  margin-top: 8px;
  max-width: 180px;
  width: 100%;
  position: absolute;
  padding: 4px 0;
  background: var(--c3-back);
  border-radius: 2px;
  z-index: 100;
  max-height: 300px;
  overflow: auto;
  display: grid;
}
.querys-list li {
  display: block;
  padding: 8px 12px;
  cursor: pointer;
}
.querys-list li:hover {
  background: var(--c7-back);
}
</style>
