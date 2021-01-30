<template>
  <div id="app">
    <layout-header />
    <router-view />
    <layout-footer />
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
