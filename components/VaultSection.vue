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
  <section class="w-full">
    <div
      class="relative mx-auto flex max-w-[1700px] flex-col items-center py-10 sm:mt-32"
    >
      <div
        class="absolute inset-x-0 top-0 -z-10 mx-auto h-full w-full max-w-full bg-darkBlue xl:max-w-[1300px] xl:rounded-[28px]"
      ></div>
      <div class="px-[2rem] sm:pt-28">
        <h2 class="text-nowrap text-5xl font-bold text-yellow">The Vault</h2>
        <h2 class="pt-6 text-center text-lg text-white">Trade $INVBOE today</h2>
      </div>
      <Swiper
        :slides-per-view="1.5"
        :space-between="24"
        class="container z-20 mt-10 max-h-[720px] w-full sm:max-w-full"
        :centeredSlides="true"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img
            loading="lazy"
            :src="image.img"
            alt=""
            class="max-h-[620px] max-w-full object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <img
      loading="lazy"
      src="/public/cloud-ballon.webp"
      alt=""
      class="absolute -left-28 top-52 -z-10 h-[102px] w-[223px]"
    />
  </section>
</template>
