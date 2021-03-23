<template>
  <h1>{{ msg.join("-") }}</h1>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: Array as PropType<Array<string>>
    }
  }
});
</script>


