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
<style scoped>
.querys {
  --gap: 60px;
  --columns: 3;
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(var(--columns), 220px);
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 20px;
  gap: var(--gap);
}
@media screen and (max-width: 820px) {
  .querys {
    --gap: 30px;
  }
}
@media screen and (max-width: 720px) {
  .querys {
    --gap: 30px;
    --columns: 2;
  }
}
@media screen and (max-width: 460px) {
  .querys {
    --gap: 20px;
    --columns: 1;
  }
}
</style>
