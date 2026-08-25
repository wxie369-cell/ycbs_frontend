<template>
  <section id="join" class="home-section join-section">
    <div class="home-container">
      <SectionHeader
        eyebrow="Join YCBS"
        title="把對生技創新的好奇，帶進一段跨域實作旅程"
        description="認識參與 YCBS 的學習價值、申請方式與最新招募狀態。下一梯次的正式資格與日期，將以官方公告為準。"
      />

      <section v-reveal class="join-block join-reasons" aria-labelledby="join-reasons-title">
        <header class="join-block__header">
          <p>Why Join</p>
          <h3 id="join-reasons-title">從不同觀點出發，讓想法走向可實踐的提案</h3>
        </header>

        <div class="join-reasons__grid">
          <article v-for="reason in reasons" :key="reason.index">
            <span>{{ reason.index }}</span>
            <h4>{{ reason.title }}</h4>
            <p>{{ reason.description }}</p>
          </article>
        </div>
      </section>

      <section v-reveal class="join-block eligibility" aria-labelledby="eligibility-title">
        <div class="eligibility__label">
          <p>Who Can Apply</p>
          <span>Eligibility</span>
        </div>
        <div class="eligibility__content">
          <h3 id="eligibility-title">{{ eligibility.title }}</h3>
          <p>{{ eligibility.description }}</p>
          <ul aria-label="適合關注的主題">
            <li v-for="interest in eligibility.interests" :key="interest">{{ interest }}</li>
          </ul>
          <p class="eligibility__note">{{ eligibility.note }}</p>
        </div>
      </section>

      <section class="join-block application-process" aria-labelledby="application-process-title">
        <header class="join-block__header">
          <p>Application Process</p>
          <h3 id="application-process-title">申請流程</h3>
        </header>

        <ol class="application-process__list">
          <li v-for="step in steps" :key="step.index" v-reveal>
            <span>{{ step.index }}</span>
            <div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <section v-reveal class="join-block application-timeline" aria-labelledby="application-timeline-title">
        <header class="join-block__header application-timeline__header">
          <div>
            <p>Timeline</p>
            <h3 id="application-timeline-title">下一梯次時程</h3>
          </div>
          <span>To be announced</span>
        </header>

        <dl>
          <div v-for="item in timeline" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
      </section>

      <section class="join-block join-faq" aria-labelledby="join-faq-title">
        <header class="join-block__header">
          <p>FAQ</p>
          <h3 id="join-faq-title">常見問題</h3>
        </header>

        <div class="join-faq__list">
          <details v-for="item in faqItems" :key="item.question">
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </section>
    </div>

    <div class="home-container">
      <section v-reveal class="join-cta" aria-labelledby="join-cta-title">
        <div>
          <p>Register / Apply</p>
          <h3 id="join-cta-title">準備好了解下一次 YCBS 了嗎？</h3>
          <span>下一梯次尚待公告；表單狀態與適用梯次請以官方頁面為準。</span>
        </div>
        <div class="join-cta__actions">
          <a
            class="home-button home-button--light"
            :href="registrationUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="查看官方報名表單（另開新視窗）"
          >查看官方表單</a>
          <a class="home-button home-button--outline-light" href="event.html">了解營隊內容</a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import {
  applicationEligibility,
  applicationSteps,
  applicationTimeline,
  joinFaqItems,
  joinReasons,
  registrationUrl,
} from '@/data/home'

export default {
  name: 'JoinSection',
  components: { SectionHeader },
  data() {
    return {
      eligibility: applicationEligibility,
      faqItems: joinFaqItems,
      reasons: joinReasons,
      registrationUrl,
      steps: applicationSteps,
      timeline: applicationTimeline,
    }
  },
}
</script>

<style scoped>
.join-section {
  overflow: hidden;
  background: var(--ycbs-color-canvas);
}

.join-block {
  padding-top: var(--ycbs-space-16);
  border-top: 1px solid var(--ycbs-color-border-strong);
}

.join-block + .join-block {
  margin-top: var(--ycbs-space-20);
}

.join-block__header {
  display: grid;
  grid-template-columns: minmax(180px, 0.38fr) minmax(0, 1fr);
  gap: var(--ycbs-space-8);
  margin-bottom: var(--ycbs-space-10);
}

.join-block__header > p,
.eligibility__label > p,
.join-cta > div > p {
  margin: 0;
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.join-block__header h3,
.eligibility h3,
.join-cta h3 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-family: var(--ycbs-font-display);
  font-size: clamp(1.5rem, 2.5vw, 2.15rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.4;
}

.join-reasons__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--ycbs-color-border);
}

.join-reasons__grid article {
  min-height: 250px;
  padding: var(--ycbs-space-8);
  border-bottom: 1px solid var(--ycbs-color-border);
}

.join-reasons__grid article + article {
  border-left: 1px solid var(--ycbs-color-border);
}

.join-reasons__grid article > span,
.application-process__list > li > span {
  display: block;
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-sm);
  font-weight: 800;
  letter-spacing: 0.08em;
}

.join-reasons__grid h4,
.application-process__list h4 {
  margin: var(--ycbs-space-10) 0 0;
  color: var(--ycbs-color-ink);
  font-family: var(--ycbs-font-display);
  font-size: var(--ycbs-text-lg);
  font-weight: 750;
}

.join-reasons__grid p,
.application-process__list p {
  margin: var(--ycbs-space-4) 0 0;
  color: var(--ycbs-color-muted);
  line-height: var(--ycbs-leading-copy);
}

.eligibility {
  display: grid;
  grid-template-columns: minmax(220px, 0.38fr) minmax(0, 1fr);
  gap: var(--ycbs-space-12);
  padding: var(--ycbs-space-12);
  border: 0;
  background: var(--ycbs-color-surface-alt);
}

.eligibility__label span {
  display: block;
  margin-top: var(--ycbs-space-4);
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
}

.eligibility__content > p {
  max-width: 710px;
  margin: var(--ycbs-space-5) 0 0;
  color: var(--ycbs-color-text);
  font-size: var(--ycbs-text-md);
  line-height: var(--ycbs-leading-copy);
}

.eligibility__content ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ycbs-space-2);
  margin: var(--ycbs-space-8) 0 0;
  padding: 0;
  list-style: none;
}

.eligibility__content li {
  padding: var(--ycbs-space-2) var(--ycbs-space-4);
  border: 1px solid var(--ycbs-color-border-strong);
  border-radius: 999px;
  background: var(--ycbs-color-surface);
  color: var(--ycbs-color-brand-700);
  font-size: var(--ycbs-text-sm);
  font-weight: 700;
}

.eligibility__content .eligibility__note {
  margin-top: var(--ycbs-space-6);
  padding-left: var(--ycbs-space-4);
  border-left: 3px solid var(--ycbs-color-accent-600);
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
}

.application-process__list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
}

.application-process__list li {
  position: relative;
  padding: var(--ycbs-space-6) var(--ycbs-space-6) var(--ycbs-space-8) 0;
  border-top: 3px solid var(--ycbs-color-accent-600);
}

.application-process__list li + li {
  padding-left: var(--ycbs-space-6);
}

.application-process__list li + li::before {
  position: absolute;
  top: -7px;
  left: -5px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--ycbs-color-accent-600);
  content: "";
}

.application-process__list h4 {
  margin-top: var(--ycbs-space-5);
  font-size: var(--ycbs-text-md);
}

.application-timeline {
  padding: var(--ycbs-space-12);
  border: 0;
  background: var(--ycbs-color-brand-950);
  color: var(--ycbs-color-on-dark);
}

.application-timeline__header {
  align-items: end;
  margin-bottom: var(--ycbs-space-10);
}

.application-timeline__header > div > p {
  margin: 0 0 var(--ycbs-space-3);
  color: #8fd8d2;
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.application-timeline__header h3 {
  color: var(--ycbs-color-on-dark);
}

.application-timeline__header > span {
  justify-self: end;
  color: rgba(255, 255, 255, 0.62);
  font-size: var(--ycbs-text-sm);
}

.application-timeline dl {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.22);
}

.application-timeline dl > div {
  padding: var(--ycbs-space-8) var(--ycbs-space-5) 0;
}

.application-timeline dl > div:first-child {
  padding-left: 0;
}

.application-timeline dl > div + div {
  border-left: 1px solid rgba(255, 255, 255, 0.16);
}

.application-timeline dt {
  color: rgba(255, 255, 255, 0.62);
  font-size: var(--ycbs-text-sm);
}

.application-timeline dd {
  margin: var(--ycbs-space-3) 0 0;
  color: var(--ycbs-color-on-dark);
  font-size: var(--ycbs-text-md);
  font-weight: 750;
}

.join-faq__list {
  border-top: 1px solid var(--ycbs-color-border-strong);
}

.join-faq details {
  border-bottom: 1px solid var(--ycbs-color-border);
}

.join-faq summary {
  position: relative;
  padding: var(--ycbs-space-6) var(--ycbs-space-12) var(--ycbs-space-6) 0;
  color: var(--ycbs-color-ink);
  cursor: pointer;
  font-size: var(--ycbs-text-md);
  font-weight: 750;
  line-height: 1.5;
  list-style: none;
}

.join-faq summary::-webkit-details-marker {
  display: none;
}

.join-faq summary::after {
  position: absolute;
  top: 50%;
  right: var(--ycbs-space-2);
  color: var(--ycbs-color-accent-700);
  content: "+";
  font-size: 1.6rem;
  font-weight: 400;
  transform: translateY(-50%);
}

.join-faq details[open] summary::after {
  content: "\2212";
}

.join-faq details > p {
  max-width: 780px;
  margin: calc(-1 * var(--ycbs-space-2)) 0 var(--ycbs-space-6);
  color: var(--ycbs-color-muted);
  line-height: var(--ycbs-leading-copy);
}

.join-cta {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ycbs-space-12);
  margin-top: var(--ycbs-space-20);
  padding: clamp(2rem, 5vw, 4rem);
  background: linear-gradient(110deg, var(--ycbs-color-accent-700), #12545c 50%, var(--ycbs-color-brand-800));
  color: var(--ycbs-color-on-dark);
}

.join-cta > div > p {
  color: #a8e2de;
}

.join-cta h3 {
  max-width: 720px;
  margin-top: var(--ycbs-space-3);
  color: var(--ycbs-color-on-dark);
}

.join-cta > div > span {
  display: block;
  max-width: 720px;
  margin-top: var(--ycbs-space-4);
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--ycbs-text-sm);
  line-height: 1.7;
}

.join-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ycbs-space-3);
}

@media (max-width: 959px) {
  .join-reasons__grid,
  .application-process__list,
  .application-timeline dl {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .join-reasons__grid article:nth-child(3) {
    grid-column: 1 / -1;
  }

  .join-reasons__grid article:nth-child(3),
  .application-process__list li:nth-child(3) {
    border-left: 0;
  }

  .application-process__list li:nth-child(3)::before {
    display: none;
  }

  .application-timeline dl > div:nth-child(3) {
    padding-left: 0;
    border-left: 0;
  }

  .application-timeline dl > div:nth-child(n + 3) {
    margin-top: var(--ycbs-space-8);
    padding-top: var(--ycbs-space-6);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .join-cta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .join-block__header,
  .eligibility,
  .application-timeline__header {
    grid-template-columns: 1fr;
    gap: var(--ycbs-space-5);
  }

  .application-timeline__header > span {
    justify-self: start;
  }
}

@media (max-width: 599px) {
  .join-block {
    padding-top: var(--ycbs-space-10);
  }

  .join-block + .join-block,
  .join-cta {
    margin-top: var(--ycbs-space-16);
  }

  .join-reasons__grid,
  .application-process__list,
  .application-timeline dl {
    grid-template-columns: 1fr;
  }

  .join-reasons__grid article {
    min-height: 0;
    padding-inline: 0;
  }

  .join-reasons__grid article + article {
    border-left: 0;
  }

  .join-reasons__grid article:nth-child(3) {
    grid-column: auto;
  }

  .eligibility,
  .application-timeline,
  .join-cta {
    padding: var(--ycbs-space-8) var(--ycbs-space-6);
  }

  .application-process__list li,
  .application-process__list li + li {
    padding: var(--ycbs-space-6) 0;
    border-top: 1px solid var(--ycbs-color-border);
  }

  .application-process__list li + li::before {
    display: none;
  }

  .application-timeline dl > div,
  .application-timeline dl > div:first-child,
  .application-timeline dl > div:nth-child(3),
  .application-timeline dl > div:nth-child(n + 3) {
    margin: 0;
    padding: var(--ycbs-space-5) 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-left: 0;
  }

  .join-cta__actions {
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .join-faq summary {
    scroll-behavior: auto;
  }
}
</style>
