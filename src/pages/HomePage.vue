<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import StoriesSection from '@/components/home/StoriesSection.vue'
import GuideSection from '@/components/home/GuideSection.vue'
import QrSection from '@/components/home/QrSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
</script>

<template>
  <main class="poster" data-node-id="1:2">
    <HeroSection />
    <IntroSection />
    <StoriesSection />
    <GuideSection />
    <QrSection />
    <ContactSection />
  </main>
</template>

<style scoped>
.poster {
  width: min(100%, 450px);
  margin: 0 auto;
  background: var(--paper);
  box-shadow: 0 18px 45px rgba(20, 73, 50, 0.24);
  overflow: hidden;
}

@media (min-width: 560px) {
  .poster {
    margin: 22px auto;
    border-radius: 18px;
  }
}
</style>
