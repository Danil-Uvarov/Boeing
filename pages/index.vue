<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
import BlowDoorsSection from "~/components/BlowDoorsSection.vue";
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
import WorkingSection from "~/components/WorkingSection.vue";
import RoadmapSection from "~/components/RoadmapSection.vue";
</script>

<template>
  <div class="flex w-full flex-col items-center overflow-x-hidden">
    <TheHeader />
    <BlowDoorsSection id="Blow" class="-scroll-mt-10" />
    <YellowLogoStrip class="scroll-mt-20" />
    <WTFBoeing id="About" />
    <BoeingNews id="News" class="scroll-mt-20" />
    <InvboeSection id="How" class="scroll-mt-20" />
    <VaultSection />
    <RoadmapSection id="Roadmap" />
    <CommunitySection id="Community" class="scroll-mt-20" />
    <TokenomicSection id="Tokenomics" />
    <PercentsSection />
    <ExcitingLifeSection />
    <WorkingSection />
    <InvitationSection />
    <TheFooter />
  </div>
</template>

<style scoped></style>
