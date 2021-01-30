<template>
  <main>
    <h1>StepInput</h1>
    <form>
      <fieldset>
        <label for="name">Nombre</label>
        <input
          id="name"
          type="text"
          required
          v-model="name"
          @blur="inputBlurHandler"
        />
        <div v-if="!nameIsValid">required</div>
      </fieldset>
      <fieldset>
        <label for="lastName">Apellido</label>
        <input
          id="lastName"
          type="text"
          required
          v-model="lastName"
          @blur="inputBlurHandler"
        />
        <div v-if="!lastNameIsValid">required</div>
      </fieldset>
      <input type="submit" @click="submitDataHandler" :disabled="!validated" />
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameIsValid: true,
      lastName: "",
      lastNameIsValid: true,
    };
  },
  methods: {
    setValue(key, value) {
      this[key] = value;
    },
    inputBlurHandler(event) {
      const keyString = `${event.target.id}IsValid`;
      if (!event.target.value) {
        this.setValue(keyString, false);
      } else {
        this.setValue(keyString, true);
      }
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
    goToStep(step) {
      this.$router.push(step);
    },
    submitDataHandler(event) {
      event.preventDefault();
      this.saveUserData(this.getUserData());
      this.resetUserData();
      this.goToStep("pago-del-producto");
    },
  },
  computed: {
    validated() {
      return !!this.name && !!this.lastName;
    },
  },
};
</script>
