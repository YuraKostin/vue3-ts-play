<template>
  <input v-on:input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SomeInput",

  methods: {
    handleInput(event: Event & { target: HTMLInputElement }) {
      this.$emit("some-input-change", event.target.value);
    }
  }
});
</script>


