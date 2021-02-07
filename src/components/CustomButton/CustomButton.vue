<template>
  <button
    :class="back ? 'CustomButton-back' : 'CustomButton'"
    @click="buttonClick"
  >
    <span>{{ title }}</span>
    <img v-if="back" src="../../assets/images/arrow-back.svg" />
    <img v-else src="../../assets/images/arrow-next.svg" />
  </button>
</template>
<script>
export default {
  name: "custom-button",
  data() {
    return {
      title: this.$props.text,
    };
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    back: {
      type: Boolean,
    },
  },
  methods: {
    buttonClick(event) {
      event.preventDefault();
      this.$emit("buttonIsClicked", event);
    },
  },
};
</script>

<style lang="scss">
@import "./CustomButton.scss";
</style>
