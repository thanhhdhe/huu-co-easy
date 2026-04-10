<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'

const TARGET_COUNT = 7
const availableVideos = [
  '/ar/output_1.mp4',
  '/ar/output_2.mp4',
  '/ar/output_3.mp4',
  '/ar/output_4.mp4',
  '/ar/output_5.mp4',
  '/ar/output_6.mp4',
  '/ar/output_7.mp4',
  '/ar/output_8.mp4',
  '/ar/output_9.mp4',
  '/ar/output_10.mp4',
  '/ar/output_11.mp4',
  '/ar/output_12.mp4',
  '/ar/output_13.mp4',
  '/ar/output_14.mp4',
  '/ar/output_15.mp4',
  '/ar/output_16.mp4',
  '/ar/output_17.mp4',
  '/ar/output_18.mp4',
  '/ar/output_19.mp4'
]
const AR_IMMERSIVE_CLASS = 'ar-immersive-mode'
const TARGET_LOST_GRACE_MS = 450
const SOURCE_SWITCH_COOLDOWN_MS = 220

const showPopup = ref(true)
const hasStarted = ref(false)
const isStarting = ref(false)
const userInteracted = ref(false)
const errorMessage = ref('')

const sceneRef = ref(null)
const videoRef = ref(null)
const canPlayHandler = ref(null)
const lostPauseTimer = ref(null)
const currentVideoSrc = ref('')
const lastSourceSwitchAt = ref(0)
const activeTargetIndex = ref(null)

const setChromeHidden = (hidden) => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.classList.toggle(AR_IMMERSIVE_CLASS, hidden)
}

const getMainVideo = () => videoRef.value ?? document.getElementById('main-video')

const resolveVideoByTarget = (targetIndex) => {
  const normalizedIndex = Math.abs(targetIndex) % availableVideos.length
  return availableVideos[normalizedIndex]
}

const clearCanPlayHandler = () => {
  const video = getMainVideo()

  if (!video || !canPlayHandler.value) {
    return
  }

  video.removeEventListener('canplay', canPlayHandler.value)
  canPlayHandler.value = null
}

const clearLostPauseTimer = () => {
  if (lostPauseTimer.value) {
    clearTimeout(lostPauseTimer.value)
    lostPauseTimer.value = null
  }
}

const cleanupVideo = () => {
  const video = getMainVideo()

  if (!video) {
    return
  }

  clearCanPlayHandler()
  clearLostPauseTimer()
  video.pause()
  video.currentTime = 0
  video.removeAttribute('src')
  video.load()
  currentVideoSrc.value = ''
}

const startAR = async () => {
  if (isStarting.value || hasStarted.value) {
    return
  }

  errorMessage.value = ''
  isStarting.value = true

  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error('Trinh duyet khong ho tro camera API')
    }

    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    stream.getTracks().forEach((track) => track.stop())

    userInteracted.value = true
    hasStarted.value = true
    showPopup.value = false
    setChromeHidden(true)

    await nextTick()
    const video = getMainVideo()

    if (video) {
      video.muted = true
      video.setAttribute('playsinline', 'true')
      video.setAttribute('webkit-playsinline', 'true')
      video.load()
    }
  } catch (error) {
    console.warn('AR start error:', error)
    errorMessage.value = 'Khong the truy cap camera. Vui long kiem tra quyen camera va thu lai.'
    hasStarted.value = false
    showPopup.value = true
    setChromeHidden(false)
  } finally {
    isStarting.value = false
  }
}

const onTargetFound = (targetIndex) => {
  const video = getMainVideo()

  if (!video) {
    return
  }

  clearLostPauseTimer()
  activeTargetIndex.value = targetIndex

  const nextSrc = resolveVideoByTarget(targetIndex)
  const now = typeof performance !== 'undefined' ? performance.now() : Date.now()
  const withinSwitchCooldown = now - lastSourceSwitchAt.value < SOURCE_SWITCH_COOLDOWN_MS

  if (withinSwitchCooldown && currentVideoSrc.value !== nextSrc) {
    return
  }

  if (currentVideoSrc.value !== nextSrc) {
    lastSourceSwitchAt.value = now
    currentVideoSrc.value = nextSrc

    video.pause()
    video.src = nextSrc
    video.currentTime = 0

    clearCanPlayHandler()

    const playWhenReady = () => {
      if (video.readyState >= 2) {
        video.muted = false
        video.play().catch(console.warn)
      }
    }

    if (video.readyState >= 2) {
      playWhenReady()
    } else {
      canPlayHandler.value = playWhenReady
      video.addEventListener('loadeddata', playWhenReady, { once: true })
      video.load()
    }

    return
  }

  if (video.paused) {
    video.play().catch((error) => {
      console.warn('Replay error:', error)
    })
  }
}

const onTargetLost = (targetIndex) => {
  if (activeTargetIndex.value !== null && activeTargetIndex.value !== targetIndex) {
    return
  }

  const video = getMainVideo()
  if (!video) {
    return
  }

  clearLostPauseTimer()
  lostPauseTimer.value = setTimeout(() => {
    clearCanPlayHandler()
    video.pause()
    activeTargetIndex.value = null
    lostPauseTimer.value = null
  }, TARGET_LOST_GRACE_MS)
}
const removeMindARUI = () => {
  const overlays = document.querySelectorAll(
    '.mindar-ui-overlay, .mindar-ui-scanning, .mindar-ui-compatibility, .mindar-ui-loading'
  )

  overlays.forEach(el => el.remove())
}
onBeforeUnmount(() => {
  setChromeHidden(false)
  cleanupVideo()
  removeMindARUI()

  const sceneEl = sceneRef.value
  const mindarSystem = sceneEl?.systems?.['mindar-image-system']

  if (mindarSystem?.stop) {
    mindarSystem.stop()
  }
  hasStarted.value = false
})
</script>

<template>
  <main class="ar-page">
    <section class="ar-experience">
      <div v-if="showPopup" class="ar-modal">
        <div class="ar-modal-card">
          <h2>Trải nghiệm AR</h2>
          <p>Nhấn Bắt đầu để mở camera và trải nghiệm ngay.</p>
          <button class="start-btn" type="button" :disabled="isStarting" @click="startAR">
            {{ isStarting ? 'Đang mở camera...' : 'Bắt đầu' }}
          </button>
          <p v-if="errorMessage" class="ar-error">{{ errorMessage }}</p>
        </div>
      </div>

      <div v-if="hasStarted" id="ar-container" class="ar-container">
        <a-scene ref="sceneRef"
          mindar-image="imageTargetSrc: /ar/targets.mind; maxTrack: 1; missTolerance: 8; filterMinCF: 0.001; filterBeta: 0.01"
          color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false" embedded>
          <a-assets>
            <video id="main-video" ref="videoRef" preload="auto" muted loop playsinline webkit-playsinline
              crossorigin="anonymous"></video>
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          <template v-for="i in TARGET_COUNT" :key="`target-${i}`">
            <a-entity :mindar-image-target="`targetIndex: ${i - 1}`" @targetFound="() => onTargetFound(i - 1)"
              @targetLost="() => onTargetLost(i - 1)">
              <a-plane src="#main-video" position="0 0 0" rotation="0 0 0" width="1" height="1.15"></a-plane>
            </a-entity>
          </template>
        </a-scene>

        <!-- <p class="ar-status">
          {{
            activeTargetIndex !== null
              ? `Đang phát video 0${activeTargetIndex + 1}`
              : 'Đang chờ nhận diện marker...'
          }}
        </p> -->
        <!-- <RouterLink to="/" class="floating-back">Thoat AR</RouterLink> -->
      </div>
    </section>
  </main>
</template>

<style scoped>
.ar-page {
  position: relative;
  min-height: 100vh;
  background: #000;
}

.ar-experience {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

#ar-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.ar-container :deep(a-scene) {
  width: 100%;
  height: 100%;
}

.ar-container :deep(video) {
  max-width: none !important;
}

.ar-modal {
  position: fixed;
  inset: 0;
  z-index: 3;
  display: grid;
  place-content: center;
  padding: 20px;
  background: radial-gradient(circle at 4% 6%, #fff1baa6, #0000 36%), linear-gradient(#f8fff7 0%, #ebf8e7 100%);
}

.ar-modal-card {
  width: min(92vw, 460px);
  display: grid;
  gap: 12px;
  padding: 24px 22px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid rgba(20, 73, 50, 0.18);
  box-shadow: 0 24px 48px rgba(16, 47, 34, 0.2);
  text-align: center;
  color: #12372a;
}

.ar-modal h2 {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
}

.ar-modal p {
  margin: 0;
  color: #1f4938;
}

.start-btn {
  font-family: 'Montserrat', sans-serif;
  border: 0;
  border-radius: 12px;
  min-height: 46px;
  min-width: 180px;
  padding: 10px 16px;
  background: linear-gradient(180deg, #67bc52 0%, #f7dd69 100%);
  color: #102f22;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 5px 0 #1e5c43;
}

.start-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.ar-status {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 2;
  margin: 0;
  border-radius: 10px;
  padding: 10px 14px;
  background: rgba(23, 23, 23, 0.85);
  color: #fff;
  font-size: 14px;
  text-align: center;
}

.ar-error {
  color: #ffd6d6;
  font-size: 14px;
}

.floating-back {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 8px 12px;
  border-radius: 10px;
  text-decoration: none;
  color: #0d281f;
  font-weight: 700;
  background: linear-gradient(180deg, #70c256 0%, #f6de66 100%);
  box-shadow: 0 4px 0 #1d583f;
}
</style>
