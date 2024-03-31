<script setup lang="ts">
import { computed, shallowRef } from "vue";
import IconTelegram from "~/assets/icons/IconTelegram.vue";
import IconTwitter from "~/assets/icons/IconTwitter.vue";
import learnMore from "assets/icons/IconLearnMore.vue";
import TelegramBlue from "assets/icons/IconTelegramBlue.vue";
import TwitterBlue from "assets/icons/IconTwitterBlue.vue";

const props = defineProps<{
  text: "yellow" | "white" | "primary";
  bg?: "yellow" | "white" | "none";
  border?: boolean;
  nameIcon?:
    | "telegram"
    | "twitter"
    | "learnMore"
    | "telegramBlue"
    | "twitterBlue";
  iconPosition?: "right" | "left";
}>();

const textColor = shallowRef(props.text ?? "primary");
const bgColor = shallowRef(props.bg ?? "none");
const icons = {
  telegram: IconTelegram,
  twitter: IconTwitter,
  learnMore: learnMore,
  telegramBlue: TelegramBlue,
  twitterBlue: TwitterBlue,
};

const currentIcon = computed(() => icons[props.nameIcon]);
</script>

<template>
  <button
    class="flex h-full w-full items-center justify-center gap-1 rounded-[30px] py-1.5 text-[10px] font-bold sm:text-base md:rounded-[40px]"
    :class="{
      'text-primary': textColor === 'primary',
      'text-white': textColor === 'white',
      'text-yellow': textColor === 'yellow',
      'bg-yellow': bgColor === 'yellow',
      'bg-white': bgColor === 'white',
      'border border-white  ': border,
    }"
  >
    <component
      v-if="iconPosition === 'left'"
      :is="currentIcon"
      class="h-3 w-3.5"
    />
    <slot />
    <component
      v-if="iconPosition === 'right'"
      :is="currentIcon"
      class="h-3 w-3.5"
    />
  </button>
</template>

<style scoped></style>
