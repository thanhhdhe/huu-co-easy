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
  border: 2px solid #ffffff;
  border-radius: 8px;
  background: linear-gradient(180deg, #66b748 39%, #f6e13e 100%);
  color: #101e10;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 7px 22px;
  box-shadow: 0 4px 0 #144932;
  transition: background 0.2s, box-shadow 0.2s, border-color 0.2s, transform 0.2s;
  text-decoration: none;
}

.hero-button:hover {
  transform: scale(1.05) translateX(-50%);
  background: linear-gradient(180deg, #45a226 39%, #ffe13e 100%);
  box-shadow: 0 6px 16px #14493233;
  border-color: #d3d3d3;
}
</style>
