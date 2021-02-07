<template>
  <section class="MainNavigationMobile">
    <LinkedLogo />
    <Slide :closeOnNavigation="true" right>
      <MainNavigationItems />
    </Slide>
  </section>
</template>
<script>
import { Slide } from "vue-burger-menu";
import LinkedLogo from "../../LinkedLogo/LinkedLogo.vue";
import MainNavigationItems from "../MainNavigationItems/MainNavigationItems.vue";

export default {
  name: "main-navigation-mobile",
  components: {
    Slide,
    LinkedLogo,
    MainNavigationItems,
  },
};
</script>

<style lang="scss">
@import "./MainNavigationMobile.scss";
</style>
