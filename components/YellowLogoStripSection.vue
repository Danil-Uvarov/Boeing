<script setup lang="ts">
import IconLogo from "assets/icons/IconLogo.vue";
import IconFouLanes from "assets/icons/IconFouLanes.vue";
</script>

<template>
  <section
    class="flex max-h-[31px] w-full items-center justify-center gap-[107px] bg-yellow py-1 sm:max-h-[52px] sm:gap-56"
  >
    <IconFouLanes />
    <IconLogo class="ms:max-h-[52px] max-h-[31px] max-w-[178px]" />
    <IconFouLanes />
    <IconLogo class="ms:max-h-[52px] max-h-[31px] max-w-[178px]" />
    <IconFouLanes />
  </section>
</template>
