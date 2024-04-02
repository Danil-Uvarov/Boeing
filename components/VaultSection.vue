<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

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
      class="relative flex flex-col items-center pb-[52px] pt-[35px] sm:mt-32"
    >
      <div class="absolute left-0 top-0 z-10 h-full w-full">
        <div class="container h-full w-full">
          <div class="h-full w-full rounded-[28px] bg-darkBlue px-8"></div>
        </div>
      </div>

      <div class="relative z-20 w-full">
        <div class="pt-4 sm:pt-10">
          <h2 class="text-nowrap text-center text-5xl font-bold text-yellow">
            The Vault
          </h2>
          <h2 class="mt-4 text-center text-lg text-white">
            Trade $INVBOE today
          </h2>
        </div>

        <Swiper
          :slides-per-view="1.5"
          :space-between="24"
          class="mt-10 max-h-[720px] w-full"
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
    </div>

    <img
      loading="lazy"
      src="/public/cloud-ballon.webp"
      alt=""
      class="absolute -left-28 top-52 -z-10 h-[102px] w-[223px]"
    />
  </section>
</template>
