<script setup lang="ts">
import IconInvboe from "assets/icons/IconInvboe.vue";
</script>

<template>
  <section class="relative grid-cols-2 pt-12 sm:container sm:grid">
    <div class="container w-full sm:p-0">
      <h3
        class="text-center font-inter text-xl font-light text-blue sm:inline sm:text-start sm:text-[32px]"
      >
        In
        <mark class="font-bold text-yellow">$INVBOE</mark>
        we trust.
      </h3>
      <h3
        class="text-center font-inter text-[32px] text-xl font-light text-blue sm:inline sm:text-start sm:text-[32px]"
      >
        Not
        <mark class="font-inter font-black italic text-blue">BOEING...</mark>
        We dont trust those guys
      </h3>
      <p
        class="pt-6 text-center font-inter text-[10px] text-blue sm:text-start sm:text-lg"
      >
        Building the best memeable community together and raising concerns about
        current states of aviation. A coin that can raise the green flags while
        Boeing can’t raise the red. Inverse Boeing is here to stay.
      </p>
    </div>
    <img
      src="~/public/invboe.webp"
      class="-ml-20 mr-20 h-full w-full object-contain sm:-ml-40 sm:mt-16"
      alt=""
    />
    <img
      src="../public/cloud-big.webp"
      alt=""
      class="absolute -bottom-20 -right-40"
    />
  </section>
</template>
