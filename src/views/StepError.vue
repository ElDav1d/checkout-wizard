<template>
  <main>
    <h1>StepError</h1>
    <router-link :to="paymentPath">Volver</router-link>
  </main>
</template>

<script>
import config from "../config.js";

export default {
  data() {
    return {
      paymentPath: `/${config.PAYMENT_PATH}`,
    };
  },
};
</script>
