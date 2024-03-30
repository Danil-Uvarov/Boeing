<script setup lang="ts">
import IconLogo from "assets/icons/IconLogo.vue";
import IconTelegramBlack from "assets/icons/IconTelegramBlack.vue";
import IconTwitterBlack from "assets/icons/IconTwitterBlack.vue";
</script>

<template>
  <footer class="bg-[url('/public/background-skye.webp')] bg-cover w-full pt-5 pb-2.5 bg-no-repeat">
    <div class="container flex justify-between">
      <div class="flex flex-col gap-2">
        <IconLogo/>
        <p class="font-semibold text-[8px]" style="font-family:'Inter' ">GROK represents a new frontier in
          conversational AI technology, offering humor along with
          unparalleled intelligence.</p>
        <h5 class="text-white text-[8px]" style="font-family:'Inter'">© $BOIENG 2023</h5>
      </div>
      <nav class="flex gap-8">
        <ul class="flex flex-col gap-3">
          <li>
            <IconTelegramBlack class="max-w-5 max-h-3"/>
          </li>
          <li>
            <IconTwitterBlack class="max-w-3 max-h-3"/>
          </li>
        </ul>
        <ul class="flex flex-col gap-0.5">
          <li class="font-semibold" style="font-family:'Inter'">Home</li>
          <li class="font-semibold" style="font-family:'Inter'">About</li>
          <li class="font-semibold" style="font-family:'Inter'">Tokenomics</li>
          <li class="font-semibold" style="font-family:'Inter'">Buy</li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
