<template>
  <section class="querys">
    <QueryItem :queryName="platform.title" :querys="platform.querys" />
    <QueryItem :queryName="category.title" :querys="category.querys" />
    <QueryItem :queryName="sort_by.title" :querys="sort_by.querys" />
  </section>
</template>

<script>
import { platform, category, sort_by } from "@/queryNames.js";
import QueryItem from "@/components/QueryItem.vue";

export default {
  data() {
    return {
      platform,
      category,
      sort_by,
    };
  },
  components: {
    QueryItem,
  },
};
</script>
<style scoped></style>
