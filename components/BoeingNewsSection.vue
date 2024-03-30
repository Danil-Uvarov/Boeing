<script setup lang="ts">

import News from "~/components/ui/news/News.vue";
</script>

<template>
  <section class="container z-0 relative w-full">
    <div class="bg-darkBlue rounded-[28px] px-[2rem] pt-9 pb-12 -mt-7 flex flex-col items-center">
      <h2 class="font-bold text-4xl text-yellow text-nowrap ">Boeing News</h2>
      <News/>
    </div>
    <img src="/public/cloud-big.webp" alt="" class="absolute bottom-0 -left-[160px] w-[311px] -z-10  h-[205px]" />
  </section>
</template>
