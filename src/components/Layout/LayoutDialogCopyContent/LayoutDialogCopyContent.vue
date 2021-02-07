<template>
  <section class="LayoutDialogCopyContent">
    <h1 class="LayoutDialogCopyContent_Heading">{{ title }}</h1>
    <p class="LayoutDialogCopyContent_Paragraph">{{ copy }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      heading: this.$props.title,
      paragraph: this.$props.copy,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    copy: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "./LayoutDialogCopyContent.scss";
</style>
