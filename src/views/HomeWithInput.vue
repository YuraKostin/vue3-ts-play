<template>
  <div>
    <SomeInput v-on:some-input-change="handleChange" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import SomeInput from "@/components/SomeInput.vue";

export default defineComponent({
  name: "App",

  components: {
    SomeInput
  },

  setup() {
    const handleChange = (e: Event & { target: HTMLInputElement }): void => {
      console.log(e.target.value);
    };

    return {
      handleChange
    };
  }
});
</script>
