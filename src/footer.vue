<template>
  <footer class="site-footer">
    <div class="home-container site-footer__main">
      <div class="site-footer__identity">
        <a class="site-footer__brand" href="index.html" aria-label="YCBS 首頁">
          <span aria-hidden="true">Y</span>
          <strong>YCBS</strong>
        </a>
        <p>國家生技研究園區<br />生技青年創業營官方網站</p>
      </div>

      <nav class="site-footer__column" aria-labelledby="footer-site-navigation">
        <h2 id="footer-site-navigation">網站導覽</h2>
        <a href="index.html#about">營隊宗旨</a>
        <a href="event.html">活動資訊</a>
        <a href="about.html">團隊成員</a>
        <a href="old.html">歷年活動</a>
      </nav>

      <nav class="site-footer__column" aria-labelledby="footer-participation-navigation">
        <h2 id="footer-participation-navigation">參與 YCBS</h2>
        <a :href="registrationUrl" target="_blank" rel="noopener noreferrer" aria-label="報名資訊（另開新視窗）">報名資訊</a>
        <a href="progress.html">網站進度</a>
        <a href="https://nbrp.sinica.edu.tw/" target="_blank" rel="noopener noreferrer" aria-label="國家生技研究園區（另開新視窗）">國家生技研究園區</a>
      </nav>

      <section class="site-footer__column" aria-labelledby="footer-contact">
        <h2 id="footer-contact">聯絡我們</h2>
        <a href="mailto:ycbs@ycbs.tw">ycbs@ycbs.tw</a>
        <a href="https://www.instagram.com/ycbscamp/" target="_blank" rel="noopener noreferrer" aria-label="YCBS Instagram（另開新視窗）">Instagram</a>
        <a href="https://github.com/wxie369-cell/ycbs_frontend" target="_blank" rel="noopener noreferrer" aria-label="YCBS GitHub（另開新視窗）">GitHub</a>
        <button type="button" @click="goTop">回到頁首 <span aria-hidden="true">↑</span></button>
      </section>
    </div>

    <div class="site-footer__legal">
      <div class="home-container">
        <span>© {{ currentYear }} YCBS</span>
        <span>
          Content licensed under
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" aria-label="CC BY 4.0 授權條款（另開新視窗）">CC BY 4.0</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import { registrationUrl } from '@/data/home'

export default {
  name: 'SiteFooter',
  data() {
    return {
      registrationUrl,
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    goTop() {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
    },
  },
}
</script>

<style scoped>
.home-container {
  width: min(calc(100% - (2 * var(--ycbs-container-gutter))), var(--ycbs-container-max));
  margin-inline: auto;
}

.site-footer {
  background: #17131a;
  color: rgba(255, 255, 255, 0.68);
}

.site-footer__main {
  display: grid;
  grid-template-columns: 1.45fr repeat(3, minmax(130px, 0.65fr));
  gap: clamp(2rem, 5vw, 5rem);
  padding-block: clamp(3.5rem, 7vw, 5.5rem);
}

.site-footer__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--ycbs-space-3);
  color: var(--ycbs-color-on-dark);
}

.site-footer__brand > span {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  background: var(--ycbs-color-accent-600);
  font-family: var(--ycbs-font-display);
  font-size: 1.3rem;
  font-weight: 800;
}

.site-footer__brand strong {
  font-size: var(--ycbs-text-lg);
  letter-spacing: 0.12em;
}

.site-footer__identity p {
  margin: var(--ycbs-space-5) 0 0;
  font-size: var(--ycbs-text-sm);
  line-height: 1.9;
}

.site-footer__column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--ycbs-space-3);
}

.site-footer__column h2 {
  margin: 0 0 var(--ycbs-space-3);
  color: var(--ycbs-color-on-dark);
  font-size: var(--ycbs-text-sm);
  font-weight: 750;
  letter-spacing: 0.08em;
}

.site-footer__column a,
.site-footer__column button {
  padding: 0;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.62);
  font-size: var(--ycbs-text-sm);
  text-align: left;
  transition: color var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.site-footer__column button {
  cursor: pointer;
}

.site-footer__column a:hover,
.site-footer__column button:hover {
  color: var(--ycbs-color-on-dark);
}

.site-footer__legal {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.site-footer__legal .home-container {
  display: flex;
  min-height: 70px;
  align-items: center;
  justify-content: space-between;
  gap: var(--ycbs-space-5);
  font-size: var(--ycbs-text-xs);
}

.site-footer__legal a {
  color: #8ed6d0;
}

@media (max-width: 959px) {
  .site-footer__main {
    grid-template-columns: repeat(3, 1fr);
  }

  .site-footer__identity {
    grid-column: 1 / -1;
  }
}

@media (max-width: 599px) {
  .site-footer__main {
    grid-template-columns: repeat(2, 1fr);
  }

  .site-footer__column:last-child {
    grid-column: 1 / -1;
  }

  .site-footer__legal .home-container {
    min-height: 88px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: var(--ycbs-space-1);
  }
}
</style>
