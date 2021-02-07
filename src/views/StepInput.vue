<template>
  <article>
    <h1>StepInput</h1>
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
      <input type="submit" @click="submitDataHandler" :disabled="!validated" />
    </form>
  </article>
</template>

<script>
import config from "../config.js";

export default {
  name: "step-input",
  data() {
    return {
      labelStringName: "Nombre",
      inputIDName: "name",
      name: "",
      labelStringLastName: "Apellido",
      inputIDLastName: "lastName",
      lastName: "",
      currentPath: config.DATA_INPUT_PATH,
      nextPath: config.PAYMENT_PATH,
    };
  },
  components: {
    InputGroupText: () =>
      import("../components/InputGroupText/InputGroupText.vue"),
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
    submitDataHandler(event) {
      event.preventDefault();
      this.saveUserData(this.getUserData());
      this.resetUserData();
      this.goToStep(this.nextPath);
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
