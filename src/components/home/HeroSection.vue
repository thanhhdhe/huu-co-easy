<script setup>
import { assets } from '@/data/homeContent'
</script>

<template>
  <header class="hero">
    <img :src="assets.hero" alt="Nền minh họa dự án" class="hero-scene" />
    <img :src="assets.logo" alt="Hữu Cơ Easy với Gen G" class="hero-logo" />
    <RouterLink to="/quet-ar" class="hero-button">AR Camera</RouterLink>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  height: 238px;
  overflow: hidden;
}

.hero-scene {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-logo {
  position: absolute;
  top: 24px;
  left: 50%;
  width: 106px;
  transform: translateX(-50%);
}

.hero-button {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  overflow: hidden;
  isolation: isolate;
  border: 2px solid #ffffff;
  border-radius: 8px;
  background: linear-gradient(180deg, #66b748 20%, #4ba82e 58%, #f6e13e 100%);
  color: #101e10;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 7px 22px;
  box-shadow:
    0 4px 0 #144932,
    0 8px 14px rgba(20, 73, 50, 0.26);
  transition: background 0.2s, box-shadow 0.2s, border-color 0.2s, transform 0.2s, filter 0.2s;
  text-decoration: none;
  animation: heroButtonFloat 3.2s ease-in-out infinite, heroButtonPulse 2.4s ease-in-out infinite;
}

.hero-button::before {
  content: '';
  position: absolute;
  top: -12%;
  bottom: -12%;
  left: -42%;
  width: 34%;
  transform: skewX(-22deg);
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.68) 50%, transparent 100%);
  animation: heroButtonShine 2.8s linear infinite;
  pointer-events: none;
}

.hero-button:focus-visible {
  outline: 2px solid #ffe66e;
  outline-offset: 3px;
}

.hero-button:hover {
  transform: translateX(-50%) translateY(-4px) scale(1.06);
  background: linear-gradient(180deg, #45a226 39%, #ffe13e 100%);
  box-shadow:
    0 4px 0 #144932,
    0 16px 26px rgba(20, 73, 50, 0.42);
  border-color: #ffffff;
  filter: saturate(1.1) brightness(1.08);
  animation: heroButtonFloat 3.2s ease-in-out infinite, heroButtonPulse 2.4s ease-in-out infinite, heroButtonBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
}

.hero-button:active {
  transform: translateX(-50%) translateY(2px) scale(0.98);
  box-shadow:
    0 2px 0 #144932,
    0 4px 8px rgba(20, 73, 50, 0.2);
  animation: none;
}

@keyframes heroButtonPulse {
  0%,
  100% {
    box-shadow:
      0 4px 0 #144932,
      0 8px 14px rgba(20, 73, 50, 0.26);
  }

  50% {
    box-shadow:
      0 4px 0 #144932,
      0 12px 18px rgba(20, 73, 50, 0.35);
  }
}

@keyframes heroButtonFloat {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-3px);
  }
}

@keyframes heroButtonBounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(-4px) scale(1.06);
  }

  50% {
    transform: translateX(-50%) translateY(-7px) scale(1.065);
  }
}

@keyframes heroButtonShine {
  0% {
    left: -42%;
  }

  45% {
    left: 116%;
  }

  100% {
    left: 116%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-button,
  .hero-button::before {
    animation: none;
  }
}
</style>
