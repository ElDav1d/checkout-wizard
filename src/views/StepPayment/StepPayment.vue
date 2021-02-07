<template>
  <transition name="slide">
    <LayoutDialogContainer>
      <LayoutDialogCopyContent :title="composeTitle" :copy="copy" />
      <div class="StepPaymentMethods">
        <img
          class="StepPaymentMethods_ImageHero"
          src="../../assets/images/credit-cards.svg"
          :title="subHeading"
          :alt="subHeading"
        />
        <h2 class="StepPaymentMethods_Heading">{{ subHeading }}</h2>
        <p class="StepPaymentMethods_Paragraph">{{ subCopy }}</p>
        <div class="StepPaymentMethods_ImageContainer">
          <img
            class="StepPaymentMethods_Image"
            src="../../assets/images/visa-card.svg"
            :title="titleVisa"
            :alt="titleVisa"
          />
          <img
            class="StepPaymentMethods_Image"
            src="../../assets/images/mastercard-card.svg"
            :title="titleMastercard"
            :alt="titleMastercard"
          />
        </div>
      </div>
      <Loader v-if="sendingData" :message="sendingMessage" />
      <div v-else class="StepPaymentMethods_CtaBlock" role="navigation">
        <CustomButton
          class="StepPaymentMethods_CtaBlockItem"
          :text="buttonNextText"
          @buttonIsClicked="clickNextHandler"
        />
        <CustomButton
          class="StepPaymentMethods_CtaBlockItem"
          :back="true"
          :text="buttonBackText"
          @buttonIsClicked="clickBackHandler"
        />
      </div>
      <!-- <div v-else>
        <router-link :to="dataInputPath">Anterior</router-link>
        <button @click="buttonClickHandler">Pagar</button>
      </div> -->
    </LayoutDialogContainer>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import config from "../../config.js";
import Loader from "../../components/Loader/Loader.vue";
import LayoutDialogContainer from "../../components/Layout/LayoutDialogContainer/LayoutDialogContainer.vue";
import LayoutDialogCopyContent from "../../components/Layout/LayoutDialogCopyContent/LayoutDialogCopyContent";
import CustomButton from "../../components/CustomButton/CustomButton.vue";

export default {
  data() {
    return {
      sendingData: false,
      sendingMessage: "estamos enviando tus datos",
      currentPath: config.PAYMENT_PATH,
      backPath: config.DATA_INPUT_PATH,
      nextPath: config.SUCCESS_PATH,
      errorPath: config.ERROR_PATH,
      userName: this.$store.getters.getUserData.name,
      copy:
        "Una vez efectuado el pago del producto, recibirás un e-mail con todos los detalles.",
      subHeading: "Tarjeta de crédito",
      subCopy:
        "Se redirigirá a una plataforma de pago. Se trata de un proceso seguro. Puede que la validación del pago tarde 24 horas en completarse.",
      titleVisa: "Visa",
      titleMastercard: "Mastercard",
      buttonNextText: "Pagar",
      buttonBackText: "Volver",
    };
  },
  components: {
    Loader,
    LayoutDialogContainer,
    LayoutDialogCopyContent,
    CustomButton,
  },
  created() {
    this.saveProgressStatus(this.currentPath);
  },
  computed: {
    ...mapGetters(["getUserData"]),
    composeTitle() {
      return `Estimado/a ${this.userName}, ¡estás a un paso de finalizar!`;
    },
  },
  methods: {
    saveProgressStatus(currentPath) {
      this.$store.dispatch("saveProgressStatus", currentPath);
    },
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
          this.goToStep(this.nextPath);
          return response;
        })
        .catch(error => {
          console.error("Error:", error);
          this.goToStep(this.errorPath);
        });
    },
    clickBackHandler() {
      this.goToStep(this.backPath);
    },
    clickNextHandler() {
      this.postUserData();
    },
  },
};
</script>

<style lang="scss">
@import "./StepPayment.scss";
</style>
