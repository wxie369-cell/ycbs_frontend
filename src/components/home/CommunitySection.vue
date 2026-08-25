<template>
  <section id="community" class="home-section community-section">
    <div class="home-container community-section__layout">
      <div class="community-section__photos" v-reveal>
        <figure v-for="(photo, index) in photos" :key="photo.src" :class="`community-section__photo--${index + 1}`">
          <img :src="photo.src" :alt="photo.alt" loading="lazy" decoding="async" />
        </figure>
        <div class="community-section__label">
          <strong>YCBS</strong>
          <span>Community</span>
        </div>
      </div>

      <div v-reveal>
        <SectionHeader
          eyebrow="Team & Community"
          title="由青年共同打造的學習場域"
          description="YCBS 籌備團隊相信，好的營隊不只傳遞知識，也要創造能安心提問、跨域合作與互相啟發的社群。"
        />
        <ul class="community-section__list">
          <li>跨校、跨專業的青年協作</li>
          <li>與產業講者及實務工作者交流</li>
          <li>在團隊提案中練習溝通與回饋</li>
        </ul>
        <a class="home-button community-section__button" href="about.html">認識團隊成員</a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import { communityPhotos } from '@/data/home'

export default {
  name: 'CommunitySection',
  components: { SectionHeader },
  data() {
    return { photos: communityPhotos }
  },
}
</script>

<style scoped>
.community-section__layout {
  display: grid;
  grid-template-columns: minmax(420px, 1.05fr) minmax(0, 0.95fr);
  align-items: center;
  gap: clamp(3rem, 8vw, 7rem);
}

.community-section__photos {
  position: relative;
  display: grid;
  height: 520px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.community-section__photos::before {
  position: absolute;
  top: 7%;
  right: 3%;
  width: 72%;
  height: 76%;
  border: 1px solid var(--ycbs-color-border-strong);
  content: "";
}

.community-section figure {
  position: relative;
  z-index: 1;
  margin: 0;
  overflow: hidden;
  border: 6px solid var(--ycbs-color-canvas);
  background: var(--ycbs-color-surface-alt);
}

.community-section figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9);
  transition: filter var(--ycbs-duration-slow) var(--ycbs-ease-standard),
    transform var(--ycbs-duration-slow) var(--ycbs-ease-standard);
}

.community-section figure:hover img {
  filter: saturate(1);
  transform: scale(1.025);
}

.community-section__photo--1 {
  grid-area: 1 / 1 / 8 / 8;
}

.community-section__photo--1 img {
  object-position: 28% center;
}

.community-section__photo--2 {
  grid-area: 3 / 8 / 10 / 13;
}

.community-section__photo--2 img {
  object-position: center 64%;
}

.community-section__photo--3 {
  grid-area: 8 / 3 / 13 / 9;
}

.community-section__label {
  position: absolute;
  right: 1%;
  bottom: 4%;
  z-index: 2;
  display: grid;
  padding: var(--ycbs-space-4) var(--ycbs-space-5);
  background: var(--ycbs-color-brand-800);
  color: var(--ycbs-color-on-dark);
}

.community-section__label strong {
  font-size: var(--ycbs-text-lg);
  letter-spacing: 0.1em;
}

.community-section__label span {
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--ycbs-text-xs);
  letter-spacing: 0.09em;
}

.community-section__list {
  display: grid;
  gap: var(--ycbs-space-3);
  margin: calc(-1 * var(--ycbs-space-4)) 0 0;
  padding: 0;
  list-style: none;
}

.community-section__list li {
  position: relative;
  padding-left: var(--ycbs-space-6);
  color: var(--ycbs-color-text);
  line-height: 1.7;
}

.community-section__list li::before {
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 8px;
  height: 8px;
  background: var(--ycbs-color-accent-600);
  content: "";
}

.community-section__button {
  margin-top: var(--ycbs-space-8);
}

@media (max-width: 959px) {
  .community-section__layout {
    grid-template-columns: 1fr;
  }

  .community-section__photos {
    max-width: 700px;
  }
}

@media (max-width: 599px) {
  .community-section__photos {
    height: 400px;
  }

  .community-section figure {
    border-width: 4px;
  }
}
</style>
