<template>
  <footer class="LayoutFooter">
    <LinkedLogo class="LayoutFooter_LogoLink" />
    <p class="LayoutFooter_Copy">{{ copy }}</p>
  </footer>
</template>

<script>
import LinkedLogo from "../../../components/LinkedLogo/LinkedLogo.vue";
export default {
  name: "layout-footer",
  data() {
    return {
      copy: "2020 © We Are Marketing",
    };
  },
  components: {
    LinkedLogo,
  },
};
</script>
<style lang="scss">
@import "./LayoutFooter.scss";
</style>
