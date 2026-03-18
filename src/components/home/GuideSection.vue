<script setup>
import { assets, guideSteps } from '@/data/homeContent'
</script>

<template>
  <section class="section guide">
    <h2 class="section-title">HƯỚNG DẪN SỬ DỤNG</h2>
    <div class="guide-shell">
      <ol class="guide-list">
        <li v-for="step in guideSteps" :key="step.id" class="guide-step" :class="`align-${step.align}`">
          <span class="step-badge">{{ step.id }}</span>
          <span class="step-text">{{ step.text }}</span>
        </li>
      </ol>
      <img :src="assets.mascot" alt="Nhân vật ong minh họa" class="guide-mascot" />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 18px;
}

.section-title {
  margin: 0 0 12px;
  color: var(--forest);
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1;
}

.guide {
  padding-top: 10px;
  padding-bottom: 14px;
}

.guide-shell {
  position: relative;
  min-height: 210px;
}

.guide-list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 74%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.guide-step {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
  border-radius: 999px;
  background: #66b748;
  color: #fff;
  padding: 2px 12px 2px 3px;
  box-shadow: inset 0 -2px 0 rgba(20, 73, 50, 0.3);
}

.align-right {
  margin-left: 32px;
}

.step-badge {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 28% 28%, #fff6aa 0%, #f8cb31 72%, #cc7f00 100%);
  border: 2px solid #7a4d00;
  color: #2c1d00;
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
}

.step-text {
  font-size: 9px;
  font-weight: 600;
  line-height: 1.28;
}

.guide-mascot {
  position: absolute;
  right: -20px;
  bottom: -6px;
  width: 145px;
  transform: scaleX(-1) rotate(7deg);
}
</style>
