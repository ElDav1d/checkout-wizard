<template>
  <transition name="slide">
    <LayoutDialogContainer>
      <LayoutDialogCopyContent :title="title" :copy="copy" />
      <form>
        <InputGroupText
          :inputID="inputIDName"
          :labelText="labelStringName"
          @inputIsBlurred="inputHandler"
          :initialValue="name"
        />
        <InputGroupText
          :inputID="inputIDLastName"
          :labelText="labelStringLastName"
          @inputIsBlurred="inputHandler"
          :initialValue="lastName"
        />
      </form>
      <div class="StepInput_CtaBlock" role="navigation">
        <CustomButton
          class="StepInput_CtaBlockItem"
          :text="buttonNextText"
          @buttonIsClicked="clickNextHandler"
          :disabled="!validated"
        />
        <CustomButton
          class="StepInput_CtaBlockItem"
          :back="true"
          :text="buttonBackText"
          @buttonIsClicked="clickBackHandler"
        />
      </div>
    </LayoutDialogContainer>
  </transition>
</template>

<script>
import config from "../../config.js";
import LayoutDialogContainer from "../../components/Layout/LayoutDialogContainer/LayoutDialogContainer.vue";
import LayoutDialogCopyContent from "../../components/Layout/LayoutDialogCopyContent/LayoutDialogCopyContent";
import CustomButton from "../../components/CustomButton/CustomButton.vue";

export default {
  name: "step-input",
  data() {
    return {
      title: "Mis Datos",
      copy:
        "Revisa los datos y completa aquellos pendientes antes de continuar con el proceso. ",
      labelStringName: "Nombre",
      inputIDName: "name",
      name: "",
      labelStringLastName: "Apellido",
      inputIDLastName: "lastName",
      lastName: "",
      currentPath: config.DATA_INPUT_PATH,
      nextPath: config.PAYMENT_PATH,
      backPath: config.HOME_PATH,
      buttonNextText: "Continuar",
      buttonBackText: "Anterior",
    };
  },
  components: {
    InputGroupText: () =>
      import("../../components/InputGroupText/InputGroupText.vue"),
    LayoutDialogContainer,
    LayoutDialogCopyContent,
    CustomButton,
  },
  methods: {
    setInputValue(id, value) {
      this[id] = value;
    },
    inputHandler(payload) {
      const { id, value } = payload;
      this.setInputValue(id, value);
    },
    getUserData() {
      return {
        name: this.name,
        lastName: this.lastName,
      };
    },
    saveUserData(data) {
      this.$store.dispatch("saveUserData", data);
    },
    resetUserData() {
      this.name = "";
      this.lastName = "";
    },
    getPersistedData() {
      return {
        persistedName: this.$store.getters.getUserData.name,
        persistedLastName: this.$store.getters.getUserData.lastName,
      };
    },
    goToStep(step) {
      this.$router.push(step);
    },
    clickNextHandler() {
      this.saveUserData(this.getUserData());
      this.resetUserData();
      this.goToStep(this.nextPath);
    },
    clickBackHandler() {
      this.goToStep(this.backPath);
    },
    saveProgressStatus(currentPath) {
      this.$store.dispatch("saveProgressStatus", currentPath);
    },
  },
  created() {
    this.saveProgressStatus(this.currentPath);
    const { persistedName, persistedLastName } = this.getPersistedData();
    this.name = persistedName;
    this.lastName = persistedLastName;
  },
  computed: {
    validated() {
      return !!this.name && !!this.lastName;
    },
  },
};
</script>
<style lang="scss">
@import "./ StepInput.scss";
</style>
