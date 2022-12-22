<template>
  <div class="wrapper">
    <div class="loading">
      <svg
        width="56"
        height="24"
        viewBox="0 0 56 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g :class="[step === 0 ? 'active' : '']">
          <path
            d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM10 13.5H12V10.5H10V13.5Z"
            fill="#FF2E2E"
          />
        </g>
        <g :class="[step === 1 ? 'active' : '']">
          <path
            d="M27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807611 15.9792 0.807611 15.3934 1.3934C14.8076 1.97919 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM24 13.5H26V10.5H24V13.5Z"
            fill="#FF2E2E"
          />
        </g>
        <g :class="[step === 2 ? 'active' : '']">
          <path
            d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807611 29.9792 0.807611 29.3934 1.3934C28.8076 1.97919 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM38 13.5H40V10.5H38V13.5Z"
            fill="#FF2E2E"
          />
        </g>
        <g :class="[step === 3 ? 'active' : '']">
          <path
            d="M55.0607 13.0607C55.6464 12.4749 55.6464 11.5251 55.0607 10.9393L45.5147 1.3934C44.9289 0.807611 43.9792 0.807611 43.3934 1.3934C42.8076 1.97919 42.8076 2.92893 43.3934 3.51472L51.8787 12L43.3934 20.4853C42.8076 21.0711 42.8076 22.0208 43.3934 22.6066C43.9792 23.1924 44.9289 23.1924 45.5147 22.6066L55.0607 13.0607ZM52 13.5H54V10.5H52V13.5Z"
            fill="#FF2E2E"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheLoading",
  data() {
    return {
      step: 0,
      interval: null,
    };
  },
  created() {
    this.interval = setInterval(() => {
      if (this.step < 3) this.step++;
      else this.step = 0;
    }, 400);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
<style scoped>
.wrapper {
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 1000;
}
.loading {
  margin: auto;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
g path {
  fill: #f9f9f9;
  transition: 0.3s all;
}
g.active path {
  fill: #273849;
}
</style>
