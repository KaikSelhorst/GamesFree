<template>
  <ul :class="[columns === 2 ? 'col_2' : 'col_3']">
    <li v-for="(information, key) in informations" :key="key">
      <span>{{ key.replace("_", " ") | captalize }}</span>
      <p>{{ information }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GameInformations",
  props: ["informations", "columns"],
};
</script>

<style scoped>
ul {
  display: grid;
  gap: 24px;
  margin-top: 24px;
}
ul.col_3 {
  --columns: 3;
  grid-template-columns: repeat(var(--columns), 1fr);
}
ul.col_2 {
  --columns: 2;
  grid-template-columns: repeat(var(--columns), 1fr);
}
@media screen and (max-width: 900px) {
  ul.col_3 {
    --columns: 2;
  }
}
span {
  margin-bottom: 2px;
  display: block;
  font-weight: 500;
  font-size: 1.025rem;
  color: #273849;
}
</style>
