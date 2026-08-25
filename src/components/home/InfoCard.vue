<template>
  <article class="info-card">
    <p v-if="meta" class="info-card__meta">{{ meta }}</p>
    <p v-if="index" class="info-card__index">{{ index }}</p>
    <span v-if="icon" class="info-card__icon" aria-hidden="true">{{ icon }}</span>
    <h3>{{ title }}</h3>
    <p class="info-card__description">{{ description }}</p>
    <a v-if="href" class="text-link info-card__link" :href="href">{{ linkLabel }}</a>
  </article>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    meta: { type: String, default: '' },
    index: { type: String, default: '' },
    icon: { type: String, default: '' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    href: { type: String, default: '' },
    linkLabel: { type: String, default: '了解更多' },
  },
}
</script>

<style scoped>
.info-card {
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding: clamp(1.5rem, 3vw, 2rem);
  border: 1px solid var(--ycbs-color-border);
  border-top: 3px solid var(--ycbs-color-brand-700);
  border-radius: var(--ycbs-radius-sm);
  background: var(--ycbs-color-surface);
  box-shadow: var(--ycbs-shadow-sm);
  transition: border-color var(--ycbs-duration-base) var(--ycbs-ease-standard),
    box-shadow var(--ycbs-duration-base) var(--ycbs-ease-standard),
    transform var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.info-card:hover {
  border-color: var(--ycbs-color-border-strong);
  box-shadow: var(--ycbs-shadow-md);
  transform: translateY(-4px);
}

.info-card__meta {
  margin: 0 0 var(--ycbs-space-4);
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.06em;
}

.info-card__index {
  margin: 0 0 var(--ycbs-space-8);
  color: var(--ycbs-color-brand-100);
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1;
}

.info-card__icon {
  display: grid;
  width: 48px;
  height: 48px;
  margin-bottom: var(--ycbs-space-6);
  place-items: center;
  border-radius: 50%;
  background: var(--ycbs-color-accent-100);
  color: var(--ycbs-color-accent-700);
  font-size: 1.1rem;
}

.info-card h3 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-family: var(--ycbs-font-display);
  font-size: var(--ycbs-text-lg);
  font-weight: 750;
  line-height: 1.45;
}

.info-card__description {
  flex: 1;
  margin: var(--ycbs-space-4) 0 0;
  color: var(--ycbs-color-muted);
  line-height: var(--ycbs-leading-copy);
}

.info-card__link {
  align-self: flex-start;
  margin-top: var(--ycbs-space-6);
}
</style>
