<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    default: ''
  },
  sourceUrl: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <figure class="image-caption">
    <img
      :src="src"
      :alt="alt"
      class="image"
    />

    <figcaption v-if="caption || source">
      <div v-if="caption" class="caption">
        {{ caption }}
      </div>

      <div v-if="source" class="source">
        Source:
        <a
          v-if="sourceUrl"
          :href="sourceUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ source }}
        </a>
        <span v-else>{{ source }}</span>
      </div>
    </figcaption>
  </figure>
</template>

<style scoped>
.image-caption {
  margin: 2rem 0;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 14px;
}

figcaption {
  margin-top: 0.65rem;
}

.caption {
  font-size: 0.85rem;
  line-height: 1.45;
  color: var(--vp-c-text-2);
}

.source {
  margin-top: 0.2rem;
  font-size: 0.72rem;
  line-height: 1.4;
  color: var(--vp-c-text-3);
}

.source a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.source a:hover {
  color: var(--vp-c-brand-1);
}
</style>
