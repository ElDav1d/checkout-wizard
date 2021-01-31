<template>
  <main>
    <h1>This the home page</h1>
    <router-link :to="dataInputPath">Checkout</router-link>
  </main>
</template>

<script>
import config from "../config.js";

export default {
  data() {
    return {
      dataInputPath: `/${config.DATA_INPUT_PATH}`,
    };
  },
};
</script>
