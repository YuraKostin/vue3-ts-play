<template>
  <input v-on:input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SomeInput",
  //
  // emits: {
  //   "some-input-change": function(value) {
  //     return typeof value === "string";
  //   }
  // },

  methods: {
    handleInput(event: Event & { target: HTMLInputElement }) {
      this.$emit("some-input-change", 1);
    }
  }
});
</script>
