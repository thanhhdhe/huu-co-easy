<script setup>
import { assets } from '@/data/homeContent'
</script>

<template>
  <section class="section intro">
    <h2 class="section-title">LỜI GIỚI THIỆU</h2>

    <div class="intro-grid intro-top">
      <p class="intro-copy">
        "Ong Nâu và Bí Mật của Đất Mẹ" là truyện tranh tương tác thuộc Dự án Hữu Cơ
        Easy - Mùa 2, dành cho trẻ em từ 3 tuổi trở lên. Cuốn sách ứng dụng công
        nghệ AR (thực tế tăng cường) để mang đến trải nghiệm học mà chơi sống động,
        giúp trẻ bước vào thế giới nông nghiệp hữu cơ một cách trực quan và đầy hứng
        thú.
      </p>
      <img :src="assets.bookCover" alt="Bìa sách Ong Nâu và Bí Mật của Đất Mẹ" class="intro-book" />
    </div>

    <div class="intro-grid intro-bottom">
      <img :src="assets.introScene" alt="Minh họa câu chuyện" class="intro-scene" />
      <div class="intro-copy-block">
        <p class="intro-copy">
          Thông qua hành trình khám phá của Ong Nâu, các em nhỏ sẽ được tìm hiểu về
          đất, cây trồng và những giá trị của nông nghiệp hữu cơ.
        </p>
        <p class="intro-copy">
          Mỗi trang sách không chỉ là câu chuyện tranh sinh động mà còn mở ra những
          trải nghiệm tương tác giúp trẻ chủ động khám phá kiến thức và nuôi dưỡng
          tình yêu thiên nhiên từ những năm đầu đời.
        </p>
      </div>
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

.intro {
  padding-top: 14px;
}

.intro-grid {
  display: grid;
  gap: 12px;
}

.intro-top {
  grid-template-columns: 1.2fr 0.9fr;
  align-items: start;
}

.intro-bottom {
  margin-top: 10px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.intro-copy,
.intro-copy-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.intro-copy {
  margin: 0;
  color: var(--ink-muted);
  font-size: 11px;
  line-height: 1.45;
}

.intro-book {
  width: 100%;
  transform: rotate(13deg);
}

.intro-scene {
  width: 100%;
  border-radius: 8px;
  padding: 15px;
}
</style>
