<script setup>
import { computed, ref } from 'vue'
import { chapters } from '@/data/homeContent'

const activeIndex = ref(0)
const slideCount = chapters.length

const trackStyle = computed(() => ({
  transform: `translateX(-${activeIndex.value * 100}%)`,
}))

const activeChapter = computed(() => chapters[activeIndex.value])

const goToSlide = (index) => {
  if (!slideCount) {
    return
  }

  activeIndex.value = (index + slideCount) % slideCount
}

const showNext = () => {
  goToSlide(activeIndex.value + 1)
}

const showPrev = () => {
  goToSlide(activeIndex.value - 1)
}
</script>

<template>
  <section class="stories" tabindex="0" @keydown.left.prevent="showPrev" @keydown.right.prevent="showNext">
    <div class="stories-card">
      <div class="stories-head">
        <div>
    
          <h2 class="stories-title">4 hồi chuyện</h2>
        </div>

        <div class="stories-controls" role="group" aria-label="Điều hướng hồi chuyện">
          <button type="button" class="control-btn" aria-label="Xem hồi trước" @click="showPrev">
            <span aria-hidden="true">&lsaquo;</span>
          </button>
          <button type="button" class="control-btn" aria-label="Xem hồi tiếp theo" @click="showNext">
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        </div>
      </div>

      <div class="carousel" aria-live="polite">
        <div class="carousel-track" :style="trackStyle">
          <article v-for="chapter in chapters" :key="chapter.id" class="story-slide">
            <img :src="chapter.image" :alt="chapter.title" class="story-image" />
            <div class="story-overlay">
              <span class="story-number">Hồi {{ chapter.id }}</span>
              <p class="story-title">{{ chapter.title }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="stories-footer">
        <!-- <p class="current-story">{{ activeChapter?.title }}</p> -->
        <div class="stories-dots" aria-label="Danh sách hồi chuyện">
          <button
            v-for="(chapter, index) in chapters"
            :key="chapter.id"
            type="button"
            class="dot"
            :class="{ 'is-active': index === activeIndex }"
            :aria-label="`Chuyển đến hồi ${chapter.id}`"
            :aria-current="index === activeIndex ? 'true' : undefined"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories {
  padding: 12px 12px 16px;
}

.stories-card {
  border-radius: 22px;
  border: 1px solid #d8e6cb;
  background:
    radial-gradient(circle at 94% 2%, rgba(253, 222, 91, 0.28), transparent 28%),
    linear-gradient(180deg, #f8fff5 0%, #eaf6e4 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.75),
    0 14px 26px rgba(20, 73, 50, 0.16);
  padding: 14px 12px 12px;
}

.stories-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}

.stories-kicker {
  margin: 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #3f6d4d;
}

.stories-title {
  margin: 5px 0 0;
  color: var(--forest);
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 800;
  line-height: 0.95;
  text-transform: uppercase;
}

.stories-title span {
  display: inline-flex;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  color: #173321;
  background: radial-gradient(circle at 35% 35%, #fffab5 0%, #f5cc3d 74%, #cc8202 100%);
  border: 2px solid #7f500a;
  font-size: 18px;
  line-height: 1;
}

.stories-controls {
  display: inline-flex;
  gap: 6px;
}

.control-btn {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(20, 73, 50, 0.2);
  border-radius: 10px;
  background: #fff;
  color: #1a4f36;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.control-btn:hover {
  background: #eef9ea;
  transform: translateY(-1px);
  box-shadow: 0 6px 12px rgba(19, 72, 49, 0.14);
}

.control-btn:focus-visible,
.dot:focus-visible {
  outline: 2px solid #2a8a53;
  outline-offset: 2px;
}

.carousel {
  margin-top: 12px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #d1e5ce;
  background: #fff;
}

.carousel-track {
  display: flex;
  transition: transform 0.42s cubic-bezier(0.22, 0.61, 0.36, 1);
  will-change: transform;
}

.story-slide {
  min-width: 100%;
  position: relative;
}

.story-image {
  width: 100%;
  aspect-ratio: 3 / 3;
  object-fit: cover;
  display: block;
}

.story-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(10, 27, 18, 0) 0%, rgba(10, 27, 18, 0.75) 100%);
  color: #fff;
  padding: 20px 12px 10px;
}

.story-number {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d3f0c8;
}

.story-title {
  margin: 3px 0 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
}

.stories-footer {
  margin-top: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.current-story {
  margin: 0;
  color: #2f5941;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.stories-dots {
  display: inline-flex;
  gap: 6px;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 0;
  background: #9bc9a1;
  cursor: pointer;
  padding: 0;
  transition: width 0.2s ease, background 0.2s ease;
}

.dot.is-active {
  width: 24px;
  background: #2f884f;
}

@media (max-width: 370px) {
  .stories-title {
    font-size: 25px;
  }

  .stories-title span {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }

  .story-title {
    font-size: 13px;
  }

  .stories-footer {
    flex-direction: column;
    align-items: center;
  }
}
</style>
