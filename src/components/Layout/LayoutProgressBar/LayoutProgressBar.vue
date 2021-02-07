<template>
  <section class="LayoutProgressBar">
    <transition name="fade" mode="in-out">
      <div
        class="LayoutProgressBar_Container"
        v-if="getProgressStatus === progressStatusStepOne"
      >
        <div class="LayoutProgressBar_Item">
          <img src="../../../assets/images/step-current-1.svg" />
          <div>{{ textStepOne }}</div>
        </div>
        <div class="LayoutProgressBar_Stroke" />
        <div class="LayoutProgressBar_Item-left">
          <img src="../../../assets/images/step-left-2.svg" />
          <div>{{ textStepTwo }}</div>
        </div>
      </div>
      <div v-else-if="getProgressStatus === progressStatusStepTwo">
        <img src="../../../assets/images/step-checkmark.svg" />
        <img src="../../../assets/images/step-current-2.svg" />
      </div>
      <div v-else-if="getProgressStatus === progressStatusSuccess">
        <img src="../../../assets/images/step-checkmark.svg" />
        <img src="../../../assets/images/step-checkmark.svg" />
      </div>
      <div v-else-if="getProgressStatus === progressStatusError">
        <img src="../../../assets/images/step-error.svg" />
      </div>
    </transition>
  </section>
</template>

<script>
import config from "../../../config.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      progressStatusStepOne: config.DATA_INPUT_PATH,
      progressStatusStepTwo: config.PAYMENT_PATH,
      progressStatusSuccess: config.SUCCESS_PATH,
      progressStatusError: config.ERROR_PATH,
      textStepOne: "Mis datos",
      textStepTwo: "Pago",
    };
  },
  computed: {
    ...mapGetters(["getProgressStatus"]),
  },
};
</script>

<style lang="scss">
@import "./LayoutProgressBar.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
