<template>
  <nav>
    <ul>
      <li><router-link :to="homePath">Home</router-link></li>
      <li>
        <router-link :to="successPath">StepSuccess</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import config from "../../../config.js";
export default {
  name: "main-navigation-desktop",
  data() {
    return {
      homePath: `/${config.HOME_PATH}`,
      successPath: `/${config.SUCCESS_PATH}`,
    };
  },
};
</script>
