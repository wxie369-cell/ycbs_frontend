<template>
  <section class="page-hero" :aria-labelledby="headingId">
    <div class="home-container page-hero__inner">
      <div class="page-hero__content">
        <p class="page-hero__eyebrow">{{ eyebrow }}</p>
        <h1 :id="headingId">{{ title }}</h1>
        <p class="page-hero__description">{{ description }}</p>
        <div v-if="$slots.actions" class="page-hero__actions">
          <slot name="actions"></slot>
        </div>
      </div>

      <div v-if="image" class="page-hero__visual" aria-hidden="true">
        <div class="page-hero__image-frame">
          <img :src="image" alt="" fetchpriority="high" decoding="async" />
        </div>
        <span>{{ visualLabel }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHero',
  props: {
    eyebrow: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    visualLabel: { type: String, default: '' },
    headingId: { type: String, default: 'page-title' },
  },
}
</script>

<style scoped>
.page-hero {
  position: relative;
  min-height: clamp(430px, 52vh, 540px);
  overflow: hidden;
  background: linear-gradient(118deg, var(--ycbs-color-brand-950), var(--ycbs-color-brand-800) 62%, #153f48);
  color: var(--ycbs-color-on-dark);
  isolation: isolate;
}

.page-hero::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 52px 52px;
  content: "";
  mask-image: linear-gradient(to right, transparent, #000 46%, #000);
}

.page-hero::after {
  position: absolute;
  right: -120px;
  bottom: -280px;
  z-index: -1;
  width: 560px;
  height: 560px;
  border: 1px solid rgba(141, 218, 211, 0.24);
  border-radius: 50%;
  content: "";
}

.page-hero__inner {
  display: grid;
  min-height: inherit;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.65fr);
  align-items: center;
  gap: clamp(2rem, 7vw, 6.5rem);
  padding-block: var(--ycbs-space-16);
}

.page-hero__content {
  max-width: 760px;
}

.page-hero__eyebrow {
  margin: 0 0 var(--ycbs-space-4);
  color: #95ddd7;
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.page-hero h1 {
  margin: 0;
  color: var(--ycbs-color-on-dark);
  font-size: clamp(2.35rem, 4.4vw, 3.9rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.2;
  text-wrap: balance;
}

.page-hero__description {
  max-width: 680px;
  margin: var(--ycbs-space-6) 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.85;
}

.page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ycbs-space-3);
  margin-top: var(--ycbs-space-8);
}

.page-hero__visual {
  position: relative;
  width: min(100%, 360px);
  justify-self: end;
}

.page-hero__image-frame {
  position: relative;
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.035);
}

.page-hero__image-frame::before,
.page-hero__image-frame::after {
  position: absolute;
  width: 34%;
  height: 34%;
  border-color: #7dd0ca;
  content: "";
}

.page-hero__image-frame::before {
  top: -1px;
  left: -1px;
  border-top: 3px solid #7dd0ca;
  border-left: 3px solid #7dd0ca;
}

.page-hero__image-frame::after {
  right: -1px;
  bottom: -1px;
  border-right: 3px solid #7dd0ca;
  border-bottom: 3px solid #7dd0ca;
}

.page-hero__image-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 7%;
  filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.2));
}

.page-hero__visual > span {
  display: block;
  margin-top: var(--ycbs-space-4);
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-align: right;
  text-transform: uppercase;
}

@media (max-width: 959px) {
  .page-hero__inner {
    grid-template-columns: minmax(0, 1fr) 240px;
    gap: var(--ycbs-space-10);
  }
}

@media (max-width: 767px) {
  .page-hero {
    min-height: 500px;
  }

  .page-hero__inner {
    grid-template-columns: 1fr;
  }

  .page-hero__content {
    position: relative;
    z-index: 1;
  }

  .page-hero__visual {
    position: absolute;
    right: -100px;
    bottom: -105px;
    width: 330px;
    opacity: 0.15;
  }

  .page-hero__visual > span {
    display: none;
  }
}

@media (max-width: 479px) {
  .page-hero {
    min-height: 520px;
  }

  .page-hero__inner {
    padding-block: var(--ycbs-space-12);
  }

  .page-hero__actions {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: var(--ycbs-space-6);
  }
}
</style>
