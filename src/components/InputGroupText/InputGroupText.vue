<template>
  <fieldset class="InputGroupText">
    <label class="InputGroupText_Label" :for="id">{{ label }}</label>
    <input
      class="InputGroupText_Input"
      :id="id"
      type="text"
      required
      v-model="value"
      @blur="inputBlurHandler"
    />
    <div class="InputGroupText_ErrorMessage" v-if="!isValid">
      {{ errorMessage }}
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "input-group-text",
  data() {
    return {
      value: this.$props.initialValue,
      id: this.$props.inputID,
      isValid: true,
      label: this.$props.labelText,
      errorMessage: "Por favor, rellena éste campo",
    };
  },
  props: {
    inputID: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    initialValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    inputBlurHandler(event) {
      this.isValid = !!event.target.value;
      const inputPayload = {
        id: event.target.id,
        value: event.target.value,
      };
      this.$emit("inputIsBlurred", inputPayload);
    },
  },
};
</script>
<style lang="scss">
@import "./InputGroupText.scss";
</style>
