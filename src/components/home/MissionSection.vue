<template>
  <section id="about" class="home-section home-section--muted mission-section">
    <div class="home-container mission-section__layout">
      <div v-reveal>
        <SectionHeader
          eyebrow="Our Mission"
          title="讓科學知識走向真實世界"
          description="YCBS 以生技生醫為核心，透過課程、工作坊與團隊實作，陪伴青年理解創新如何從研究走向產業。"
        />
        <p class="mission-section__copy">
          國家生技研究園區成立此營隊，盼透過理論與實踐並進，提升學員的專業知能、創新產業認知與創業行動力。每一組都將發想並完成商業簡報，在協作與回饋中建立跨域能力。
        </p>
        <a class="text-link mission-section__link" href="about.html">認識 YCBS 團隊</a>
      </div>

      <div class="mission-section__visual" v-reveal>
        <div class="mission-section__image">
          <img src="Logo/素材/手.png" alt="YCBS 科學與創新主題視覺" loading="lazy" decoding="async" />
          <img
            class="mission-section__brain"
            src="Logo/素材/燈泡大腦.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="mission-section__principles">
          <div><strong>01</strong><span>以問題為起點</span></div>
          <div><strong>02</strong><span>以跨域為方法</span></div>
          <div><strong>03</strong><span>以實作為驗證</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'

export default {
  name: 'MissionSection',
  components: { SectionHeader },
}
</script>

<style scoped>
.mission-section__layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(380px, 1.1fr);
  align-items: center;
  gap: clamp(3rem, 8vw, 7rem);
}

.mission-section__copy {
  margin: calc(-1 * var(--ycbs-space-4)) 0 0;
  color: var(--ycbs-color-text);
  line-height: 1.9;
}

.mission-section__link {
  margin-top: var(--ycbs-space-6);
}

.mission-section__visual {
  position: relative;
}

.mission-section__image {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--ycbs-radius-sm);
  background: linear-gradient(135deg, var(--ycbs-color-brand-800), #1b5660);
}

.mission-section__image::after {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  content: "";
}

.mission-section__image > img:first-child {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
  opacity: 0.68;
  transform: scale(1.06);
}

.mission-section__brain {
  position: absolute;
  top: 5%;
  right: 4%;
  width: 48%;
  height: 48%;
  object-fit: contain;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.25));
}

.mission-section__principles {
  position: relative;
  display: grid;
  width: calc(100% - var(--ycbs-space-12));
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: calc(-1 * var(--ycbs-space-8)) auto 0;
  border: 1px solid var(--ycbs-color-border);
  background: var(--ycbs-color-surface);
  box-shadow: var(--ycbs-shadow-md);
}

.mission-section__principles div {
  display: grid;
  gap: var(--ycbs-space-2);
  padding: var(--ycbs-space-5);
  border-right: 1px solid var(--ycbs-color-border);
}

.mission-section__principles div:last-child {
  border-right: 0;
}

.mission-section__principles strong {
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  letter-spacing: 0.1em;
}

.mission-section__principles span {
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-sm);
  font-weight: 700;
}

@media (max-width: 959px) {
  .mission-section__layout {
    grid-template-columns: 1fr;
  }

  .mission-section__visual {
    max-width: 720px;
  }
}

@media (max-width: 599px) {
  .mission-section__image {
    aspect-ratio: 1 / 1;
  }

  .mission-section__principles {
    width: calc(100% - var(--ycbs-space-4));
    grid-template-columns: 1fr;
    margin-top: calc(-1 * var(--ycbs-space-6));
  }

  .mission-section__principles div {
    grid-template-columns: 38px 1fr;
    border-right: 0;
    border-bottom: 1px solid var(--ycbs-color-border);
  }

  .mission-section__principles div:last-child {
    border-bottom: 0;
  }
}
</style>
