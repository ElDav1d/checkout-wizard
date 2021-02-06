<template>
  <fieldset>
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="text"
      required
      v-model="value"
      @blur="inputBlurHandler"
    />
    <div v-if="!isValid">required</div>
  </fieldset>
</template>

<script>
export default {
  name: "input-group-text",
  data() {
    return {
      value: this.$props.initialValue,
      id: this.$props.inputID,
      isValid: false,
      label: this.$props.labelText,
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
