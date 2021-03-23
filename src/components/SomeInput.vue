<template>
  <input @input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SomeInput",

  methods: {
    handleInput(event: { target: HTMLInputElement }) {
      this.$emit("change", event.target.value);
    }
  }
});
</script>
