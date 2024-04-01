<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

const percents = [
  {
    percent: "2.5",
    subtitle: "Seed",
  },
  {
    percent: "5.0",
    subtitle: "Airdrop/Presale",
  },
  {
    percent: "15",
    subtitle: "Future Dev",
  },
  {
    percent: "18",
    subtitle: "Team",
  },
  {
    percent: "1.5",
    subtitle: "Advisors",
  },
  {
    percent: "7.0",
    subtitle: "Partnerships",
  },
  {
    percent: "12",
    subtitle: "Burn",
  },
  {
    percent: "18",
    subtitle: "Marketing",
  },
  {
    percent: "1.0",
    subtitle: "Operations",
  },
  {
    percent: "20",
    subtitle: "Liquidity Provider",
  },
];
</script>

<template>
  <section
    class="container flex flex-col items-center gap-[39px] pt-9 lg:pt-20"
  >
    <div class="flex flex-wrap items-center justify-center gap-9 lg:gap-[72px]">
      <ul v-for="(percent, index) in percents" :key="index">
        <li class="flex flex-col items-center justify-center gap-2 text-center">
          <h3
            class="bg-[url('/public/background-skye.webp')] bg-contain bg-clip-text font-kanit text-[50px] font-bold text-transparent lg:text-[100px]"
          >
            {{ percent.percent }}%
          </h3>
          <h3 class="font-kanit font-bold lg:text-4xl">
            {{ percent.subtitle }}
          </h3>
        </li>
      </ul>
    </div>
    <BaseButton text="primary" bg="yellow" class="max-w-[131px]"
      >Learn More
    </BaseButton>
  </section>
</template>
