<template>
  <header class="LayoutHeader">
    <MainNavigationMobile />
    <MainNavigationDesktop />
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
