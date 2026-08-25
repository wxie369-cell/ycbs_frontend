<template>
  <section id="programs" class="home-section program-section">
    <div class="home-container">
      <SectionHeader
        eyebrow="Projects & Practice"
        title="把課程轉化成可被檢視的實作成果"
        description="YCBS 以模擬創業競賽串接知識、產業觀點與團隊實作，讓學員從理解問題走向提案表達。"
      />

      <article v-reveal class="featured-project">
        <header class="featured-project__header">
          <p>{{ featured.eyebrow }}</p>
          <span>{{ featured.cycle }}</span>
        </header>

        <div class="featured-project__image">
          <img :src="featured.image" :alt="featured.imageAlt" loading="lazy" decoding="async" />
        </div>

        <div class="featured-project__content">
          <div>
            <p class="featured-project__label">YCBS Project</p>
            <h3>{{ featured.title }}</h3>
          </div>
          <p class="featured-project__description">{{ featured.description }}</p>
          <div class="featured-project__status">
            <span>Status</span>
            <strong>{{ featured.status }}</strong>
            <a class="text-link" :href="featured.href">了解活動內容</a>
          </div>
        </div>
      </article>

      <section class="project-index" aria-labelledby="project-index-title">
        <header class="project-index__header">
          <div>
            <p>Program Modules</p>
            <h3 id="project-index-title">Projects</h3>
          </div>
          <span>支撐成果實作的五個學習模組</span>
        </header>

        <ol class="project-index__list">
          <li v-for="item in projectItems" :key="item.index" v-reveal>
            <span class="project-index__number">{{ item.index }}</span>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
            <a :href="featured.href" :aria-label="`了解模組：${item.title}`">了解模組</a>
          </li>
        </ol>
      </section>

      <div class="home-section__action">
        <a class="text-link" href="event.html">查看完整活動內容</a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import { featuredProject, programItems } from '@/data/home'

export default {
  name: 'ProgramSection',
  components: { SectionHeader },
  data() {
    return {
      featured: featuredProject,
      projectItems: programItems.filter(item => item.title !== featuredProject.title),
    }
  },
}
</script>

<style scoped>
.featured-project {
  border-top: 1px solid var(--ycbs-color-border-strong);
  border-bottom: 1px solid var(--ycbs-color-border-strong);
}

.featured-project__header,
.project-index__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--ycbs-space-6);
}

.featured-project__header {
  padding: var(--ycbs-space-5) 0;
}

.featured-project__header p,
.project-index__header > div > p {
  margin: 0;
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.featured-project__header span,
.project-index__header > span {
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
}

.featured-project__image {
  aspect-ratio: 16 / 7;
  overflow: hidden;
  background: var(--ycbs-color-brand-900);
}

.featured-project__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  transition: transform var(--ycbs-duration-slow) var(--ycbs-ease-standard);
}

.featured-project:hover .featured-project__image img {
  transform: scale(1.015);
}

.featured-project__content {
  display: grid;
  grid-template-columns: minmax(230px, 0.8fr) minmax(0, 1.35fr) minmax(170px, 0.55fr);
  gap: clamp(1.5rem, 4vw, 3.5rem);
  padding: clamp(1.75rem, 4vw, 3rem) 0;
}

.featured-project__label {
  margin: 0 0 var(--ycbs-space-3);
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.featured-project h3,
.project-index__header h3,
.project-index__list h4 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-family: var(--ycbs-font-display);
}

.featured-project h3 {
  font-size: clamp(1.65rem, 2.6vw, 2.35rem);
  font-weight: 800;
  line-height: 1.3;
}

.featured-project__description {
  margin: 0;
  color: var(--ycbs-color-text);
  line-height: 1.9;
}

.featured-project__status {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.featured-project__status > span {
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.featured-project__status strong {
  margin-top: var(--ycbs-space-2);
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-sm);
}

.featured-project__status .text-link {
  margin-top: auto;
  padding-top: var(--ycbs-space-6);
}

.project-index {
  margin-top: var(--ycbs-space-20);
}

.project-index__header {
  padding-bottom: var(--ycbs-space-5);
  border-bottom: 1px solid var(--ycbs-color-border-strong);
}

.project-index__header h3 {
  margin-top: var(--ycbs-space-2);
  font-size: var(--ycbs-text-xl);
  font-weight: 800;
}

.project-index__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-index__list li {
  display: grid;
  grid-template-columns: 82px minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ycbs-space-6);
  min-height: 124px;
  padding: var(--ycbs-space-6) 0;
  border-bottom: 1px solid var(--ycbs-color-border);
  transition: border-color var(--ycbs-duration-fast) var(--ycbs-ease-standard),
    padding-inline var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.project-index__list li:hover {
  padding-inline: var(--ycbs-space-3);
  border-color: var(--ycbs-color-accent-600);
}

.project-index__number {
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-sm);
  font-weight: 800;
  letter-spacing: 0.1em;
}

.project-index__list h4 {
  font-size: var(--ycbs-text-lg);
  font-weight: 750;
}

.project-index__list p {
  margin: var(--ycbs-space-2) 0 0;
  color: var(--ycbs-color-muted);
  line-height: var(--ycbs-leading-copy);
}

.project-index__list a {
  color: var(--ycbs-color-brand-700);
  font-size: var(--ycbs-text-sm);
  font-weight: 750;
}

.project-index__list a::after {
  margin-left: var(--ycbs-space-2);
  content: "\2192";
}

@media (max-width: 959px) {
  .featured-project__image {
    aspect-ratio: 16 / 8;
  }

  .featured-project__content {
    grid-template-columns: minmax(220px, 0.75fr) minmax(0, 1.25fr);
  }

  .featured-project__status {
    grid-column: 1 / -1;
    flex-direction: row;
    align-items: center;
    gap: var(--ycbs-space-4);
    padding-top: var(--ycbs-space-5);
    border-top: 1px solid var(--ycbs-color-border);
  }

  .featured-project__status .text-link {
    margin-left: auto;
    padding-top: 0;
  }
}

@media (max-width: 599px) {
  .featured-project__header,
  .project-index__header {
    align-items: flex-start;
    flex-direction: column;
    gap: var(--ycbs-space-2);
  }

  .featured-project__image {
    aspect-ratio: 4 / 3;
  }

  .featured-project__content {
    grid-template-columns: 1fr;
    gap: var(--ycbs-space-5);
  }

  .featured-project__status {
    grid-column: auto;
    flex-wrap: wrap;
  }

  .featured-project__status .text-link {
    width: 100%;
    margin: var(--ycbs-space-2) 0 0;
  }

  .project-index {
    margin-top: var(--ycbs-space-16);
  }

  .project-index__list li {
    grid-template-columns: 46px minmax(0, 1fr);
    align-items: start;
    gap: var(--ycbs-space-4);
    min-height: 0;
  }

  .project-index__list a {
    grid-column: 2;
    justify-self: start;
  }

  .project-index__list li:hover {
    padding-inline: 0;
  }
}
</style>
