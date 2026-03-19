<script setup>
import { assets } from '@/data/homeContent'
</script>

<template>
  <section class="intro">
    <div class="intro-card">
      <header class="intro-head">
        <p class="intro-kicker">Dự án Hữu Cơ Easy - Mùa 2</p>
        <h2 class="intro-title">Lời giới thiệu</h2>
      </header>

      <div class="intro-grid intro-top">
        <div class="intro-primary">
          <p class="intro-copy">
            "Ong Nâu và Bí Mật của Đất Mẹ" là truyện tranh tương tác thuộc Dự án Hữu Cơ
            Easy - Mùa 2, dành cho trẻ em từ 3 tuổi trở lên. Cuốn sách ứng dụng công nghệ
            AR (thực tế tăng cường) để mang đến trải nghiệm học mà chơi sống động, giúp trẻ
            bước vào thế giới nông nghiệp hữu cơ một cách trực quan và đầy hứng thú.
          </p>

          <ul class="intro-tags" aria-label="Điểm nổi bật của dự án">
            <li class="intro-tag">Tương tác AR</li>
            <li class="intro-tag">Phù hợp từ 3+ tuổi</li>
            <li class="intro-tag">Học mà chơi</li>
          </ul>
        </div>

        <figure class="intro-book-frame">
          <img :src="assets.bookCover" alt="Bìa sách Ong Nâu và Bí Mật của Đất Mẹ" class="intro-book" />
        </figure>
      </div>

      <div class="intro-grid intro-bottom">
        <figure class="intro-scene-frame">
          <img :src="assets.introScene" alt="Minh họa câu chuyện" class="intro-scene" />
        </figure>

        <div class="intro-copy-block">
          <p class="intro-copy">
            Thông qua hành trình khám phá của Ong Nâu, các em nhỏ sẽ được tìm hiểu về đất,
            cây trồng và những giá trị của nông nghiệp hữu cơ.
          </p>
          <p class="intro-copy">
            Mỗi trang sách không chỉ là câu chuyện tranh sinh động mà còn mở ra những trải
            nghiệm tương tác giúp trẻ chủ động khám phá kiến thức và nuôi dưỡng tình yêu
            thiên nhiên từ những năm đầu đời.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  padding: 12px 12px 16px;
}

.intro-card {
  position: relative;
  border-radius: 22px;
  border: 1px solid #d8e6d4;
  background:
    radial-gradient(circle at 6% -10%, rgba(254, 216, 99, 0.28), transparent 34%),
    radial-gradient(circle at 88% 14%, rgba(102, 183, 72, 0.18), transparent 34%),
    linear-gradient(180deg, #f9fff7 0%, #edf8ea 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.74),
    0 14px 26px rgba(20, 73, 50, 0.15);
  padding: 14px 12px;
  overflow: hidden;
}

.intro-card::before {
  content: '';
  position: absolute;
  width: 110px;
  height: 110px;
  right: -36px;
  top: -30px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(102, 183, 72, 0.2) 0%, transparent 72%);
  pointer-events: none;
}

.intro-head {
  position: relative;
  z-index: 1;
}

.intro-kicker {
  margin: 0;
  color: #3b7052;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.intro-title {
  margin: 6px 0 0;
  color: var(--forest);
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 31px;
  font-weight: 800;
  line-height: 0.96;
  text-transform: uppercase;
}

.intro-grid {
  display: grid;
  gap: 12px;
}

.intro-top {
  margin-top: 12px;
  grid-template-columns: 1.2fr 0.86fr;
  align-items: center;
}

.intro-bottom {
  margin-top: 12px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.intro-primary {
  border-radius: 14px;
  border: 1px solid #d6e7d5;
  background: rgba(255, 255, 255, 0.8);
  padding: 11px 10px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.intro-copy-block {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 14px;
  border: 1px solid #d6e7d5;
  background: rgba(255, 255, 255, 0.76);
  padding: 11px 10px;
}

.intro-copy {
  margin: 0;
  color: #42564a;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.5;
}

.intro-tags {
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.intro-tag {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid rgba(20, 73, 50, 0.16);
  background: #fffdf3;
  color: #2f5f45;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  padding: 5px 8px;
}

.intro-book-frame {
  margin: 0;
  border-radius: 16px;
  background: linear-gradient(160deg, #fff8d7 0%, #f1f9de 100%);
  border: 1px solid #d9e7cc;
  box-shadow: 0 10px 18px rgba(20, 73, 50, 0.16);
  padding: 9px;
  transform: rotate(5deg);
  transform-origin: center;
  animation: floatBook 4.5s ease-in-out infinite;
}

.intro-book {
  display: block;
  width: 100%;
  border-radius: 10px;
}

.intro-scene-frame {
  margin: 0;
  border-radius: 16px;
  border: 1px solid #d8e6d1;
  background: #fff;
  padding: 8px;
  box-shadow: 0 10px 18px rgba(20, 73, 50, 0.12);
}

.intro-scene {
  display: block;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

@keyframes floatBook {
  0% {
    transform: rotate(5deg) translateY(0);
  }

  50% {
    transform: rotate(3deg) translateY(-3px);
  }

  100% {
    transform: rotate(5deg) translateY(0);
  }
}

@media (max-width: 390px) {
  .intro-top,
  .intro-bottom {
    grid-template-columns: 1fr;
  }

  .intro-book-frame {
    max-width: 62%;
    justify-self: center;
  }
}

@media (max-width: 360px) {
  .intro-title {
    font-size: 26px;
  }

  .intro-copy {
    font-size: 10.5px;
  }
}
</style>
