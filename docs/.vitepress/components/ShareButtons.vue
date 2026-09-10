<script setup>
import { ref, onMounted } from 'vue'

const currentUrl = ref('')
const currentTitle = ref('')
const copied = ref(false)

onMounted(() => {
  currentUrl.value = window.location.href
  currentTitle.value = document.title
})

async function nativeShare() {
  const data = {
    title: currentTitle.value,
    url: currentUrl.value
  }

  if (navigator.share) {
    try {
      await navigator.share(data)
    } catch {
      // User cancelled the share sheet
    }
    return
  }

  await copyLink()
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(currentUrl.value)

    copied.value = true

    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    // Clipboard unavailable
  }
}

function openShare(url) {
  window.open(
    url,
    '_blank',
    'width=650,height=550,noopener,noreferrer'
  )
}

function shareWhatsApp() {
  openShare(
    `https://wa.me/?text=${encodeURIComponent(
      `${currentTitle.value} ${currentUrl.value}`
    )}`
  )
}

function shareTwitter() {
  openShare(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      currentTitle.value
    )}&url=${encodeURIComponent(currentUrl.value)}`
  )
}

function shareReddit() {
  openShare(
    `https://www.reddit.com/submit?url=${encodeURIComponent(
      currentUrl.value
    )}&title=${encodeURIComponent(currentTitle.value)}`
  )
}

function shareTelegram() {
  openShare(
    `https://t.me/share/url?url=${encodeURIComponent(
      currentUrl.value
    )}&text=${encodeURIComponent(currentTitle.value)}`
  )
}

function shareEmail() {
  window.location.href =
    `mailto:?subject=${encodeURIComponent(currentTitle.value)}` +
    `&body=${encodeURIComponent(currentUrl.value)}`
}
</script>

<template>
  <hr>
  <p style="font-weight: bold;">Share this Article</p>
  <div class="share-buttons" aria-label="Share article">

    <!-- Native share sheet -->
    <button
      class="share-button primary"
      type="button"
      @click="nativeShare"
      :aria-label="copied ? 'Link copied' : 'Share'"
    >
      <i
        :class="copied
          ? 'fa-solid fa-check'
          : 'fa-solid fa-arrow-up-from-bracket'"
      />

      <span>
        {{ copied ? 'Copied' : 'Share' }}
      </span>
    </button>

    <!-- WhatsApp -->
    <button
      class="share-button"
      type="button"
      aria-label="Share on WhatsApp"
      @click="shareWhatsApp"
    >
      <i class="fa-brands fa-whatsapp" />
    </button>

    <!-- Twitter / X -->
    <button
      class="share-button"
      type="button"
      aria-label="Share on X"
      @click="shareTwitter"
    >
      <i class="fa-brands fa-x-twitter" />
    </button>

    <!-- Reddit -->
    <button
      class="share-button"
      type="button"
      aria-label="Share on Reddit"
      @click="shareReddit"
    >
      <i class="fa-brands fa-reddit-alien" />
    </button>

    <!-- Telegram -->
    <button
      class="share-button"
      type="button"
      aria-label="Share on Telegram"
      @click="shareTelegram"
    >
      <i class="fa-brands fa-telegram" />
    </button>

    <!-- Email -->
    <button
      class="share-button"
      type="button"
      aria-label="Share via email"
      @click="shareEmail"
    >
      <i class="fa-solid fa-envelope" />
    </button>

    <!-- Copy -->
    <button
      class="share-button"
      type="button"
      :aria-label="copied ? 'Link copied' : 'Copy link'"
      @click="copyLink"
    >
      <i
        :class="copied
          ? 'fa-solid fa-check'
          : 'fa-solid fa-link'"
      />
    </button>

  </div>
</template>

<style scoped>
.share-buttons {
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 24px 0;
}

.share-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 38px;
  min-width: 38px;

  padding: 0 11px;

  border: 1px solid var(--vp-c-divider);
  border-radius: 9px;

  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);

  cursor: pointer;

  font: inherit;
  font-size: 13px;
  font-weight: 500;

  transition:
    background .15s ease,
    border-color .15s ease,
    transform .15s ease;
}

.share-button:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-divider);
}

.share-button:active {
  transform: scale(.96);
}

.share-button.primary {
  padding: 0 14px;
  background: var(--vp-c-text-1);
  border-color: var(--vp-c-text-1);
  color: var(--vp-c-bg);
}

.share-button.primary:hover {
  opacity: .9;
}

.share-button i {
  font-size: 15px;
}

@media (max-width: 640px) {
  .share-buttons {
    gap: 6px;
  }

  .share-button {
    width: 38px;
    padding: 0;
  }

  .share-button.primary {
    width: auto;
    padding: 0 13px;
  }
}
</style>
