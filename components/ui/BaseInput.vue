<script setup lang="ts">
import { ref } from "vue";
defineProps<{
  text: string;
}>();

const inputCalculate = defineModel();
</script>

<template>
  <input
    placeholder="0"
    class="h-[43px] w-full outline-none"
    type="text"
    v-model="inputCalculate"
  />
</template>

<style scoped></style>
