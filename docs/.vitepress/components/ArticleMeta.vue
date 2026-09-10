<!-- .vitepress/theme/components/ArticleMeta.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  author: {
    type: Object,
    default: () => ({
      name: 'Intense',
      avatar: '/authors/intense.png',
      url: '#'
    })
  },

  date: {
    type: String,
    default: '2026-09-10'
  },

  updated: {
    type: String,
    default: '2026-09-10'
  },

  readTime: {
    type: Number,
    default: 6
  },

  categories: {
    type: Array,
    default: () => ['Programming', 'Web Development']
  },

  tags: {
    type: Array,
    default: () => ['JavaScript', 'Open Source']
  },

  sources: {
    type: Array,
    default: () => [
      {
        title: 'Official Documentation',
        url: 'https://example.com',
        type: 'Documentation'
      },
      {
        title: 'GitHub Repository',
        url: 'https://github.com/example',
        type: 'Repository'
      }
    ]
  },

  changes: {
    type: Array,
    default: () => [
      {
        date: '2026-09-10',
        text: 'Article published'
      }
    ]
  }
})

const formattedDate = computed(() =>
  new Date(props.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
)

const formattedUpdated = computed(() =>
  new Date(props.updated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
)
</script>

<template>
  <div class="article-meta">

    <!-- Main information -->
    <div class="meta-main">

      <!-- Author -->
      <a
        v-if="author.url"
        :href="author.url"
        class="author"
      >
        <img
          v-if="author.avatar"
          :src="author.avatar"
          :alt="author.name"
        />

        <div class="author-text">
          <span class="label">Written by</span>
          <strong>{{ author.name }}</strong>
        </div>
      </a>

      <div v-else class="author">
        <img
          v-if="author.avatar"
          :src="author.avatar"
          :alt="author.name"
        />

        <div class="author-text">
          <span class="label">Written by</span>
          <strong>{{ author.name }}</strong>
        </div>
      </div>

      <!-- Date / readtime -->
      <div class="meta-stats">
        <div>
          <span class="label">Published</span>
          <strong>{{ formattedDate }}</strong>
        </div>

        <div v-if="updated !== date">
          <span class="label">Updated</span>
          <strong>{{ formattedUpdated }}</strong>
        </div>

        <div>
          <span class="label">Read time</span>
          <strong>{{ readTime }} min read</strong>
        </div>
      </div>

    </div>

    <!-- Categories -->
    <div
      v-if="categories.length"
      class="meta-section"
    >
      <span class="section-label">
        Categories
      </span>

      <div class="pills">
        <a
          v-for="category in categories"
          :key="category"
          :href="`/category/${category.toLowerCase().replaceAll(' ', '-')}`"
          class="pill category"
        >
          {{ category }}
        </a>
      </div>
    </div>

    <!-- Tags -->
    <div
      v-if="tags.length"
      class="meta-section"
    >
      <span class="section-label">
        Tags
      </span>

      <div class="pills">
        <a
          v-for="tag in tags"
          :key="tag"
          :href="`/tag/${tag.toLowerCase().replaceAll(' ', '-')}`"
          class="pill"
        >
          #{{ tag }}
        </a>
      </div>
    </div>

    <!-- Sources -->
    <details
      v-if="sources.length"
      class="meta-dropdown"
    >
      <summary>
        <span>
          <i class="fa-solid fa-book-open"></i>
          Sources
        </span>

        <span class="count">
          {{ sources.length }}
        </span>
      </summary>

      <div class="dropdown-content">
        <a
          v-for="source in sources"
          :key="source.url"
          :href="source.url"
          target="_blank"
          rel="noopener noreferrer"
          class="source"
        >
          <div>
            <strong>{{ source.title }}</strong>
            <span>{{ source.type }}</span>
          </div>

          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </details>

    <!-- Changes -->
    <details
      v-if="changes.length"
      class="meta-dropdown"
    >
      <summary>
        <span>
          <i class="fa-solid fa-clock-rotate-left"></i>
          Article changes
        </span>

        <span class="count">
          {{ changes.length }}
        </span>
      </summary>

      <div class="dropdown-content changes">
        <div
          v-for="change in changes"
          :key="change.date + change.text"
          class="change"
        >
          <time>{{ change.date }}</time>
          <span>{{ change.text }}</span>
        </div>
      </div>
    </details>

  </div>
</template>

<style scoped>
.article-meta {
  margin: 28px 0 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}

/* Main */

.meta-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 20px 22px;
}

.author {
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.author img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.author-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.label,
.section-label {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
}

.author strong {
  font-size: 14px;
}

.meta-stats {
  display: flex;
  align-items: center;
  gap: 28px;
}

.meta-stats > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.meta-stats strong {
  font-size: 13px;
  font-weight: 600;
}

/* Tags / categories */

.meta-section {
  padding: 14px 22px;
  border-top: 1px solid var(--vp-c-divider);
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 8px;
}

.pill {
  padding: 5px 9px;
  border-radius: 7px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  font-size: 12px;
  text-decoration: none;
  transition: border-color .15s, background .15s;
}

.pill:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft-up);
}

.category {
  font-weight: 600;
}

/* Dropdowns */

.meta-dropdown {
  border-top: 1px solid var(--vp-c-divider);
}

.meta-dropdown summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 22px;
  cursor: pointer;
  list-style: none;
  user-select: none;
  font-size: 13px;
  font-weight: 600;
}

.meta-dropdown summary::-webkit-details-marker {
  display: none;
}

.meta-dropdown summary > span:first-child {
  display: flex;
  align-items: center;
  gap: 9px;
}

.meta-dropdown summary i {
  color: var(--vp-c-text-2);
}

.count {
  min-width: 22px;
  padding: 2px 7px;
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 11px;
  text-align: center;
}

.dropdown-content {
  padding: 0 22px 16px;
}

.source {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 11px 0;
  color: inherit;
  text-decoration: none;
  border-top: 1px solid var(--vp-c-divider-light);
}

.source:first-child {
  border-top: 0;
}

.source > div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.source strong {
  font-size: 13px;
}

.source span {
  color: var(--vp-c-text-2);
  font-size: 11px;
}

.source > i {
  color: var(--vp-c-text-3);
  font-size: 11px;
}

.change {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid var(--vp-c-divider-light);
  font-size: 12px;
}

.change:first-child {
  border-top: 0;
}

.change time {
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
}

/* Mobile */

@media (max-width: 640px) {
  .meta-main {
    align-items: flex-start;
    flex-direction: column;
  }

  .meta-stats {
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  }

  .change {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
