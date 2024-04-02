<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="">
    <div class="relative grid-cols-2 pb-8 pt-12 sm:container sm:grid">
      <div class="container w-full sm:px-5">
        <h3
          class="font-inter text-xl font-medium text-blue sm:inline sm:text-start sm:text-[32px]"
        >
          In
          <mark
            class="font-bold text-yellow"
            style="-webkit-text-stroke: 1px #0033a1"
            >$INVBOE</mark
          >
          we trust.
        </h3>
        <h3
          class="font-inter text-[32px] text-xl font-medium text-blue sm:inline sm:text-[32px]"
        >
          Not
          <mark class="font-boeing font-black text-blue">BOEING</mark>
          ... We dont trust those guys
        </h3>
        <p
          class="font-regular pt-2 font-inter text-[10px] text-blue sm:text-start sm:text-lg md:pt-6"
        >
          Building the best memeable community together and raising concerns
          about current states of aviation. A coin that can raise the green
          flags while Boeing can’t raise the red. Inverse Boeing is here to
          stay.
        </p>
        <BaseButton
          to="/buy"
          text="primary"
          bg="yellow"
          class="mt-4 max-w-[145px] py-1 md:mt-6"
          >Enter Presale</BaseButton
        >
      </div>
      <img
        loading="lazy"
        src="~/public/invboe.webp"
        class="mt-24 h-full max-h-[104px] w-full max-w-[304px] object-contain lg:max-h-[315px] lg:max-w-[918px]"
        alt=""
      />
      <img
        loading="lazy"
        src="../public/cloud-big.webp"
        alt=""
        class="absolute bottom-14 right-12 max-h-[141px] max-w-[2014px] sm:bottom-72 lg:-right-44 lg:bottom-5 lg:max-h-[426px] lg:max-w-[646px]"
      />
    </div>
  </section>
</template>
