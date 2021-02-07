<template>
  <fragment>
    <MainNavigationItem
      :linkTitle="linkSignInTitle"
      :linkPath="linkSignInPath"
      :iconName="linkSignInIconName"
      :hasCaret="false"
    />
    <MainNavigationItem
      :linkTitle="linkHelpTitle"
      :linkPath="linkHelpPath"
      :iconName="linkHelpIconName"
      :hasCaret="false"
    />
    <MainNavigationItem
      :linkTitle="linkLanguageTitle"
      :linkPath="linkLanguagePath"
      :iconName="linkLanguageIconName"
      :hasCaret="true"
    />
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import config from "../../../config.js";
import MainNavigationItem from "./MainNavigationItem/ MainNavigationItem.vue";

export default {
  name: "main-navigation-items",
  data() {
    return {
      homePath: config.HOME_PATH,
      linkSignInTitle: "Sign in",
      linkSignInPath: config.HOME_PATH,
      linkSignInIconName: "person.svg",
      linkHelpTitle: "Ayuda",
      linkHelpPath: config.HOME_PATH,
      linkHelpIconName: "file-text.svg",
      linkLanguageTitle: "Es",
      linkLanguagePath: config.HOME_PATH,
      linkLanguageIconName: "caret-down.svg",
    };
  },
  components: {
    MainNavigationItem,
    Fragment,
  },
};
</script>
