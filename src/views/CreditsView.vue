<template>
  <transition mode="out-in" name="v2">
    <!-- v-if for tranform section in reative -->
    <section class="credits" v-if="active">
      <h1>Credits</h1>
      <h2>API used</h2>
      <p>Create using the FreeToGame API.</p>
      <h2>About a FreeToGameApi</h2>
      <p>
        Access programmatically the best free-to-play games and free MMO games!
        The Free-To-Play Games Database API (Aka FreeToGame API) is available
        for everyone to use without any restrictions. Please note our API is
        free to use as long as you attribute FreeToGame.com as the source of the
        data. We hope to improve the API over time.
      </p>
      <h2>Koorst - Developers</h2>
      <p>
        <a href="https://github.com/KaikSelhorst" target="_blank"
          >Kaik Selhorst</a
        >
      </p>

      <a href="https://www.freetogame.com/api-doc" target="_blank" class="btn"
        >About API</a
      >
      <a href="https://koorst.vercel.app/" target="_blank" class="btn"
        >About Koorst</a
      >
    </section>
  </transition>
</template>

<script>
export default {
  name: "CreditsView",
  data() {
    return { active: false };
  },
  mounted() {
    this.active = true;
  },
};
</script>

<style scoped>
.credits {
  margin: 40px 0px;
}
h1 {
  margin-bottom: 24px;
  font-size: 2rem;
  color: var(--c0);
}
h2 {
  font-size: 1.255rem;
  margin: 8px 0 4px;
}
p {
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.5rem;
}
p > a {
  font-weight: 500;
  color: var(--c1);
  text-decoration: underline;
}
.btn {
  padding: 4px 8px;
  display: inline-block;
  margin: 40px 8px 4px 0px;
  border-radius: 2px;
  font-size: 1rem;
  background: var(--c0);
  transition: 0.3s;
  color: var(--c4);
}
.btn:hover {
  color: var(--c7);
}
</style>
