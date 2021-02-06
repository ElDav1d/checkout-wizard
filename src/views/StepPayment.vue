<template>
  <transition name="slide">
    <main>
      <h1>StepPayment</h1>
      <h2>Estimado/a {{ getUserData.name }}</h2>
      <p>¡Estás a un sólo paso de finalizar tu compra!</p>
      <p>
        Una vez efectuado el pago del producto, recibirás un e-mail con todos
        los detalles.
      </p>
      <router-link :to="dataInputPath">Anterior</router-link>
      <button v-if="!sendingData" @click="buttonClickHandler">Pagar</button>
      <div class="Loader" v-if="sendingData">
        <Spinner size="large" :message="sendingMessage" />
      </div>
    </main>
  </transition>
</template>

<script>
import Spinner from "vue-simple-spinner";
import { mapGetters } from "vuex";
import config from "../config.js";

export default {
  data() {
    return {
      sendingData: false,
      sendingMessage: "estamos enviando tus datos",
      dataInputPath: `/${config.DATA_INPUT_PATH}`,
      succesInputPath: `/${config.SUCCESS_PATH}`,
      errorInputPath: `/${config.ERROR_PATH}`,
    };
  },
  components: {
    Spinner,
  },
  computed: {
    ...mapGetters(["getUserData"]),
  },
  methods: {
    packUserData() {
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
    storeSuccessData() {
      const userName = this.$store.getters.getUserData.name;
      this.$store.dispatch("saveSuccessData", userName);
    },
    postUserData() {
      this.sendingData = true;
      fetch(
        "https://checkout-wizard-a8937-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.packUserData()),
        }
      )
        .then(response => {
          this.storeSuccessData();
          this.resetData();
          this.goToStep(this.succesInputPath);
          return response;
        })
        .catch(error => {
          console.error("Error:", error);
          this.goToStep(this.errorInputPath);
        });
    },
    buttonClickHandler() {
      this.postUserData();
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
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
