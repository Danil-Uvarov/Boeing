<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import BaseButton from "~/components/ui/BaseButton.vue";
const modules = [Pagination]
</script>

<template>
<section class="relative w-full">
  <div class="container">
  <div class="bg-darkBlue rounded-[28px]  pt-9 pb-12  flex flex-col items-center  ">
    <div class="px-[2rem]">
    <h2 class="font-bold text-4xl text-yellow text-nowrap ">The Vault</h2>
    <h2 class="text-[10px] pt-1 text-center text-white">Trade $INVBOE today</h2>
  </div>
    <swiper :slides-per-view="1.25"  :space-between="32" class="mt-11  max-w-[260px] " >
      <swiper-slide >
        <img src="/public/vault-slide-1.webp" alt="" class=" object-cover">
      </swiper-slide>
      <swiper-slide  :centeredSlides="true">
        <img src="/public/vault-slide-1.webp" alt="" class="object-cover">
      </swiper-slide>
    </swiper>
  </div>
  </div>
  <img src="/public/cloud-ballon.webp" alt="" class="absolute -left-20 top-1 -z-10 w-[223px] h-[102px]" >
  <img src="/public/cloud-big.webp" alt="" class="absolute -right-60 -bottom-[45%] z-10">
</section>
</template>
