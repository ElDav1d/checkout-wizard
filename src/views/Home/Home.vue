<template>
  <transition name="slide">
    <LayoutDialogContainer class="Home">
      <LayoutDialogCopyContent :title="title" :copy="copy" />
      <CustomButton :text="buttonText" @buttonIsClicked="clickHandler" />
    </LayoutDialogContainer>
  </transition>
</template>

<script>
import config from "../../config.js";
import LayoutDialogContainer from "../../components/Layout/LayoutDialogContainer/LayoutDialogContainer.vue";
import LayoutDialogCopyContent from "../../components/Layout/LayoutDialogCopyContent/LayoutDialogCopyContent";
import CustomButton from "../../components/CustomButton/CustomButton.vue";

export default {
  name: "home",
  data() {
    return {
      currentPath: config.HOME_PATH,
      nextPath: config.DATA_INPUT_PATH,
      title: "¡Bienvenido/a!",
      copy: "Nos encanta que hayas elegido nuestro producto.",
      buttonText: "Comprar",
    };
  },
  components: { LayoutDialogContainer, LayoutDialogCopyContent, CustomButton },
  methods: {
    saveProgressStatus(currentPath) {
      this.$store.dispatch("saveProgressStatus", currentPath);
    },
    goToStep(step) {
      this.$router.push(step);
    },
    clickHandler() {
      this.goToStep(this.nextPath);
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
