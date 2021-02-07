<template>
  <button class="CustomButton" @click="buttonClick">
    <span>{{ title }}</span>
    <img src="../../assets/images/arrow-next.svg" />
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
