<script setup lang="ts">
import News from "~/components/ui/news/News.vue";
import NewLink from "assets/icons/NewLink.vue";

const news = [
  {
    imgNews: "/Image-boeing-news-FBI.webp",
    srcIcon: "/hieroglyph.webp",
    title:
      "F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims",
    subtitle:
      "Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.",
  },
  {
    imgNews: "/Image-boeing-news-fliers.webp",
    srcIcon: "/hieroglyph-file.webp",
    title:
      "F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims",
    subtitle:
      "Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.",
  },
  {
    imgNews: "/Image-boeing-news-incidents.webp",
    srcIcon: "/hieroglyph.webp",
    title:
      "F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims",
    subtitle:
      "Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.",
  },
];
</script>

<template>
  <section class="container relative z-0 w-full">
    <div
      class="-mt-7 flex flex-col items-center rounded-[28px] bg-darkBlue px-[2rem] pb-12 pt-9"
    >
      <h2 class="text-nowrap text-4xl font-bold text-yellow">Boeing News</h2>
      <News class="sm:hidden" />
      <div class="hidden gap-5 sm:flex">
        <article
          class="flex flex-col"
          v-for="(item, index) in news"
          :key="index"
        >
          <img :src="item.imgNews" alt="" class="h-full max-h-[160px] w-full" />
          <div class="bg-white p-3">
            <img
              :src="item.srcIcon"
              alt=""
              class="h-full max-h-[10px] w-full max-w-[75px]"
            />
            <h3 class="pt-1 text-[10px] font-bold">{{ item.title }}</h3>
            <p class="text-[8px]">{{ item.subtitle }}</p>
            <a class="flex justify-end">
              <NewLink class="h-2 w-2" />
            </a>
          </div>
        </article>
      </div>
    </div>
    <img
      src="/public/cloud-big.webp"
      alt=""
      class="absolute -left-[160px] bottom-0 -z-10 h-[205px] w-[311px]"
    />
  </section>
</template>
