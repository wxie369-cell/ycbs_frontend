<template>
  <header class="section-header" :class="{ 'section-header--centered': centered, 'section-header--inverse': inverse }">
    <p class="section-header__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-header__description">{{ description }}</p>
  </header>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    centered: { type: Boolean, default: false },
    inverse: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.section-header {
  max-width: 760px;
  margin-bottom: clamp(2rem, 3.5vw, 3rem);
}

.section-header--centered {
  margin-inline: auto;
  text-align: center;
}

.section-header__eyebrow {
  margin: 0 0 var(--ycbs-space-3);
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.section-header h2 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-family: var(--ycbs-font-display);
  font-size: var(--ycbs-text-xl);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.3;
  text-wrap: balance;
}

.section-header h2::after {
  display: block;
  width: 56px;
  height: 3px;
  margin-top: var(--ycbs-space-5);
  background: var(--ycbs-color-accent-600);
  content: "";
}

.section-header--centered h2::after {
  margin-inline: auto;
}

.section-header__description {
  max-width: 680px;
  margin: var(--ycbs-space-5) 0 0;
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-md);
  line-height: var(--ycbs-leading-copy);
}

.section-header--centered .section-header__description {
  margin-inline: auto;
}

.section-header--inverse .section-header__eyebrow {
  color: #8fd8d2;
}

.section-header--inverse h2 {
  color: var(--ycbs-color-on-dark);
}

.section-header--inverse .section-header__description {
  color: rgba(255, 255, 255, 0.7);
}
</style>
