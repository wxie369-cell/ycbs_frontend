<template>
  <transition name="mobile-nav-fade">
    <div v-show="open" class="mobile-navigation" @keydown.tab="trapFocus">
      <button class="mobile-navigation__backdrop" type="button" aria-label="關閉導覽" @click="$emit('close')"></button>

      <aside
        id="mobile-navigation"
        ref="panel"
        class="mobile-navigation__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
      >
        <div class="mobile-navigation__header">
          <div>
            <strong id="mobile-navigation-title">YCBS 行動版導覽</strong>
            <span>生技青年創業營</span>
          </div>
          <button ref="closeButton" class="mobile-navigation__close" type="button" aria-label="關閉選單" @click="$emit('close')">
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav class="mobile-navigation__nav" aria-label="行動版主要導覽">
          <ul>
            <li v-for="(item, itemIndex) in items" :key="item.label" class="mobile-navigation__item">
              <div class="mobile-navigation__row">
                <a :href="item.href" :aria-current="currentIndicator(item.href)" @click="$emit('close')">{{ item.label }}</a>
                <button
                  v-if="item.children?.length"
                  type="button"
                  :aria-expanded="expandedItem === item.label ? 'true' : 'false'"
                  :aria-controls="`mobile-subnav-${itemIndex}`"
                  :aria-label="`${expandedItem === item.label ? '關閉' : '開啟'}${item.label}子選單`"
                  @click="toggle(item.label)"
                >
                  <span
                    class="mobile-navigation__chevron"
                    :class="{ 'is-open': expandedItem === item.label }"
                    aria-hidden="true"
                  >⌄</span>
                </button>
              </div>

              <div
                v-if="item.children?.length"
                v-show="expandedItem === item.label"
                :id="`mobile-subnav-${itemIndex}`"
                class="mobile-navigation__subnav"
                :class="{ 'is-open': expandedItem === item.label }"
              >
                <a
                  v-for="child in item.children"
                  :key="child.label"
                  :href="child.href"
                  :target="child.external ? '_blank' : undefined"
                  :rel="child.external ? 'noopener noreferrer' : undefined"
                  :aria-current="currentIndicator(child.href)"
                  :aria-label="child.external ? `${child.label}（另開新視窗）` : undefined"
                  @click="$emit('close')"
                >
                  {{ child.label }}
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <div class="mobile-navigation__footer">
          <a href="mailto:ycbs@ycbs.tw">ycbs@ycbs.tw</a>
          <a
            href="https://www.instagram.com/ycbscamp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YCBS Instagram（另開新視窗）"
          >Instagram</a>
        </div>
      </aside>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MobileNavigation',
  emits: ['close'],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      expandedItem: null,
    }
  },
  watch: {
    open(open) {
      if (open) {
        this.$nextTick(() => this.$refs.closeButton?.focus())
      }
    },
  },
  methods: {
    currentIndicator(href) {
      const current = new URL(window.location.href)
      const target = new URL(href, current)
      if (target.origin !== current.origin || target.pathname !== current.pathname) return undefined
      if (target.hash) return target.hash === current.hash ? 'location' : undefined
      return current.hash ? undefined : 'page'
    },
    toggle(label) {
      this.expandedItem = this.expandedItem === label ? null : label
    },
    trapFocus(event) {
      const focusable = [...this.$refs.panel.querySelectorAll('a[href], button:not([disabled])')]
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    },
  },
}
</script>

<style scoped>
.mobile-navigation {
  position: fixed;
  inset: 0;
  z-index: 1200;
}

.mobile-navigation__backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: rgba(17, 14, 22, 0.58);
}

.mobile-navigation__panel {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: min(88vw, 380px);
  height: 100%;
  flex-direction: column;
  overflow-y: auto;
  background: var(--ycbs-color-surface);
  box-shadow: -12px 0 34px rgba(20, 15, 24, 0.18);
}

.mobile-navigation__header {
  display: flex;
  min-height: 92px;
  align-items: center;
  justify-content: space-between;
  padding: var(--ycbs-space-5) var(--ycbs-space-6);
  border-bottom: 1px solid var(--ycbs-color-border);
}

.mobile-navigation__header div {
  display: grid;
  gap: 2px;
}

.mobile-navigation__header strong {
  color: var(--ycbs-color-brand-800);
  font-family: var(--ycbs-font-display);
  font-size: var(--ycbs-text-lg);
  letter-spacing: 0.08em;
}

.mobile-navigation__header span {
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-xs);
}

.mobile-navigation__close {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--ycbs-color-border);
  border-radius: 50%;
  background: transparent;
  color: var(--ycbs-color-ink);
  cursor: pointer;
}

.mobile-navigation__close span {
  font-size: 1.7rem;
  line-height: 1;
}

.mobile-navigation__nav {
  width: 100%;
  height: auto;
  flex: 1;
  padding: var(--ycbs-space-4) var(--ycbs-space-6);
  background: transparent;
  box-shadow: none;
  color: var(--ycbs-color-ink);
  line-height: 1.5;
}

.mobile-navigation__nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.mobile-navigation__item {
  float: none;
  border-bottom: 1px solid var(--ycbs-color-border);
}

.mobile-navigation__row {
  display: flex;
  min-height: 58px;
  align-items: center;
}

.mobile-navigation__row > a {
  display: flex;
  min-height: 58px;
  flex: 1;
  align-items: center;
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-base);
  font-weight: 700;
}

.mobile-navigation__row button {
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--ycbs-color-muted);
  cursor: pointer;
}

.mobile-navigation__chevron {
  display: inline-block;
  transition: transform var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.mobile-navigation__chevron.is-open {
  transform: rotate(180deg);
}

.mobile-navigation__subnav {
  display: grid;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height var(--ycbs-duration-base) var(--ycbs-ease-standard),
    opacity var(--ycbs-duration-fast) var(--ycbs-ease-standard),
    padding var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.mobile-navigation__subnav.is-open {
  max-height: 240px;
  padding-bottom: var(--ycbs-space-3);
  opacity: 1;
}

.mobile-navigation__subnav a {
  padding: 11px var(--ycbs-space-4);
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
}

.mobile-navigation__footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ycbs-space-3) var(--ycbs-space-5);
  padding: var(--ycbs-space-6);
  border-top: 1px solid var(--ycbs-color-border);
  background: var(--ycbs-color-surface-alt);
}

.mobile-navigation__footer a {
  color: var(--ycbs-color-brand-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 700;
}

.mobile-nav-fade-enter-active,
.mobile-nav-fade-leave-active {
  transition: opacity var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.mobile-nav-fade-enter-active .mobile-navigation__panel,
.mobile-nav-fade-leave-active .mobile-navigation__panel {
  transition: transform var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.mobile-nav-fade-enter-from,
.mobile-nav-fade-leave-to {
  opacity: 0;
}

.mobile-nav-fade-enter-from .mobile-navigation__panel,
.mobile-nav-fade-leave-to .mobile-navigation__panel {
  transform: translateX(100%);
}
</style>
