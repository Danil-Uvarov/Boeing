<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
</script>

<template>
  <section class="w-full bg-primary pb-10 pt-16 lg:pb-[101px] lg:pt-32">
    <div
      class="container flex flex-col justify-center lg:grid lg:grid-cols-2 lg:gap-20"
    >
      <img
        src="/public/blow-doors-airplane.webp"
        loading="lazy"
        alt=""
        class="top-11 h-full max-h-[640px] w-full max-w-[720px] lg:top-0"
      />
      <div class="flex w-full flex-col lg:max-w-[720px]">
        <h2
          class="text-start text-4xl font-bold text-yellow lg:text-5xl xl:text-8xl"
        >
          Blow Your Doors Wide Open to $INVBOE
        </h2>
        <p
          class="lg:pt-26 pt-[18px] text-start text-xs font-medium text-white lg:text-2xl"
        >
          Want to take off? Well Inverse Boeing Coin is here to help. Inverse
          Boeing is a coin based on base. We make traveling to space easy, you
          just have to remember one thing $INVBOE to Mars.
        </p>
        <div class="flex w-full flex-wrap gap-4 pt-5">
          <BaseButton
            class="max-w-[111px] px-3.5 py-3 lg:max-w-[99px]"
            text="primary"
            bg="white"
            >TRADE</BaseButton
          >
          <BaseButton
            class="max max-w-[148px] px-6 py-3"
            text="white"
            bg="none"
            border
            name-icon="telegram"
            icon-position="left"
            >Telegram
          </BaseButton>
          <BaseButton
            class="max-w-[148px] px-6 py-3"
            text="white"
            bg="none"
            border
            name-icon="twitter"
            icon-position="left"
            >Twitter
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
