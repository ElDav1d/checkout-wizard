<template>
  <div id="app">
    <LayoutHeader />
    <main>
      <CheckoutProgress />
      <router-view />
    </main>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from "./components/Layout/LayoutHeader/LayoutHeader.vue";
import LayoutFooter from "./components/Layout/LayoutFooter/LayoutFooter.vue";
import CheckoutProgress from "./components/Layout/LayoutProgressBar/LayoutProgressBar.vue";

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutFooter,
    CheckoutProgress,
  },
};
</script>

<style lang="scss">
@import "~@/assets/stylesheets/styles.scss";
</style>
