<template>
  <router-link class="MainNavigationItem_Wrapper" :to="link">
    <div :class="caret ? 'MainNavigationItem-caret' : 'MainNavigationItem'">
      <img :src="iconAssetPath" :title="title" :alt="title" />
      <span>{{ title }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "main-navigation-item",
  data() {
    return {
      title: this.$props.linkTitle,
      link: this.$props.linkPath,
      icon: this.$props.iconName,
      caret: this.$props.hasCaret,
    };
  },
  props: {
    linkTitle: {
      type: String,
      required: true,
    },
    linkPath: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
    hasCaret: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    iconAssetPath() {
      return require(`../../../../assets/images/${this.icon}`);
    },
  },
};
</script>
<style lang="scss">
@import "./MainNavigationItem.scss";
</style>
