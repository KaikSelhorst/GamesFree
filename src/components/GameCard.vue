<template>
  <div class="game-card">
    <img :src="game.thumbnail" />
    <div>
      <span>Free</span>
      <a :href="game.url" target="_blank">Play Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: ["game"],
};
</script>
<style scoped>
.game-card > div {
  display: flex;
  text-align: center;
  gap: 40px;
}
:is(span, a) {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 1rem;
  text-transform: uppercase;
}
span {
  width: max-content;
  font-weight: 500;
  color: var(--c5);
  background: var(--c2);
}
a {
  flex: 1;
  font-weight: 600;
  color: var(--c4);
  background: var(--c1-back);
  gap: 8px;
}
a::after {
  --local: red;
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  background: url("../assets/silk.svg") center no-repeat;
  background-size: 14px;
}
img {
  margin-bottom: 12px;
}
</style>
