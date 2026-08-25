<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <img
      class="home-hero__ribbon"
      src="Logo/素材/藍帶.png"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      decoding="async"
    />
    <div class="home-hero__glow home-hero__glow--one" aria-hidden="true"></div>
    <div class="home-hero__glow home-hero__glow--two" aria-hidden="true"></div>

    <div class="home-container home-hero__inner">
      <div class="home-hero__content">
        <p class="home-hero__eyebrow">Young Changemakers in Biomedical Science</p>
        <h1 id="home-hero-title">
          <span class="home-hero__kicker">YCBS 生技青年創業營</span>
          <span class="home-hero__title">生技創新，<br />從青年開始</span>
        </h1>
        <p class="home-hero__lead">
          串連科學、產業與創業實作，讓青年在真實議題中建立跨域視野，將想法轉化為能被溝通與驗證的提案。
        </p>

        <div class="home-hero__actions">
          <a
            class="home-button home-button--light"
            :href="registrationUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="查看報名資訊（另開新視窗）"
          >
            查看報名資訊 <span aria-hidden="true">↗</span>
          </a>
          <a class="home-button home-button--outline-light" href="event.html">查看活動資訊</a>
        </div>

        <dl class="home-hero__facts">
          <div>
            <dt>日期</dt>
            <dd>2026.01.28–30</dd>
          </div>
          <div>
            <dt>地點</dt>
            <dd>國家生技研究園區</dd>
          </div>
          <div>
            <dt>核心</dt>
            <dd>探索 · 協作 · 實作</dd>
          </div>
        </dl>
      </div>

      <div class="home-hero__visual" aria-hidden="true">
        <div class="home-hero__visual-frame">
          <img class="home-hero__dna" src="Logo/素材/DNA.png" alt="" decoding="async" />
          <img class="home-hero__logo-art" src="Logo/logo_shadow.png" alt="" decoding="async" />
        </div>
        <p>Biomedical Innovation / Youth Entrepreneurship</p>
      </div>
    </div>
  </section>
</template>

<script>
import { registrationUrl } from '@/data/home'

export default {
  name: 'HeroSection',
  data() {
    return { registrationUrl }
  },
}
</script>

<style scoped>
.home-hero {
  position: relative;
  display: grid;
  min-height: clamp(580px, 66vh, 680px);
  overflow: hidden;
  place-items: stretch;
  background: linear-gradient(118deg, var(--ycbs-color-brand-950) 0%, var(--ycbs-color-brand-800) 58%, #153f48 100%);
  color: var(--ycbs-color-on-dark);
  isolation: isolate;
}

.home-hero::after {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 52px 52px;
  content: "";
  mask-image: linear-gradient(to right, transparent, #000 42%, #000);
}

.home-hero__ribbon {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 58%;
  opacity: 0.22;
  transform: scale(1.08) rotate(-4deg);
}

.home-hero__glow {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(4px);
}

.home-hero__glow--one {
  top: -15%;
  right: 8%;
  width: 360px;
  height: 360px;
  background: rgba(19, 174, 163, 0.2);
}

.home-hero__glow--two {
  bottom: -35%;
  left: 32%;
  width: 480px;
  height: 480px;
  background: rgba(156, 82, 185, 0.18);
}

.home-hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(360px, 0.88fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5.5rem);
  padding-block: clamp(3.5rem, 7vh, 5rem);
}

.home-hero__content {
  position: relative;
  z-index: 2;
  max-width: 720px;
}

.home-hero__eyebrow {
  margin: 0 0 var(--ycbs-space-5);
  color: #95ddd7;
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.home-hero h1 {
  max-width: 700px;
  margin: 0;
  color: var(--ycbs-color-on-dark);
  font-family: var(--ycbs-font-display);
  font-size: var(--ycbs-text-display);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: var(--ycbs-leading-tight);
}

.home-hero__kicker {
  display: block;
  margin-bottom: var(--ycbs-space-3);
  color: rgba(255, 255, 255, 0.72);
  font-size: clamp(0.9rem, 1.5vw, 1.15rem);
  font-weight: 650;
  letter-spacing: 0.08em;
}

.home-hero__title {
  display: block;
}

.home-hero__lead {
  max-width: 640px;
  margin: var(--ycbs-space-6) 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1rem, 1.5vw, 1.16rem);
  line-height: 1.8;
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ycbs-space-3);
  margin-top: var(--ycbs-space-8);
}

.home-hero__actions a span {
  font-size: 0.7rem;
}

.home-hero__facts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ycbs-space-6) var(--ycbs-space-10);
  margin: var(--ycbs-space-10) 0 0;
  padding-top: var(--ycbs-space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.home-hero__facts div {
  display: grid;
  gap: 3px;
}

.home-hero__facts dt {
  color: #92d5cf;
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.12em;
}

.home-hero__facts dd {
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: var(--ycbs-text-sm);
}

.home-hero__visual {
  position: relative;
  justify-self: stretch;
}

.home-hero__visual-frame {
  position: relative;
  aspect-ratio: 1 / 1;
  max-width: 460px;
  margin-inline: auto;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.04);
}

.home-hero__visual-frame::before,
.home-hero__visual-frame::after {
  position: absolute;
  width: 38%;
  height: 38%;
  border-color: #7dd0ca;
  content: "";
}

.home-hero__visual-frame::before {
  top: -1px;
  left: -1px;
  border-top: 3px solid #7dd0ca;
  border-left: 3px solid #7dd0ca;
}

.home-hero__visual-frame::after {
  right: -1px;
  bottom: -1px;
  border-right: 3px solid #7dd0ca;
  border-bottom: 3px solid #7dd0ca;
}

.home-hero__logo-art,
.home-hero__dna {
  position: absolute;
  object-fit: contain;
}

.home-hero__logo-art {
  inset: 4%;
  width: 92%;
  height: 92%;
  filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.18));
}

.home-hero__dna {
  top: -12%;
  right: -12%;
  width: 45%;
  height: 45%;
  opacity: 0.5;
  transform: rotate(12deg);
}

.home-hero__visual > p {
  margin: var(--ycbs-space-4) 0 0;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-align: right;
  text-transform: uppercase;
}

@media (max-width: 959px) {
  .home-hero {
    min-height: 640px;
  }

  .home-hero__inner {
    grid-template-columns: minmax(0, 1fr) minmax(240px, 0.55fr);
    gap: var(--ycbs-space-8);
  }

  .home-hero__visual-frame {
    max-width: 340px;
  }
}

@media (max-width: 767px) {
  .home-hero {
    min-height: 660px;
  }

  .home-hero__inner {
    grid-template-columns: 1fr;
    padding-block: var(--ycbs-space-16);
  }

  .home-hero__content {
    max-width: 620px;
  }

  .home-hero__visual {
    position: absolute;
    right: -100px;
    bottom: -100px;
    width: 380px;
    opacity: 0.18;
  }

  .home-hero__visual > p {
    display: none;
  }

  .home-hero__facts {
    max-width: 500px;
  }
}

@media (max-width: 479px) {
  .home-hero {
    min-height: 680px;
  }

  .home-hero__inner {
    padding-block: var(--ycbs-space-12);
  }

  .home-hero__eyebrow {
    max-width: 290px;
    line-height: 1.6;
  }

  .home-hero__lead {
    font-size: 1rem;
    line-height: 1.7;
  }

  .home-hero__actions {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: var(--ycbs-space-6);
  }

  .home-hero__facts {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--ycbs-space-5);
    margin-top: var(--ycbs-space-6);
    padding-top: var(--ycbs-space-5);
  }
}
</style>
