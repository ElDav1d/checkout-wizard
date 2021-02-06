<template>
  <section>
    <transition name="fade" mode="in-out">
      <div v-if="getProgressStatus === progressStatusStepOne">
        <img src="../../../assets/images/step-current-1.svg" />
        <img src="../../../assets/images/step-left-2.svg" />
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
    };
  },
  computed: {
    ...mapGetters(["getProgressStatus"]),
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
