<template>
  <div>
    MENU
    <span>
      <Slide :closeOnNavigation="true" right role="list">
        <router-link :to="homePath" role="listitem">Home</router-link>
        <router-link :to="successPath" role="listitem">StepSuccess</router-link>
      </Slide>
    </span>
  </div>
</template>
<script>
import { Slide } from "vue-burger-menu";
import config from "../../../config.js";

export default {
  name: "main-navigation-mobile",
  data() {
    return {
      homePath: config.HOME_PATH,
      successPath: config.SUCCESS_PATH,
    };
  },
  components: {
    Slide,
  },
};
</script>
