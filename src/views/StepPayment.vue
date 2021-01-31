<template>
  <main>
    <h1>StepPayment</h1>
    <router-link to="/mis-datos">Volver</router-link>
    <button v-if="!sendingData" @click="buttonClickHandler">Pagar</button>
    <div class="Loader" v-if="sendingData">
      <spinner size="large" :message="sendingMessage" />
    </div>
  </main>
</template>

<script>
import Spinner from "vue-simple-spinner";

export default {
  data() {
    return {
      sendingData: false,
      sendingMessage: "estamos enviando tus datos",
    };
  },
  components: {
    Spinner,
  },
  methods: {
    retrieveData() {
      return {
        name: this.$store.getters.getUserData.name,
        lastName: this.$store.getters.getUserData.lastName,
      };
    },
    resetData() {
      const userData = {
        name: "",
        lastName: "",
      };
      this.$store.dispatch("saveUserData", userData);
    },
    goToStep(step) {
      this.$router.push(step);
    },
    postData() {
      this.sendingData = true;
      fetch(
        "https://checkout-wizard-a8937-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.retrieveData()),
        }
      )
        .then(response => {
          console.log("Success:", response);
          this.resetData();
          this.goToStep("enhorabuena");
        })
        .catch(error => {
          console.error("Error:", error);
          this.goToStep("error");
        });
    },
    buttonClickHandler() {
      this.postData();
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
