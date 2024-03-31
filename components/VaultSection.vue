<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import BaseButton from "~/components/ui/BaseButton.vue";

const images = [
  { img: "/vault-slide-1.webp" },
  { img: "/vault-slide-2.webp" },
  { img: "/vault-slide-3.webp" },
  { img: "/vault-slide-4.webp" },
  { img: "/vault-slide-5.webp" },
  { img: "/vault-slide-6.webp" },
  { img: "/vault-slide-7.webp" },
  { img: "/vault-slide-8.webp" },
  { img: "/vault-slide-9.webp" },
  { img: "/vault-slide-10.webp" },
  { img: "/vault-slide-11.webp" },
  { img: "/vault-slide-12.webp" },
  { img: "/vault-slide-13.webp" },
  { img: "/vault-slide-14.webp" },
  { img: "/vault-slide-15.webp" },
];
</script>

<template>
  <section class="relative w-full">
    <div class="container">
      <div
        class="flex flex-col items-center rounded-[28px] bg-darkBlue pb-12 pt-9 sm:mt-32"
      >
        <div class="px-[2rem] sm:pt-28">
          <h2 class="text-nowrap text-4xl font-bold text-yellow sm:text-5xl">
            The Vault
          </h2>
          <h2
            class="pt-1 text-center text-[10px] text-white sm:pt-6 sm:text-lg"
          >
            Trade $INVBOE today
          </h2>
        </div>
        <swiper
          :slides-per-view="1"
          :space-between="32"
          class="mt-11 max-w-[260px] sm:max-w-[1120px]"
          :centeredSlides="true"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image.img" alt="" class="object-cover" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <img
      src="/public/cloud-ballon.webp"
      alt=""
      class="absolute -left-20 top-1 -z-10 h-[102px] w-[223px]"
    />
    <img
      src="/public/cloud-big.webp"
      alt=""
      class="absolute -bottom-[45%] -right-60 z-10"
    />
  </section>
</template>
