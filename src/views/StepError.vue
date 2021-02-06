<template>
  <transition name="slide">
    <main>
      <h1>{{ title }}</h1>
      <h2>{{ personalMessage }}.</h2>
      <p>
        {{ copy }}
      </p>
      <router-link :to="paymentPath">Volver</router-link>
    </main>
  </transition>
</template>

<script>
import config from "../config.js";

export default {
  data() {
    return {
      name: this.$store.getters.getUserData.name,
      paymentPath: config.PAYMENT_PATH,
      currentPath: config.ERROR_PATH,
      title: "¡Ooooooops!",
      copy:
        "No te preocupes, aún podemos continuar con el pago desde donde lo dejaste.",
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
  computed: {
    personalMessage() {
      return `Vaya, ${this.name}...¡parece que ha habido un problema!`;
    },
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
