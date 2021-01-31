<template>
  <nav>
    NAVIGATION
    <router-link :to="homePath">Home</router-link> |
    <router-link :to="errorPath">StepError</router-link>
    <router-link :to="dataInputPath">StepInput</router-link>
    <router-link :to="paymentPath">StepPayment</router-link>
    <router-link :to="successPath">StepSuccess</router-link>
  </nav>
</template>

<script>
import config from "../../config.js";

export default {
  data() {
    return {
      homePath: `/${config.HOME_PATH}`,
      errorPath: `/${config.ERROR_PATH}`,
      dataInputPath: `/${config.DATA_INPUT_PATH}`,
      paymentPath: `/${config.PAYMENT_PATH}`,
      successPath: `/${config.SUCCESS_PATH}`,
    };
  },
};
</script>
