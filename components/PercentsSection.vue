<script setup lang="ts">
import BaseButton from "~/components/ui/BaseButton.vue";

const percents = [{
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}, {
  percent: '25',
  subtitle: 'Seed'
}]
</script>

<template>
  <section class="container flex flex-wrap gap-9 items-center justify-center pt-9">
    <ul v-for="(percent, index) in percents" :key="index">
      <li class="flex flex-col gap-2 text-center items-center" style="font-family: 'Kanit'">
        <h3 class="font-bold text-5xl  bg-clip-text  text-transparent bg-contain bg-[url('/public/background-skye.webp')]">
          {{
            percent.percent
          }}%</h3>
        <h3 class="font-bold ">{{ percent.subtitle }}</h3>
      </li>
    </ul>
    <BaseButton text="primary" bg="yellow" >Learn More</BaseButton>
  </section>
</template>