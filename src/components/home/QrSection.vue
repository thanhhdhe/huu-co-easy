<script setup>
import { assets } from '@/data/homeContent'
const openLink = () => {
  window.open('https://beacons.ai/huucoeasymua2', '_blank')
}
</script>

<template>
  <section class="qr">
    <div class="qr-card">
      <div class="qr-content">
        <p class="qr-eyebrow">Kết nối nhanh</p>
        <h3 class="qr-title">Quét mã để tìm hiểu thêm về dự án</h3>
        <p class="qr-description">
          Mở camera điện thoại và hướng vào mã QR để truy cập đầy đủ thông tin, nội dung mở rộng và
          các cập nhật mới nhất của dự án.
        </p>
        <ul class="qr-tags">
          <li>
            <button class="qr-tag" @click="openLink">
              Truy cập nhanh
            </button>
          </li>
        </ul>
      </div>

      <div class="qr-visual" aria-label="Mã QR dự án">
        <span class="qr-scan-line" aria-hidden="true"></span>
        <img :src="assets.qr" alt="Mã QR dự án Hữu Cơ Easy" class="qr-code" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.qr {
  padding: 14px 12px 18px;
}

.qr-card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  background:
    radial-gradient(circle at 88% 18%, rgba(136, 228, 178, 0.2), transparent 30%),
    radial-gradient(circle at 12% 0%, rgba(244, 212, 83, 0.2), transparent 34%),
    linear-gradient(135deg, #173f2d 0%, #1f583c 44%, #2b7650 100%);
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  box-shadow: 0 16px 26px rgba(16, 45, 33, 0.26);
  display: grid;
  gap: 14px;
}

.qr-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 40%);
  pointer-events: none;
}

.qr-content,
.qr-visual {
  position: relative;
  z-index: 1;
}

.qr-eyebrow {
  margin: 0;
  color: #d7f0de;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.qr-title {
  margin: 6px 0 0;
  color: #ffffff;
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 31px;
  line-height: 0.98;
  text-transform: none;
}

.qr-description {
  margin: 8px 0 0;
  color: #e6f7ea;
  font-size: 11px;
  line-height: 1.42;
  max-width: 34ch;
}

.qr-tags {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.qr-tag {
  appearance: none;
  border: none;
  outline: none;
  font-family: inherit;
}
.qr-tag {
  font-size: 11px;
  font-weight: 700;
  color: #fff;

  background: linear-gradient(135deg, #2ea85f, #1f7a47);
  border-radius: 999px;

  padding: 8px 16px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  box-shadow:
    0 6px 14px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  transition: all 0.2s ease;
}
.qr-tag:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.qr-tag:active {
  transform: translateY(1px) scale(0.97);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.25),
    inset 0 2px 4px rgba(0, 0, 0, 0.25);
}
.qr-tag:focus-visible {
  box-shadow:
    0 0 0 3px rgba(46, 168, 95, 0.5),
    0 6px 14px rgba(0, 0, 0, 0.25);
}
.qr-tag {
  position: relative;
  overflow: hidden;
}

.qr-tag::after {
  content: '';
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: skewX(-20deg);
}

.qr-tag:hover::after {
  left: 130%;
  transition: left 0.6s ease;
}
.qr-visual {
  justify-self: center;
  width: 142px;
  aspect-ratio: 1;
  border-radius: 18px;
  background: #fff;
  padding: 10px;
  border: 2px solid rgba(20, 73, 50, 0.15);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.88),
    0 10px 18px rgba(12, 30, 21, 0.35);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.qr-visual::before,
.qr-visual::after {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 12px;
  pointer-events: none;
}

.qr-visual::before {
  border: 1px solid rgba(25, 93, 57, 0.18);
}

.qr-visual::after {
  border: 1px dashed rgba(25, 93, 57, 0.22);
  inset: 12px;
}

.qr-code {
  width: 100%;
  border-radius: 8px;
}

.qr-scan-line {
  position: absolute;
  left: 16px;
  right: 16px;
  top: 16px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(34, 130, 77, 0) 0%, #2ea85f 50%, rgba(34, 130, 77, 0) 100%);
  box-shadow: 0 0 10px rgba(46, 168, 95, 0.9);
  animation: scan 2.8s ease-in-out infinite;
}

@keyframes scan {
  0% {
    top: 16px;
    opacity: 0.55;
  }

  50% {
    top: calc(100% - 18px);
    opacity: 1;
  }

  100% {
    top: 16px;
    opacity: 0.55;
  }
}

@media (min-width: 390px) {
  .qr-card {
    grid-template-columns: minmax(0, 1fr) 142px;
    align-items: center;
    gap: 12px;
  }

  .qr-visual {
    justify-self: end;
  }
}

@media (max-width: 370px) {
  .qr-title {
    font-size: 26px;
  }

  .qr-description {
    font-size: 10px;
  }

  .qr-visual {
    width: 126px;
  }
}
</style>
