<script setup lang="ts">
import NewLink from "assets/icons/NewLink.vue";
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
const modules = [Pagination]

const news = [
  {
    imgNews: '/public/ImageBoeingNewsFBI.webp',
    srcIcon: '/public/hieroglyph.png',
    title: 'F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims',
    subtitle: 'Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.'
  },
  {
    imgNews: '/public/ImageBoeingNewsFBI.webp',
    srcIcon: '/public/hieroglyph.png',
    title: 'F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims',
    subtitle: 'Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.'
  },
  {
    imgNews: '/public/ImageBoeingNewsFBI.webp',
    srcIcon: '/public/hieroglyph.png',
    title: 'F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims',
    subtitle: 'Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.'
  },]
console.log(Pagination)
</script>

<template>

  <article>
    <Swiper class="w-[175px] rounded-md mt-6 relative"
            :pagination="{dynamicBullets: true}"
            :modules="modules"
            :slides-per-view="1" :space-between="50">
      <SwiperSlide v-for="( item, index) in news" :key="index" :virtualIndex="index">
        <img src="/public/ImageBoeingNewsFBI.webp" alt="">
        <div class="p-3 bg-white">
          <img src="/public/hieroglyph.png" alt="" class="w-[75px] h-[10px]"/>
          <h3 class="font-bold text-[10px] pt-1">{{ item.title }}</h3>
          <p class="text-[8px]">{{ item.subtitle }}</p>
          <a class="flex justify-end">
            <NewLink class="w-2 h-2"/>
          </a>

        </div>
        </SwiperSlide>
    </Swiper>
  </article>
</template>