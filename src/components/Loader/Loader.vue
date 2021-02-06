<template>
  <div class="Loader">
    <Spinner size="large" :message="message" />
  </div>
</template>
<script>
import Spinner from "vue-simple-spinner";
export default {
  components: {
    Spinner,
  },
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.Loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
