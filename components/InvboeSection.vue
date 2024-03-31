<script setup lang="ts">
import IconInvboe from "assets/icons/IconInvboe.vue";
</script>

<template>
  <section class="">
    <div class="relative grid-cols-2 pt-12 sm:container sm:grid">
      <div class="container w-full sm:p-0">
        <h3
          class="text-center font-inter text-xl font-light text-blue sm:inline sm:text-start sm:text-[32px]"
        >
          In
          <mark
            class="font-bold text-yellow"
            style="-webkit-text-stroke: 1.5px #0033a1"
            >$INVBOE</mark
          >
          we trust.
        </h3>
        <h3
          class="text-center font-inter text-[32px] text-xl font-light text-blue sm:inline sm:text-start sm:text-[32px]"
        >
          Not
          <mark class="font-boeing font-black text-blue">BOEING</mark>
          ... We dont trust those guys
        </h3>
        <p
          class="font-regular pt-6 text-center font-inter text-[10px] text-blue sm:text-start sm:text-lg"
        >
          Building the best memeable community together and raising concerns
          about current states of aviation. A coin that can raise the green
          flags while Boeing can’t raise the red. Inverse Boeing is here to
          stay.
        </p>
      </div>
      <img
        src="~/public/invboe.webp"
        class="mt-26 -ml-20 h-full w-full object-contain sm:-ml-8 sm:mt-10 xl:-ml-56 xl:mt-28 2xl:-ml-40 2xl:mt-16"
        alt=""
      />
      <img
        src="../public/cloud-big.webp"
        alt=""
        class="absolute -bottom-20 -right-40 sm:-right-[60%] md:-right-[50%] xl:-right-40"
      />
    </div>
  </section>
</template>
