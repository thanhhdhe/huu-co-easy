<script setup>
import { chapters } from '@/data/homeContent'
</script>

<template>
  <section class="section stories">
    <h2 class="section-title stories-title"><span>4</span> HỒI CHUYỆN</h2>
    <div class="story-grid">
      <article v-for="chapter in chapters" :key="chapter.id" class="story-card">
        <img :src="chapter.image" :alt="chapter.title" class="story-image" />
        <div class="story-meta">
          <span class="story-number">{{ chapter.id }}</span>
          <p class="story-title">{{ chapter.title }}</p>
        </div>
      </article>
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

.stories {
  padding-top: 6px;
}

.stories-title span {
  font-style: italic;
  margin-right: 6px;
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
}

.story-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 2px solid #cee6bf;
  border-radius: 4px;
}

.story-meta {
  margin-top: 5px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 5px;
}

.story-number {
  color: #1b1717;
  font-size: 10px;
  letter-spacing: 0.08em;
  font-weight: 600;
}

.story-title {
  margin: 0;
  color: #1b1717;
  font-size: 7px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 600;
}
</style>
