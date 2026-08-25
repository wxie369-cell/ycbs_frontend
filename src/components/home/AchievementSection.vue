<template>
  <section id="achievements" class="home-section home-section--dark achievement-section">
    <div class="home-container">
      <SectionHeader
        eyebrow="Learning Outcomes"
        title="營隊帶走的不只是一份簡報"
        description="YCBS 重視學習過程中的連結、判斷與表達，讓成果能延伸到未來的研究與行動。"
        inverse
      />

      <div class="achievement-section__grid">
        <article v-for="item in items" :key="item.title" v-reveal>
          <span class="achievement-section__icon" aria-hidden="true">{{ item.icon }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import { achievementItems } from '@/data/home'

export default {
  name: 'AchievementSection',
  components: { SectionHeader },
  data() {
    return { items: achievementItems }
  },
}
</script>

<style scoped>
.achievement-section {
  position: relative;
  overflow: hidden;
}

.achievement-section::after {
  position: absolute;
  top: -200px;
  right: -170px;
  width: 460px;
  height: 460px;
  border: 1px solid rgba(125, 208, 202, 0.15);
  border-radius: 50%;
  content: "";
}

.achievement-section__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.achievement-section article {
  padding: clamp(1.75rem, 4vw, 3rem);
  border-right: 1px solid rgba(255, 255, 255, 0.18);
}

.achievement-section article:last-child {
  border-right: 0;
}

.achievement-section__icon {
  display: block;
  margin-bottom: var(--ycbs-space-8);
  color: #82d4ce;
  font-size: 1.65rem;
}

.achievement-section h3 {
  margin: 0;
  color: var(--ycbs-color-on-dark);
  font-size: var(--ycbs-text-lg);
}

.achievement-section p {
  margin: var(--ycbs-space-4) 0 0;
  color: rgba(255, 255, 255, 0.66);
  line-height: var(--ycbs-leading-copy);
}

@media (max-width: 767px) {
  .achievement-section__grid {
    grid-template-columns: 1fr;
  }

  .achievement-section article {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .achievement-section article:last-child {
    border-bottom: 0;
  }
}
</style>
