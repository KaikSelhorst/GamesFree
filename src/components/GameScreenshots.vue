<template>
  <section class="game-screenshots">
    <ul>
      <li
        v-for="screenshot in screenshots"
        :key="screenshot.id"
        @click="onClick(screenshot)"
      >
        <img :src="screenshot.image" :alt="screenshot.id" />
      </li>
    </ul>
    <div class="modal-screenshot" v-if="screenshotActive">
      <div ref="modalScreenshotImage">
        <img :src="screenshotActive.image" />
      </div>
      <button @click="screenshotActive = null">X</button>
    </div>
  </section>
</template>

<script>
import { outSideClick } from "@/helpers.js";

export default {
  name: "GameScreenshots",
  props: ["screenshots"],
  data() {
    return { screenshotActive: null };
  },
  methods: {
    onClick(screenshot) {
      this.screenshotActive = screenshot;
      setTimeout(() => {
        outSideClick(
          this.$refs.modalScreenshotImage,
          ["click", "touchstart"],
          () => (this.screenshotActive = null)
        );
      });
    },
  },
};
</script>

<style scoped>
ul {
  margin: 24px 0;
  gap: 12px;
  display: flex;
  overflow-x: auto;
}
li {
  cursor: pointer;
  overflow: hidden;
  border-radius: 2px;
}

.modal-screenshot {
  z-index: 100;
  background: var(--c6);
  inset: 0;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-screenshot button {
  position: absolute;
  cursor: pointer;
  right: 12px;
  top: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: var(--c3-back);
  color: var(--c0);
  font-weight: 600;
  font-size: 1.125rem;
  width: 40px;
  height: 40px;
  border: none;
}

.modal-screenshot > div {
  overflow: hidden;
  animation: fade 0.3s forwards;
  border-radius: 2px;

  max-width: 80%;
}

@keyframes fade {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    scale: 1;
    opacity: 1;
  }
}
</style>
