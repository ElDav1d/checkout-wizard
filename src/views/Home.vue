<template>
  <transition name="slide">
    <main>
      <h1>This the home page</h1>
      <router-link :to="nextPath">Checkout</router-link>
    </main>
  </transition>
</template>

<script>
import config from "../config.js";

export default {
  data() {
    return {
      currentPath: config.HOME_PATH,
      nextPath: config.DATA_INPUT_PATH,
    };
  },
  methods: {
    saveProgressStatus(currentPath) {
      this.$store.dispatch("saveProgressStatus", currentPath);
    },
  },
  created() {
    this.saveProgressStatus(this.currentPath);
  },
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
