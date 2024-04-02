<script setup lang="ts">
const roadmapPros = [
  "1. Inverse The Boeing",
  "2. Advocate for Flight Safety",
  "3. Advocate for further regulations",
  "4. HODL",
];
</script>
<template>
  <section class="container w-full pt-9 md:pt-52">
    <h2 class="hidden w-full text-center text-5xl font-bold md:block">
      $INVBOE Roadmap
    </h2>
    <div
      class="relative z-20 rounded-2xl bg-blue px-4 py-10 md:mt-10 md:flex md:items-center md:justify-center md:gap-12"
    >
      <div>
        <h2 class="font-inter text-3xl font-bold text-white">Roadmap</h2>
        <p class="pt-3 font-inter text-white md:max-w-[302px]">
          Understanding Inverse Boeing Roadmap. Inverse Boeing won’t malfunction
          we are going to the moon and back.
        </p>
      </div>
      <img
        src="/cloud-ballon.webp"
        alt=""
        class="-left-24 -top-28 mt-16 max-h-[91px] max-w-[192px] md:absolute"
      />
      <ol class="flex flex-col gap-3 pt-9">
        <li
          v-for="(item, index) in roadmapPros"
          :key="index"
          class="font-inter text-lg font-extrabold text-white"
        >
          {{ item }}
        </li>
      </ol>
      <img
        src="/cloud-ballon.webp"
        alt=""
        class="-bottom-28 -right-64 z-10 hidden max-h-[200px] max-w-[422px] md:absolute md:block"
      />
    </div>
  </section>
</template>
