<template>
  <div v-if="platform === 'PC (Windows)'" class="pc" :title="platform">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
      />
    </svg>
  </div>
  <div v-else :title="platform">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-globe"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "GamesCardPlatform",
  props: ["platform"],
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  width: 16px;
  aspect-ratio: 1/1;
}
.pc path {
  fill: var(--c1-back);
}
svg {
  scale: 1.1;
}
svg :is(circle, line, path) {
  color: var(--c1-back);
}
</style>
