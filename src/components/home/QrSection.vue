<script setup>
import { assets } from '@/data/homeContent'
</script>

<template>
  <section class="section qr">
    <div class="qr-landscape">
      <h3 class="qr-title">QUÉT MÃ ĐỂ TÌM HIỂU THÊM VỀ DỰ ÁN</h3>
      <img :src="assets.qr" alt="Mã QR dự án" class="qr-code" />
    </div>
  </section>
</template>

<style scoped>
.qr {
  padding: 0;
}

.qr-landscape {
  position: relative;
  min-height: 136px;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0 46%, #d6f4ce 47%, #9dd77e 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px 12px;
}

.qr-landscape::before {
  content: '';
  position: absolute;
  left: -28px;
  right: 47%;
  bottom: 22px;
  height: 42px;
  background: #67b179;
  border-radius: 60% 40% 0 0;
}

.qr-landscape::after {
  content: '';
  position: absolute;
  left: 41%;
  right: -22px;
  bottom: 15px;
  height: 50px;
  background: #70b8c7;
  opacity: 0.78;
  border-radius: 44% 56% 0 0;
}

.qr-title,
.qr-code {
  position: relative;
  z-index: 1;
}

.qr-title {
  margin: 0;
  max-width: 62%;
  color: #232323;
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 24px;
  letter-spacing: 0.05em;
  line-height: 1.1;
  text-transform: uppercase;
}

.qr-code {
  width: 82px;
  background: #fff;
  border: 4px solid #fff;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
}

@media (max-width: 370px) {
  .qr-title {
    font-size: 20px;
  }
}
</style>
