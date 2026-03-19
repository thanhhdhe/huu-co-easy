<script setup>
import { assets, guideSteps } from '@/data/homeContent'
</script>

<template>
  <section class="guide">
    <div class="guide-card">
      <div class="guide-head">
        <h2 class="guide-title">Hướng dẫn sử dụng</h2>
        <p class="guide-subtitle">4 bước đơn giản để bắt đầu trải nghiệm AR</p>
      </div>

      <div class="guide-shell">
        <ol class="guide-list">
          <li v-for="step in guideSteps" :key="step.id" class="guide-step" :class="`align-${step.align}`">
            <span class="step-badge">{{ step.id }}</span>
            <div class="step-content">
              <span class="step-label">Bước {{ step.id }}</span>
              <p class="step-text">{{ step.text }}</p>
            </div>
          </li>
        </ol>
        <img :src="assets.mascot" alt="Nhân vật ong minh họa" class="guide-mascot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.guide {
  padding: 12px 12px 16px;
}

.guide-card {
  position: relative;
  border-radius: 22px;
  border: 1px solid #d2e8d6;
  background:
    radial-gradient(circle at 4% 6%, rgba(255, 241, 186, 0.65), transparent 36%),
    linear-gradient(180deg, #f8fff7 0%, #ebf8e7 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.72),
    0 14px 24px rgba(20, 73, 50, 0.16);
  padding: 14px 12px 16px;
}

.guide-card::before {
  content: '';
  position: absolute;
  top: 10px;
  right: 12px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(102, 183, 72, 0.26) 0%, transparent 70%);
  pointer-events: none;
}

.guide-head {
  position: relative;
  z-index: 1;
  margin-bottom: 12px;
}

.guide-title {
  margin: 0;
  color: var(--forest);
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 29px;
  font-weight: 800;
  line-height: 1;
}

.guide-subtitle {
  margin: 6px 0 0;
  color: #3b614e;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.guide-shell {
  position: relative;
  min-height: 242px;
  padding-right: 112px;
}

.guide-list {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.guide-step {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 56px;
  border-radius: 16px;
  border: 1px solid rgba(46, 109, 68, 0.2);
  background: linear-gradient(180deg, #ffffff 0%, #f4fcf2 100%);
  color: #203129;
  padding: 6px 10px 6px 6px;
  box-shadow: 0 7px 14px rgba(20, 73, 50, 0.1);
}

.align-right {
  margin-left: 22px;
}

.step-badge {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 30% 30%, #fff6a8 0%, #f8cf43 70%, #cf8602 100%);
  border: 2px solid #80510b;
  color: #2a1b00;
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
}

.step-content {
  min-width: 0;
}

.step-label {
  display: inline-block;
  margin-bottom: 2px;
  color: #2f7a49;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.step-text {
  margin: 0;
  font-size: 10.5px;
  font-weight: 600;
  line-height: 1.35;
}

.guide-mascot {
  position: absolute;
  right: -6px;
  bottom: -10px;
  width: 132px;
  transform: scaleX(-1) rotate(6deg);
  filter: drop-shadow(0 8px 14px rgba(20, 73, 50, 0.24));
}

@media (max-width: 415px) {
  .guide-shell {
    padding-right: 88px;
  }

  .align-right {
    margin-left: 14px;
  }

  .guide-mascot {
    width: 112px;
    right: -12px;
  }
}

@media (max-width: 360px) {
  .guide-title {
    font-size: 24px;
  }

  .guide-subtitle {
    font-size: 10px;
  }

  .guide-shell {
    padding-right: 0;
    min-height: unset;
  }

  .guide-mascot {
    position: static;
    display: block;
    width: 108px;
    margin: 8px 0 0 auto;
  }

  .align-right {
    margin-left: 0;
  }
}
</style>
