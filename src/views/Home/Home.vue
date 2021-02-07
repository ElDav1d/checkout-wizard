<template>
  <transition name="slide">
    <LayoutDialogContainer class="Home">
      <LayoutDialogCopyContent :title="title" :copy="copy" />
      <router-link :to="nextPath">Checkout</router-link>
    </LayoutDialogContainer>
  </transition>
</template>

<script>
import config from "../../config.js";
import LayoutDialogContainer from "../../components/Layout/LayoutDialogContainer/LayoutDialogContainer.vue";
import LayoutDialogCopyContent from "../../components/Layout/LayoutDialogCopyContent/LayoutDialogCopyContent";

export default {
  name: "home",
  data() {
    return {
      currentPath: config.HOME_PATH,
      nextPath: config.DATA_INPUT_PATH,
      title: "¡Bienvenido/a!",
      copy: "Nos encanta que hayas elegido nuestro producto.",
    };
  },
  components: { LayoutDialogContainer, LayoutDialogCopyContent },
  methods: {
    saveProgressStatus(currentPath) {
      this.$store.dispatch("saveProgressStatus", currentPath);
    },
  },
  created() {
    this.saveProgressStatus(this.currentPath);
  },
};
</script>

<style lang="scss">
@import "./Home.scss";
</style>
