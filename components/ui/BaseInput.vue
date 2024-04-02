<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  text: string;
  modelValue: string;
  maximumFractionDigits?: number;
}>();

const emit = defineEmits<{
  "update:model-value": [value: string];
}>();

const formatter = new Intl.NumberFormat("ru", {
  maximumFractionDigits: props.maximumFractionDigits,
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:model-value", newValue);
  },
});

const formattedValue = ref(value.value);

const update = (newValue: string) => {
  let isDot = false;

  const tmp = String(newValue).replace(/\s/g, "").replaceAll(".", ",");

  let parsed = parseFloat(tmp.replace(",", "."));

  if (tmp.at(-1) === ",") {
    if (tmp.split(",").length === 2) {
      isDot = true;
    }
  }

  if (parsed > 9_999_999_999) {
    parsed = 9_999_999_999;
  }

  if (isNaN(parsed)) {
    parsed = 0;
  }

  if (!tmp) {
    parsed = 0;
  }

  value.value = String(parsed);

  formattedValue.value = `${formatter.format(parsed)}${isDot ? "," : ""}`;
};

watch(
  () => props.modelValue,
  (newValue) => {
    formattedValue.value = formatter.format(parseFloat(newValue));
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div class="w-full">
    <h4 class="font-inter text-xs font-medium text-grey">
      {{ text }}
    </h4>
    <input
      v-model="formattedValue"
      placeholder="0"
      class="h-[43px] w-full outline-none"
      type="text"
      inputmode="numeric"
      @update:model-value="update"
    />
  </div>
</template>

<style scoped></style>
