<template>
  <transition name="slide">
    <LayoutDialogContainer>
      <h1>StepSuccess</h1>
      <h3>{{ getSuccessData.icon }}</h3>
      <h2>¡{{ getSuccessData.title }} {{ getSuccessData.name }}!</h2>
      <p>{{ getSuccessData.copy }}</p>
      <router-link to="/">Comprar</router-link>
    </LayoutDialogContainer>
  </transition>
</template>

<script>
import config from "../config.js";
import { mapGetters } from "vuex";
import LayoutDialogContainer from "../components/Layout/LayoutDialogContainer/LayoutDialogContainer.vue";

export default {
  data() {
    return {
      homePath: config.HOME_PATH,
      currentPath: config.SUCCESS_PATH,
    };
  },
  components: { LayoutDialogContainer },
  methods: {
    saveProgressStatus(currentPath) {
      this.$store.dispatch("saveProgressStatus", currentPath);
    },
  },
  computed: {
    ...mapGetters(["getSuccessData"]),
  },
  created() {
    this.saveProgressStatus(this.currentPath);
  },
  mounted() {
    addEventListener("popstate", () => {
      location.href = this.homePath;
    });
  },
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
