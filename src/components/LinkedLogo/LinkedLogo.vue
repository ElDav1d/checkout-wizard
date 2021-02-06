<template>
  <router-link class="LinkedLogo" :to="homePath">
    <img
      class="LinkedLogo_Image"
      src="./Logo.jpg"
      :title="title"
      :alt="title"
    />
  </router-link>
</template>
<script>
import config from "../../config.js";
export default {
  name: "linked-logo",
  data() {
    return {
      homePath: config.HOME_PATH,
      title: "Logo de We Are Marketing",
    };
  },
};
</script>
<style lang="scss">
@import "./LinkedLogo.scss";
</style>
