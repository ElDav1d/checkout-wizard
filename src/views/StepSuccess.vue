<template>
  <main>
    <h1>StepSuccess</h1>
    <h3>{{ getSuccessData.icon }}</h3>
    <h2>¡{{ getSuccessData.title }} {{ getSuccessData.name }}!</h2>
    <p>{{ getSuccessData.copy }}</p>
    <router-link to="/">Comprar</router-link>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getSuccessData"]),
  },
};
</script>
