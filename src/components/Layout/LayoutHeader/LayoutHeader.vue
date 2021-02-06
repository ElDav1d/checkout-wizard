<template>
  <header>
    HEADER
    <MainNavigationMobile class="Hide_FromTablet" />
    <MainNavigationDesktop class="Hide_UntilTablet" />
  </header>
</template>

<script>
import MainNavigationDesktop from "../../MainNavigation/MainNavigationDesktop/MainNavigationDesktop.vue";
import MainNavigationMobile from "../../MainNavigation/MainNavigationMobile/MainNavigationMobile.vue";

export default {
  name: "layout-header",
  components: {
    MainNavigationDesktop,
    MainNavigationMobile,
  },
};
</script>

<style lang="scss">
.Hide_FromTablet {
  @media (min-width: 768px) {
    display: none;
  }
}

.Hide_UntilTablet {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}
</style>
