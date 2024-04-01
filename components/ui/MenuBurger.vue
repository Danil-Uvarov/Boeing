<script setup lang="ts">
defineProps<{ links: [{ to: string; name: string }] }>();

const burger = defineModel();
</script>

<template>
  <nav class="">
    <ul
      class="absolute inset-x-0 top-[100%] w-full rounded-b-2xl bg-white pb-20"
    >
      <li
        v-for="(link, index) in links"
        :key="index"
        class="px-4 py-3 font-inter font-semibold"
        @click="burger = !burger"
      >
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
