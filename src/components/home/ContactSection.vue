<script setup>
import { computed } from 'vue'
import { assets, contacts } from '@/data/homeContent'

const socialContacts = computed(() => contacts.filter((item) => item.group === 'social'))
const directContacts = computed(() => contacts.filter((item) => item.group === 'direct'))
</script>

<template>
  <footer class="contact">
    <div class="contact-card">
      <div class="contact-header">
        <div class="contact-heading">
          <p class="contact-eyebrow">Sẵn sàng hỗ trợ bạn</p>
          <h2 class="contact-title">Thông tin liên hệ</h2>
        </div>
        <img :src="assets.logo" alt="Hữu Cơ Easy với Gen G" class="contact-logo" />
      </div>

      <div class="contact-grid">
        <section class="contact-panel">
          <h3 class="panel-title">Kênh mạng xã hội</h3>
          <ul class="contact-list">
            <li v-for="item in socialContacts" :key="item.text" class="contact-item">
              <span class="contact-icon">
                <img :src="item.icon" alt="" aria-hidden="true" />
              </span>
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </section>

        <section class="contact-panel">
          <h3 class="panel-title">Liên hệ trực tiếp</h3>
          <ul class="contact-list">
            <li v-for="item in directContacts" :key="item.text" class="contact-item">
              <span class="contact-icon">
                <img :src="item.icon" alt="" aria-hidden="true" />
              </span>
              <a v-if="item.href" :href="item.href">{{ item.text }}</a>
              <span v-else>{{ item.text }}</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  padding: 18px 12px 22px;
  /* background:
    radial-gradient(circle at 14% -8%, rgba(255, 232, 138, 0.55), transparent 44%),
    linear-gradient(155deg, #173f2d 0%, #102d21 100%); */
}

.contact-card {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  background: linear-gradient(180deg, #ffffff 0%, #f4fbf2 100%);
  box-shadow: 0 14px 30px rgba(8, 25, 17, 0.3);
  padding: 14px 14px 16px;
}

.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #d8e7d9;
}

.contact-heading {
  min-width: 0;
}

.contact-eyebrow {
  margin: 0 0 4px;
  color: #366b53;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-title {
  margin: 0;
  color: var(--forest);
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 30px;
  line-height: 1;
}

.contact-logo {
  width: 102px;
  flex-shrink: 0;
  margin-top: 2px;
  filter: drop-shadow(0 4px 8px rgba(20, 73, 50, 0.22));
}

.contact-grid {
  margin-top: 12px;
  display: grid;
  gap: 10px;
}

.contact-panel {
  background: #fff;
  border: 1px solid #d5e6d7;
  border-radius: 12px;
  padding: 10px 10px 11px;
}

.panel-title {
  margin: 0 0 8px;
  color: var(--forest);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #314038;
  font-size: 11px;
  line-height: 1.35;
  font-weight: 600;
}

.contact-icon {
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: linear-gradient(180deg, #5fb741 0%, #3f8f2d 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.35),
    0 3px 8px rgba(20, 73, 50, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
}

.contact-item img {
  width: 13px;
  height: 13px;
  object-fit: contain;
  color: #fff;
}

.contact-item span,
.contact-item a {
  color: inherit;
  text-decoration: none;
  word-break: break-word;
}

.contact-item a:hover {
  color: #0f6c3e;
  text-decoration: underline;
  text-underline-offset: 2px;
}

@media (min-width: 390px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 370px) {
  .contact-title {
    font-size: 24px;
  }

  .contact-logo {
    width: 88px;
  }

  .contact-item {
    font-size: 10.5px;
  }
}
</style>