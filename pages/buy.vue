<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import Arrow from "~/components/icons/Arrow.vue";
import IconEtherscan from "~/components/icons/IconEtherscan.vue";
import IconCoinMarketCap from "~/components/icons/IconCoinMarketCap.vue";
import { ref } from "vue";
import BaseInput from "~/components/ui/BaseInput.vue";

const x = 37500;

const solana = ref("1");
const inversboeng = ref(`${x}`);

const changeSolana = (value: string = "0") => {
  const result = parseFloat(value) / x;

  solana.value = String(result.toFixed(6));
};

const changeBoeing = (value: string = "0") => {
  const result = parseFloat(value) * x;

  inversboeng.value = String(result.toFixed(0));
};
</script>

<template>
  <div class="relative">
    <img
      loading="lazy"
      src="/background-skye.webp"
      alt=""
      class="absolute left-0 -z-10 h-full w-full object-cover"
    />
    <div class="container flex w-full flex-col items-center gap-10 py-20">
      <h1
        class="small-text-shadow text-center font-inter text-4xl font-bold leading-[1.05] text-white md:text-[52px]"
      >
        BUY
        <mark class="text-yellow"> $INVBOE</mark>
        Pre-Sale Today!
      </h1>
      <div class="flex w-full flex-col gap-2">
        <h2
          class="small-text-shadow text-center font-inter text-2xl font-black text-white md:text-lg"
        >
          Presale Address
        </h2>
        <p
          class="small-text-shadow max-w-full break-words text-center font-inter text-lg font-bold text-yellow"
        >
          87ygfe7B5So1QG92CteLDBrXqoGcLfiQ9X2rmo73qPjM
        </p>
      </div>
      <div class="font-inter text-[18px] lg:text-[20px]">
        <p class="font-bold text-yellow">
          Inverse Boeing Pre-Sale Instructions
        </p>
        <ol class="flex max-w-[800px] flex-col gap-4 pt-4 font-medium">
          <li>
            1. Copy Wallet Address Listed above and send a minimum of ## Sol to
            that address.
          </li>
          <li>
            2. Save the conformation and make sure to not change wallets before
            Coin Launch.
          </li>
          <li>
            3. Upon Contract Deployment and prior to Coin launch you will
            receive your $Invboe tokens on that same wallet.
          </li>
        </ol>
      </div>
      <div
        class="relative flex w-full max-w-[496px] flex-col items-center gap-6 px-4 pb-12 pt-6"
      >
        <div
          class="absolute inset-0 top-0 -z-10 rounded-2xl bg-white opacity-[25%]"
        />
        <BaseButton
          text="yellow"
          bg="primary"
          class="w-full max-w-[224px] bg-primary"
          >Pre-Sale Price Calculator
        </BaseButton>
        <div class="flex w-full items-center rounded-2xl bg-white p-4">
          <BaseInput
            v-model="solana"
            text="You pay"
            :maximum-fraction-digits="5"
            @update:model-value="changeBoeing"
          />
          <BaseButton
            text="white"
            class="w-full max-w-[160px] border border-yellow bg-primary"
          >
            Solana
          </BaseButton>
        </div>
        <Arrow
          class="z-10 -my-10 h-10 w-10 rounded-xl border-4 border-yellow bg-white"
        />
        <div class="flex w-full items-center rounded-2xl bg-white p-4">
          <BaseInput
            v-model="inversboeng"
            text="You receive"
            @update:model-value="changeSolana"
          />
          <BaseButton
            text="white"
            class="w-full max-w-[160px] border border-yellow bg-primary"
          >
            Inverse Boeing
          </BaseButton>
        </div>
      </div>
      <h3
        class="max-w-[617px] text-center font-inter text-xs font-semibold leading-[1.2] text-white md:text-[14px]"
      >
        <mark class="text-yellow">LEGAL DISCLAIMER:</mark>
        $INVBOE is a crypto coin with no intrinsic value or expectation of
        financial return. Just because some people are getting ridiculously rich
        buying crypto doesn’t mean you definitely will. INVBOE is to be used
        strictly for getting laid and for entertainment purposes only.
      </h3>
      <div class="flex gap-10">
        <div class="flex gap-2.5">
          <IconEtherscan class="bg-primary" />
          <span class="text-white">Etherscan</span>
        </div>
        <div class="flex gap-2.5">
          <IconCoinMarketCap /> <span class="text-white">CoinMarketCap</span>
        </div>
      </div>
    </div>
  </div>
</template>
