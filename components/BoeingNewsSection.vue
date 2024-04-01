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
    href: "https://www.nytimes.com/2024/03/22/us/politics/fbi-investigation-boeing.html",
  },
  {
    imgNews: "/Image-boeing-news-fliers.webp",
    srcIcon: "/hieroglyph-file.webp",
    title:
      "F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims",
    subtitle:
      "Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.",
    href: "https://www.foxbusiness.com/lifestyle/fliers-trying-avoid-boeing-planes-turning-prayer-anti-anxiety-meds-report.amp",
  },
  {
    imgNews: "/Image-boeing-news-incidents.webp",
    srcIcon: "/hieroglyph.webp",
    title:
      "F.B.I. Tells Passengers on Alaska Flight They May Have Been Crime Victims",
    subtitle:
      "Letters sent by the bureau’s Seattle office are a sign that the Justice Department’s investigation into Boeing, the maker of the plane whose fuselage panel blew off, is ramping up.",
    href: "https://www.nytimes.com/2024/03/18/travel/united-airlines-boeing-airplane-safety.html",
  },
];
</script>

<template>
  <section class="container relative z-20 w-full">
    <div
      class="-mt-7 flex flex-col items-center rounded-[28px] bg-darkBlue px-[2rem] pb-12 pt-14 xl:pt-20"
    >
      <img
        loading="lazy"
        src="/public/cloud-big.webp"
        alt=""
        class="absolute -left-48 -top-40 z-10 h-full max-h-[213px] sm:-left-32 sm:-top-28 sm:max-w-[323px] xl:-left-32 xl:-top-36 xl:max-h-[326px] xl:max-w-[600px]"
      />
      <h2 class="text-nowrap text-4xl font-bold text-yellow md:text-5xl">
        Boeing News
      </h2>
      <News class="sm:hidden" :news="news" />
      <div class="hidden grid-cols-3 gap-5 pt-12 sm:grid xl:pt-20">
        <article
          class="flex flex-col"
          v-for="(item, index) in news"
          :key="index"
        >
          <img
            loading="lazy"
            :src="item.imgNews"
            alt=""
            class="h-full max-h-[160px] w-full"
          />
          <div class="h-full bg-white p-3">
            <img
              loading="lazy"
              :src="item.srcIcon"
              alt=""
              class="h-full max-h-[10px] w-full max-w-[75px] object-contain sm:max-h-[26px] sm:max-w-[177px]"
            />
            <h3 class="pt-1 text-[10px] font-bold sm:text-base lg:text-2xl">
              {{ item.title }}
            </h3>
            <p class="font-regular lg::text-base text-[8px] sm:pt-4 sm:text-xs">
              {{ item.subtitle }}
            </p>
            <a class="mb-8 flex cursor-pointer justify-end" :href="item.href">
              <NewLink class="h-2 w-2 sm:h-4 sm:w-4" />
            </a>
          </div>
        </article>
      </div>
    </div>
    <img
      loading="lazy"
      src="/public/cloud-ballon.webp"
      alt=""
      class="absolute -left-[120px] bottom-0 -z-10 hidden h-[205px] w-[311px] sm:block"
    />
  </section>
</template>
