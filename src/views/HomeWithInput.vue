<template>
  <div>
    <SomeInput @change="handleChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SomeInput from "@/components/SomeInput.vue";

export default defineComponent({
  name: "App",

  components: {
    SomeInput
  },

  setup() {
    const handleChange = (e: any): void => {
      if (e && e.target && e.target.value) {
        console.log(e.target.value);
      }
    };

    return {
      handleChange
    };
  }
});
</script>
