<template>
  <main class="ar-page">
    <section class="ar-card">
      <h1>Trang quét AR</h1>
      <p>
        Route này đã sẵn sàng để bạn tích hợp camera AR, marker detection hoặc quy
        trình scan theo nhu cầu.
      </p>
      <ul>
        <li>Đường dẫn route: /quet-ar</li>
        <li>Nút AR Camera ở trang chủ đã trỏ đến route này</li>
      </ul>
      <RouterLink to="/" class="back-link">Quay lại trang giới thiệu</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.ar-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.ar-card {
  width: min(100%, 520px);
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 45px rgba(20, 73, 50, 0.15);
  padding: 24px;
}

.ar-card h1 {
  margin: 0;
  color: var(--forest);
  font-family: 'Baloo 2', 'Montserrat', sans-serif;
  font-size: 36px;
  line-height: 1;
}

.ar-card p {
  margin: 12px 0;
  color: #3c3c3c;
  font-size: 15px;
  line-height: 1.6;
}

.ar-card ul {
  margin: 0 0 16px;
  padding-left: 18px;
  color: #2f2f2f;
  font-size: 14px;
  line-height: 1.6;
}

.back-link {
  display: inline-block;
  text-decoration: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #66b748 30%, #f6e13e 100%);
  color: #102f22;
  font-weight: 700;
  padding: 9px 14px;
  box-shadow: 0 4px 0 #144932;
}

.back-link:hover {
  filter: brightness(1.02);
}
</style>
