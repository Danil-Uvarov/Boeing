<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";
import Arrow from "assets/icons/Arrow.vue";
import IconEtherscan from "assets/icons/IconEtherscan.vue";
import IconCoinMarketCap from "assets/icons/IconCoinMarketCap.vue";
import { ref } from "vue";
import BaseInput from "~/components/ui/BaseInput.vue";

const inputCalculate = ref();
const calculates = () => {};
</script>

<template>
  <div class="relative">
    <img
      loading="lazy"
      src="/background-skye.webp"
      alt=""
      class="absolute inset-0 left-0 -z-10 h-full w-full object-cover"
    />
    <div class="container flex w-full flex-col items-center gap-10 py-20">
      <h1
        class="text-center font-inter text-4xl font-bold text-white md:text-3xl"
      >
        BUY
        <mark class="text-yellow"> $INVBOE</mark>
        Pre-Sale Today!
      </h1>
      <div class="flex flex-col gap-2">
        <h2
          class="text-center font-inter text-2xl font-black text-white md:text-lg"
        >
          Presale Address
        </h2>
        <p class="font-inter text-lg font-bold text-yellow">
          0x9e8412f74d2d4cf01B650021922dFcC1Ab99dbad
        </p>
      </div>
      <div class="font-inter text-xl font-bold">
        <p class="text-yellow">
          How to Bridge to Base and Buy Inverse Boeing (Pre-Sale)
        </p>
        <ol class="flex flex-col gap-4 pt-4">
          <li>
            1. Set up a crypto wallet on the Base network using Coinbase Wallet.
            If you're using a different wallet like MetaMask, follow these steps
            to connect to Base.
          </li>
          <li>
            2. Transfer Ethereum (ETH) directly to your Base network wallet or
            send it to your Ethereum wallet and bridge ETH to Base via the
            official Coinbase bridge or the Orbiter Finance bridge.
          </li>
          <li>
            3. Transfer Base to our the listed wallet to receive Inverse Boeing
            Token post contract Deployment Period, you will receive the tokens
            to the same wallet address.
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
          <div class="w-full">
            <h4 class="font-inter text-xs font-medium text-grey">You pay</h4>
            <BaseInput />
          </div>
          <BaseButton
            text="white"
            class="w-full max-w-[160px] border border-yellow bg-primary"
            >BASE
          </BaseButton>
        </div>
        <Arrow
          class="z-10 -my-10 h-10 w-10 rounded-xl border-4 border-yellow bg-white"
        />
        <div class="flex w-full items-center rounded-2xl bg-white p-4">
          <div class="w-full">
            <h4 class="font-inter text-xs font-medium text-grey">
              You receive
            </h4>
            <BaseInput />
          </div>
          <BaseButton
            text="white"
            class="w-full max-w-[160px] border border-yellow bg-primary"
            >Inverse Boeing
          </BaseButton>
        </div>
      </div>
      <h3
        class="max-w-[617px] text-center font-inter text-sm font-semibold text-white md:text-[8px]"
      >
        <mark class="text-yellow">LEGAL DISCLAIMER:</mark> $INVBOE is a crypto
        coin with no intrinsic value or expectation of financial return. Just
        because some people are getting ridiculously rich buying crypto doesn’t
        mean you definitely will. INVBOE is to be used strictly for getting laid
        and for entertainment purposes only.
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
