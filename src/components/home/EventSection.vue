<template>
  <section id="events" class="home-section home-section--muted event-section">
    <div class="home-container">
      <SectionHeader
        eyebrow="Events"
        title="活動、交流與實作發表"
        description="從密集營隊到成果提案，YCBS 透過實體活動串連知識、產業觀點與跨域青年社群。"
      />

      <section v-reveal class="upcoming-event" aria-labelledby="upcoming-event-title">
        <header class="upcoming-event__header">
          <p>Upcoming Events</p>
          <span>{{ upcoming.status }}</span>
        </header>

        <div class="upcoming-event__feature">
          <div class="upcoming-event__date" aria-hidden="true">
            <span>Next</span>
            <strong>{{ upcoming.date }}</strong>
          </div>

          <div class="upcoming-event__content">
            <p>Featured Event</p>
            <h3 id="upcoming-event-title">{{ upcoming.title }}</h3>
            <p>{{ upcoming.description }}</p>
            <a class="home-button home-button--light" :href="upcoming.href">{{ upcoming.linkLabel }}</a>
          </div>
        </div>
      </section>

      <section class="event-archive" aria-labelledby="event-archive-title">
        <header class="event-archive__header">
          <div>
            <p>Event Archive</p>
            <h3 id="event-archive-title">2026</h3>
          </div>
          <span>已公布的 YCBS 活動</span>
        </header>

        <div class="event-archive__list">
          <article v-for="event in archive" :key="`${event.year}-${event.title}`" v-reveal>
            <div class="event-archive__field event-archive__field--title">
              <span>Event</span>
              <h4>{{ event.title }}</h4>
              <em>{{ event.status }}</em>
            </div>
            <div class="event-archive__field">
              <span>Date</span>
              <p>{{ event.date }}</p>
            </div>
            <div class="event-archive__field">
              <span>Location</span>
              <p>{{ event.location }}</p>
            </div>
            <div class="event-archive__field event-archive__field--description">
              <span>Description</span>
              <p>{{ event.description }}</p>
            </div>
            <a class="event-archive__link" :href="event.href" :aria-label="`查看活動：${event.title}`">查看活動</a>
          </article>
        </div>

        <div class="home-section__action">
          <a class="text-link" href="old.html">瀏覽歷年活動</a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import { eventArchive, upcomingEvent } from '@/data/home'

export default {
  name: 'EventSection',
  components: { SectionHeader },
  data() {
    return {
      upcoming: upcomingEvent,
      archive: eventArchive,
    }
  },
}
</script>

<style scoped>
.upcoming-event {
  border-top: 1px solid var(--ycbs-color-border-strong);
}

.upcoming-event__header,
.event-archive__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--ycbs-space-6);
}

.upcoming-event__header {
  padding: var(--ycbs-space-5) 0;
}

.upcoming-event__header p,
.event-archive__header > div > p {
  margin: 0;
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.upcoming-event__header > span,
.event-archive__header > span {
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
}

.upcoming-event__feature {
  position: relative;
  display: grid;
  min-height: 430px;
  grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
  overflow: hidden;
  background: var(--ycbs-color-brand-900);
  color: var(--ycbs-color-on-dark);
}

.upcoming-event__feature::after {
  position: absolute;
  right: -110px;
  bottom: -190px;
  width: 390px;
  height: 390px;
  border: 1px solid rgba(135, 213, 207, 0.2);
  border-radius: 50%;
  content: "";
}

.upcoming-event__date {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--ycbs-space-10);
  border-right: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
}

.upcoming-event__date span {
  color: #87d5cf;
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.upcoming-event__date strong {
  margin-top: var(--ycbs-space-5);
  font-size: clamp(3.4rem, 7vw, 6.5rem);
  font-weight: 750;
  letter-spacing: -0.06em;
  line-height: 0.95;
}

.upcoming-event__content {
  position: relative;
  z-index: 1;
  align-self: center;
  max-width: 670px;
  padding: clamp(2rem, 6vw, 5rem);
}

.upcoming-event__content > p:first-child {
  margin: 0 0 var(--ycbs-space-4);
  color: #87d5cf;
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.upcoming-event__content h3,
.event-archive__header h3,
.event-archive__field h4 {
  margin: 0;
  font-family: var(--ycbs-font-display);
}

.upcoming-event__content h3 {
  color: var(--ycbs-color-on-dark);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.25;
}

.upcoming-event__content > p:not(:first-child) {
  max-width: 590px;
  margin: var(--ycbs-space-6) 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: var(--ycbs-text-md);
  line-height: var(--ycbs-leading-copy);
}

.upcoming-event__content .home-button {
  margin-top: var(--ycbs-space-8);
}

.event-archive {
  margin-top: var(--ycbs-space-20);
}

.event-archive__header {
  padding-bottom: var(--ycbs-space-5);
  border-bottom: 1px solid var(--ycbs-color-border-strong);
}

.event-archive__header h3 {
  margin-top: var(--ycbs-space-2);
  color: var(--ycbs-color-ink);
  font-size: clamp(2.6rem, 5vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
}

.event-archive__list article {
  display: grid;
  grid-template-columns: minmax(210px, 0.9fr) 170px 200px minmax(260px, 1.15fr) auto;
  align-items: start;
  gap: var(--ycbs-space-6);
  padding: var(--ycbs-space-8) 0;
  border-bottom: 1px solid var(--ycbs-color-border);
}

.event-archive__field > span {
  display: block;
  margin-bottom: var(--ycbs-space-3);
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.event-archive__field h4 {
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-lg);
  font-weight: 750;
  line-height: 1.45;
}

.event-archive__field em {
  display: inline-flex;
  margin-top: var(--ycbs-space-8);
  padding: var(--ycbs-space-1) var(--ycbs-space-3);
  border: 1px solid var(--ycbs-color-border-strong);
  border-radius: 999px;
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-style: normal;
  font-weight: 750;
}

.event-archive__field p {
  margin: 0;
  color: var(--ycbs-color-text);
  line-height: var(--ycbs-leading-copy);
}

.event-archive__field--description p {
  color: var(--ycbs-color-muted);
}

.event-archive__link {
  align-self: center;
  white-space: nowrap;
  color: var(--ycbs-color-brand-700);
  font-size: var(--ycbs-text-sm);
  font-weight: 750;
}

.event-archive__link::after {
  margin-left: var(--ycbs-space-2);
  content: "\2192";
}

.event-archive .home-section__action {
  margin-top: var(--ycbs-space-8);
}

@media (max-width: 1099px) {
  .event-archive__list article {
    grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr) auto;
  }

  .event-archive__field--title {
    grid-row: span 2;
  }

  .event-archive__field--description {
    grid-column: 2;
  }

  .event-archive__link {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
}

@media (max-width: 767px) {
  .upcoming-event__feature {
    grid-template-columns: 1fr;
  }

  .upcoming-event__date {
    min-height: 190px;
    flex-direction: row;
    gap: var(--ycbs-space-5);
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .upcoming-event__date strong {
    margin-top: 0;
  }

  .event-archive__list article {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .event-archive__field--title,
  .event-archive__field--description {
    grid-column: 1 / -1;
    grid-row: auto;
  }

  .event-archive__link {
    grid-column: 1 / -1;
    grid-row: auto;
    justify-self: start;
  }
}

@media (max-width: 599px) {
  .upcoming-event__header,
  .event-archive__header {
    align-items: flex-start;
    flex-direction: column;
    gap: var(--ycbs-space-2);
  }

  .upcoming-event__feature {
    min-height: 0;
  }

  .upcoming-event__date {
    min-height: 150px;
    padding: var(--ycbs-space-6);
  }

  .upcoming-event__date strong {
    font-size: 3.5rem;
  }

  .upcoming-event__content {
    padding: var(--ycbs-space-8) var(--ycbs-space-6) var(--ycbs-space-10);
  }

  .event-archive {
    margin-top: var(--ycbs-space-16);
  }

  .event-archive__list article {
    grid-template-columns: 1fr;
    gap: var(--ycbs-space-6);
  }

  .event-archive__field--title,
  .event-archive__field--description,
  .event-archive__link {
    grid-column: auto;
  }
}
</style>
