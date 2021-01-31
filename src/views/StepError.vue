<template>
  <main>
    <h1>{{ title }}</h1>
    <h2>{{ personalMessage }}.</h2>
    <p>
      {{ copy }}
    </p>
    <router-link :to="paymentPath">Volver</router-link>
  </main>
</template>

<script>
import config from "../config.js";

export default {
  data() {
    return {
      name: this.$store.getters.getUserData.name,
      paymentPath: `/${config.PAYMENT_PATH}`,
      title: "¡Ooooooops!",
      copy:
        "No te preocupes, aún podemos continuar con el pago desde donde lo dejaste.",
    };
  },
  computed: {
    personalMessage() {
      return `Vaya, ${this.name}...¡parece que ha habido un problema!`;
    },
  },
};
</script>
