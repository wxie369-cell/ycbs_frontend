<template>
  <header class="site-header" :class="{ 'site-header--compact': isCompact }">
    <a class="site-header__skip-link" href="#main-content">跳至主要內容</a>

    <div class="site-header__utility">
      <div class="home-container site-header__utility-inner">
        <span>2026 YCBS · 1/28–1/30</span>
        <div>
          <a href="mailto:ycbs@ycbs.tw"><span aria-hidden="true">✉</span> ycbs@ycbs.tw</a>
          <a
            href="https://www.instagram.com/ycbscamp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YCBS Instagram（另開新視窗）"
          >
            <span aria-hidden="true">↗</span> Instagram
          </a>
        </div>
      </div>
    </div>

    <div class="site-header__main">
      <div class="home-container site-header__main-inner">
        <a class="site-header__identity" href="index.html" aria-label="YCBS 首頁">
          <span class="site-header__mark" aria-hidden="true">Y</span>
          <span>
            <strong>YCBS</strong>
            <small>生技青年創業營</small>
          </span>
        </a>

        <div class="site-header__desktop">
          <MainNavigation :items="items" />
          <a
            class="site-header__cta"
            :href="registrationUrl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="報名資訊（另開新視窗）"
          >報名資訊</a>
        </div>

        <button
          ref="menuTrigger"
          class="site-header__menu-trigger"
          type="button"
          aria-controls="mobile-navigation"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          :aria-label="menuOpen ? '關閉導覽選單' : '開啟導覽選單'"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <MobileNavigation :items="items" :open="menuOpen" @close="menuOpen = false" />
  </header>
</template>

<script>
import MainNavigation from './MainNavigation.vue'
import MobileNavigation from './MobileNavigation.vue'
import { navigationItems, registrationUrl } from '@/data/home'

function resolveNavigationItems() {
  const isHomePage = /\/(?:index\.html)?$/.test(window.location.pathname)
  if (isHomePage) return navigationItems

  const resolveHref = href => (href.startsWith('#') ? `index.html${href}` : href)
  return navigationItems.map(item => ({
    ...item,
    href: resolveHref(item.href),
    children: item.children?.map(child => ({ ...child, href: resolveHref(child.href) })),
  }))
}

export default {
  name: 'SiteHeader',
  components: {
    MainNavigation,
    MobileNavigation,
  },
  data() {
    return {
      items: resolveNavigationItems(),
      registrationUrl,
      menuOpen: false,
      isCompact: false,
    }
  },
  watch: {
    menuOpen(open) {
      document.body.style.overflow = open ? 'hidden' : ''
      if (!open) this.$nextTick(() => this.$refs.menuTrigger?.focus())
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown)
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    this.handleScroll()
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
    window.removeEventListener('scroll', this.handleScroll)
    document.body.style.overflow = ''
  },
  methods: {
    handleKeydown(event) {
      if (event.key === 'Escape') this.menuOpen = false
    },
    handleScroll() {
      this.isCompact = window.scrollY > 24
    },
  },
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--ycbs-color-surface);
  box-shadow: var(--ycbs-shadow-header);
}

.site-header__skip-link {
  position: fixed;
  top: var(--ycbs-space-3);
  left: var(--ycbs-space-3);
  z-index: 1200;
  padding: var(--ycbs-space-3) var(--ycbs-space-5);
  border: 2px solid var(--ycbs-color-on-dark);
  border-radius: var(--ycbs-radius-sm);
  background: var(--ycbs-color-brand-800);
  color: var(--ycbs-color-on-dark);
  font-weight: 750;
  transform: translateY(calc(-100% - var(--ycbs-space-5)));
  transition: transform var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.site-header__skip-link:focus {
  color: var(--ycbs-color-on-dark);
  transform: translateY(0);
}

.site-header__utility {
  height: var(--ycbs-header-utility-height);
  overflow: hidden;
  background: var(--ycbs-color-brand-950);
  color: rgba(255, 255, 255, 0.82);
  transition: height var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.site-header--compact .site-header__utility {
  height: 0;
}

.site-header__utility-inner {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: var(--ycbs-text-xs);
  letter-spacing: 0.04em;
}

.site-header__utility-inner div {
  display: flex;
  gap: var(--ycbs-space-6);
}

.site-header__utility a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.82);
  transition: color var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.site-header__utility a:hover {
  color: var(--ycbs-color-on-dark);
}

.site-header__main,
.site-header__main-inner {
  height: var(--ycbs-header-main-height);
}

.site-header__main-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ycbs-space-8);
}

.site-header__identity {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: var(--ycbs-space-3);
  color: var(--ycbs-color-ink);
}

.site-header__mark {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border: 1px solid var(--ycbs-color-brand-700);
  background: var(--ycbs-color-brand-700);
  color: var(--ycbs-color-on-dark);
  font-family: var(--ycbs-font-display);
  font-size: 1.45rem;
  font-weight: 800;
  line-height: 1;
}

.site-header__identity > span:last-child {
  display: grid;
  gap: 1px;
}

.site-header__identity strong {
  color: var(--ycbs-color-brand-800);
  font-family: var(--ycbs-font-display);
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  line-height: 1.1;
}

.site-header__identity small {
  color: var(--ycbs-color-muted);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  line-height: 1.2;
}

.site-header__desktop {
  display: flex;
  height: 100%;
  align-items: center;
  gap: var(--ycbs-space-5);
}

.site-header__cta {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  padding: 0 var(--ycbs-space-5);
  border: 1px solid var(--ycbs-color-brand-700);
  border-radius: var(--ycbs-radius-sm);
  background: var(--ycbs-color-brand-700);
  color: var(--ycbs-color-on-dark);
  font-size: var(--ycbs-text-sm);
  font-weight: 750;
  transition: background-color var(--ycbs-duration-fast) var(--ycbs-ease-standard),
    border-color var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.site-header__cta:hover {
  border-color: var(--ycbs-color-brand-600);
  background: var(--ycbs-color-brand-600);
  color: var(--ycbs-color-on-dark);
}

.site-header__menu-trigger {
  display: none;
  width: 44px;
  height: 44px;
  padding: 10px;
  border: 1px solid var(--ycbs-color-border);
  border-radius: var(--ycbs-radius-sm);
  background: transparent;
  cursor: pointer;
}

.site-header__menu-trigger span {
  display: block;
  width: 100%;
  height: 2px;
  margin: 5px 0;
  background: var(--ycbs-color-ink);
}

@media (max-width: 1100px) {
  .site-header__desktop {
    gap: var(--ycbs-space-3);
  }

  .site-header__cta {
    padding-inline: var(--ycbs-space-4);
  }
}

@media (max-width: 959px) {
  .site-header__utility,
  .site-header__desktop {
    display: none;
  }

  .site-header__main,
  .site-header__main-inner {
    height: var(--ycbs-header-mobile-height);
  }

  .site-header__menu-trigger {
    display: block;
  }

  .site-header__mark {
    width: 42px;
    height: 42px;
    font-size: 1.35rem;
  }
}

@media (max-width: 389px) {
  .site-header__identity small {
    display: none;
  }
}
</style>
