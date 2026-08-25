<template>
  <PageHero
    eyebrow="About YCBS"
    title="讓科學知識走向真實世界"
    description="YCBS 以生技生醫為核心，透過課程、工作坊與團隊實作，陪伴青年理解創新如何從研究走向產業。"
    image="Logo/logo_shadow.png"
    visual-label="Biomedical Innovation / Youth Community"
    heading-id="about-page-title"
  >
    <template #actions>
      <a class="home-button home-button--light" href="#mission">了解營隊宗旨</a>
      <a class="home-button home-button--outline-light" href="#members">認識團隊成員</a>
    </template>
  </PageHero>

  <section id="about" class="home-section about-intro">
    <div class="home-container about-intro__layout">
      <div v-reveal>
        <SectionHeader
          eyebrow="Who We Are"
          title="以生技生醫為核心的青年學習社群"
          description="YCBS 串連科學知識、產業視角與創業實作，讓參與者在真實問題中建立跨域理解。"
        />
        <p class="about-intro__copy">
          國家生技研究園區成立此營隊，盼透過理論與實踐並進，提升學員的專業知能、創新產業認知與創業行動力。每一組都將發想並完成商業簡報，在協作與回饋中建立跨域能力。
        </p>
      </div>

      <dl class="about-intro__facts" v-reveal>
        <div>
          <dt>核心領域</dt>
          <dd>生技生醫</dd>
        </div>
        <div>
          <dt>學習方式</dt>
          <dd>課程、工作坊、團隊實作</dd>
        </div>
        <div>
          <dt>成果形式</dt>
          <dd>小組商業提案與簡報</dd>
        </div>
      </dl>
    </div>
  </section>

  <section id="mission" class="home-section home-section--muted about-mission">
    <div class="home-container">
      <SectionHeader
        eyebrow="Mission & Purpose"
        title="從理解問題，到形成可被溝通的提案"
        description="營隊以問題、跨域與實作為共同方法，讓專業知識能在產業與社會脈絡中被重新理解。"
      />

      <div class="home-grid home-grid--three">
        <InfoCard
          v-for="item in missionItems"
          :key="item.index"
          v-reveal
          :index="item.index"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </section>

  <section id="programs" class="home-section about-programs">
    <div class="home-container">
      <SectionHeader
        eyebrow="What We Do"
        title="六個相互連結的學習模組"
        description="從生技商業與法規基礎，到設計思考、簡報製作及模擬創業競賽，逐步連結知識輸入與團隊產出。"
      />

      <div class="about-programs__list">
        <article v-for="item in programItems" :key="item.index" v-reveal>
          <span>{{ item.index }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <MembersSection />
  <JoinSection />
</template>

<script>
import PageHero from '@/components/layout/PageHero.vue'
import InfoCard from '@/components/home/InfoCard.vue'
import SectionHeader from '@/components/home/SectionHeader.vue'
import JoinSection from '@/components/home/JoinSection.vue'
import MembersSection from '@/about/animates/members.vue'
import { programItems } from '@/data/home'

export default {
  name: 'AboutPage',
  components: {
    PageHero,
    SectionHeader,
    InfoCard,
    MembersSection,
    JoinSection,
  },
  data() {
    return {
      programItems,
      missionItems: [
        {
          index: '01',
          title: '以問題為起點',
          description: '從使用者需求與真實議題出發，練習定義值得投入的問題。',
        },
        {
          index: '02',
          title: '以跨域為方法',
          description: '把科學、產業、法規與市場觀點放在同一個討論框架中。',
        },
        {
          index: '03',
          title: '以實作為驗證',
          description: '透過團隊協作完成商業提案，在表達與回饋中持續修正。',
        },
      ],
    }
  },
}
</script>

<style scoped>
.about-intro__layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.7fr);
  align-items: start;
  gap: clamp(3rem, 8vw, 7rem);
}

.about-intro__copy {
  max-width: 720px;
  margin: calc(-1 * var(--ycbs-space-4)) 0 0;
  color: var(--ycbs-color-text);
  line-height: 1.9;
}

.about-intro__facts {
  margin: 0;
  border-top: 3px solid var(--ycbs-color-accent-600);
  background: var(--ycbs-color-surface-alt);
}

.about-intro__facts div {
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr);
  gap: var(--ycbs-space-5);
  padding: var(--ycbs-space-5) var(--ycbs-space-6);
  border-bottom: 1px solid var(--ycbs-color-border);
}

.about-intro__facts dt {
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.08em;
}

.about-intro__facts dd {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-sm);
  font-weight: 700;
  line-height: 1.6;
}

.about-mission :deep(.info-card) {
  box-shadow: none;
}

.about-programs__list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--ycbs-color-border-strong);
}

.about-programs__list article {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: var(--ycbs-space-5);
  padding: var(--ycbs-space-8) var(--ycbs-space-6);
  border-right: 1px solid var(--ycbs-color-border);
  border-bottom: 1px solid var(--ycbs-color-border);
}

.about-programs__list article:nth-child(even) {
  border-right: 0;
}

.about-programs__list article > span {
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.1em;
}

.about-programs__list h3 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-md);
  font-weight: 750;
  line-height: 1.45;
}

.about-programs__list p {
  margin: var(--ycbs-space-2) 0 0;
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
  line-height: var(--ycbs-leading-copy);
}

@media (max-width: 959px) {
  .about-intro__layout {
    grid-template-columns: 1fr;
  }

  .about-intro__facts {
    max-width: 720px;
  }
}

@media (max-width: 767px) {
  .about-programs__list {
    grid-template-columns: 1fr;
  }

  .about-programs__list article,
  .about-programs__list article:nth-child(even) {
    border-right: 0;
  }
}

@media (max-width: 479px) {
  .about-intro__facts div {
    grid-template-columns: 1fr;
    gap: var(--ycbs-space-2);
  }

  .about-programs__list article {
    grid-template-columns: 38px minmax(0, 1fr);
    padding-inline: 0;
  }
}
</style>
