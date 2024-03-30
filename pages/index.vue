<script setup lang="ts">

import TheHeader from "~/components/TheHeader.vue";
import SectionBlowDoors from "~/components/BlowDoorsSection.vue";
import YellowLogoStrip from "~/components/YellowLogoStripSection.vue";
import WTFBoeing from "~/components/WTFBoeingSection.vue";
import BoeingNews from "~/components/BoeingNewsSection.vue";
import InvboeSection from "~/components/InvboeSection.vue";
import VaultSection from "~/components/VaultSection.vue";
import CommunitySection from "~/components/CommunitySection.vue";
import TokenomicSection from "~/components/TokenomicSection.vue";
import PercentsSection from "~/components/PercentsSection.vue";
import ExcitingLifeSection from "~/components/ExcitingLifeSection.vue";
import InvitationSection from "~/components/InvitationSection.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<template>
  <div class="flex flex-col items-center w-full  overflow-x-hidden">
    <TheHeader />
    <SectionBlowDoors/>
    <YellowLogoStrip/>
    <WTFBoeing />
    <BoeingNews/>
    <InvboeSection/>
    <VaultSection/>
    <CommunitySection/>
    <TokenomicSection/>
    <PercentsSection/>
    <ExcitingLifeSection/>
    <InvitationSection/>
    <TheFooter/>
  </div>
</template>

<style scoped>

</style>