<template>
  <footer class="LayoutFooter">
    <div class="LayoutFooter_Container">
      <LinkedLogo class="LayoutFooter_LogoLink" />
      <p class="LayoutFooter_Copy">{{ copy }}</p>
    </div>
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
