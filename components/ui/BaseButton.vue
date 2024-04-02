<script setup lang="ts">
import { computed, shallowRef } from "vue";
import IconTelegram from "~/components/icons/IconTelegram.vue";
import IconTwitter from "~/components/icons/IconTwitter.vue";
import learnMore from "~/components/icons/IconLearnMore.vue";
import TelegramBlue from "~/components/icons/IconTelegramBlue.vue";
import TwitterBlue from "~/components/icons/IconTwitterBlue.vue";

const props = defineProps<{
  text: "yellow" | "white" | "primary";
  border?: boolean;
  bg?: "yellow" | "white" | "none" | "primary";
  nameIcon?:
    | "telegram"
    | "twitter"
    | "learnMore"
    | "telegramBlue"
    | "twitterBlue";
  iconPosition?: "right" | "left";
  to?: string;
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
  <NuxtLink
    :to="to"
    class="flex h-full max-h-[48px] w-full items-center justify-center gap-1 rounded-[30px] py-1.5 text-[10px] font-bold sm:text-base md:rounded-[40px]"
    :class="{
      'text-primary': textColor === 'primary',
      'text-white': textColor === 'white',
      'text-yellow': textColor === 'yellow',
      'bg-yellow': bgColor === 'yellow',
      'bg-white': bgColor === 'white',
      'bg-primary': bgColor === 'primary',
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
  </NuxtLink>
</template>

<style scoped></style>
