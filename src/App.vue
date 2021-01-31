<template>
  <div id="app">
    <LayoutHeader />
    <router-view />
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from "./components/LayoutHeader/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter/LayoutFooter.vue";

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutFooter,
  },
};
</script>
