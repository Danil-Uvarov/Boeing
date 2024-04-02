<script setup lang="ts">
import IconFouLanes from "~/components/icons/IconFouLanes.vue";
</script>

<template>
  <section
    class="flex max-h-[31px] w-full items-center justify-center gap-6 bg-yellow py-1 sm:max-h-[52px] sm:gap-6 md:gap-28 xl:gap-44"
  >
    <IconFouLanes
      class="ms:max-h-[52px] hidden h-full max-h-[31px] w-full max-w-[33px] sm:block"
    />
    <img
      loading="lazy"
      src="/boeing-logo.webp"
      alt=""
      class="ms:max-h-[52px] hidden h-full max-h-[31px] w-full max-w-[178px] sm:block"
    />
    <IconFouLanes
      class="ms:max-h-[52px] h-full max-h-[31px] w-full max-w-[33px]"
    />
    <img
      loading="lazy"
      src="/boeing-logo.webp"
      alt=""
      class="ms:max-h-[52px] h-full max-h-[31px] w-full max-w-[178px]"
    />
    <IconFouLanes
      class="ms:max-h-[52px] h-full max-h-[31px] w-full max-w-[33px]"
    />
  </section>
</template>
