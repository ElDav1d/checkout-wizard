<template>
  <section class="MainNavigationDesktop">
    <nav class="MainNavigationDesktop_Container">
      <LinkedLogo />
      <div class="MainNavigationDesktop_MainLinks">
        <MainNavigationItems />
      </div>
    </nav>
  </section>
</template>

<script>
import config from "../../../config.js";
import LinkedLogo from "../../../components/LinkedLogo/LinkedLogo.vue";
import MainNavigationItems from "../MainNavigationItems/MainNavigationItems.vue";
export default {
  name: "main-navigation-desktop",
  data() {
    return {
      homePath: config.HOME_PATH,
      successPath: config.SUCCESS_PATH,
    };
  },
  components: {
    LinkedLogo,
    MainNavigationItems,
  },
};
</script>

<style lang="scss">
@import "./MainNavigationDesktop.scss";
</style>
