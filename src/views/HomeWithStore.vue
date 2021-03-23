<template>
  <div>
    <button @click="handleClick">Hello!</button>
    <p>
      {{ count }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "App",

  setup() {
    const store = useStore(key);
    const count = computed(() => store.state.count);
    const handleClick = () => {
      store.commit("increment", "Some string!");
    };

    return {
      count,
      handleClick
    };
  }
});
</script>
