<template>
  <nav class="main-navigation" aria-label="主要導覽">
    <ul class="main-navigation__list">
      <li
        v-for="item in items"
        :key="item.label"
        class="main-navigation__item"
        :class="{ 'main-navigation__item--has-children': item.children?.length }"
      >
        <a
          class="main-navigation__link"
          :href="item.href"
          :aria-current="currentIndicator(item.href)"
        >
          {{ item.label }}
          <span v-if="item.children?.length" class="main-navigation__chevron" aria-hidden="true">⌄</span>
        </a>

        <ul v-if="item.children?.length" class="main-navigation__dropdown">
          <li v-for="child in item.children" :key="child.label">
            <a
              :href="child.href"
              :target="child.external ? '_blank' : undefined"
              :rel="child.external ? 'noopener noreferrer' : undefined"
              :aria-current="currentIndicator(child.href)"
              :aria-label="child.external ? `${child.label}（另開新視窗）` : undefined"
            >
              {{ child.label }}
              <span v-if="child.external" class="main-navigation__external" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: {
    items: {
      type: Array,
      required: true,
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
  },
}
</script>

<style scoped>
.main-navigation {
  width: auto;
  height: auto;
  background: transparent;
  box-shadow: none;
  color: var(--ycbs-color-ink);
  line-height: 1;
}

.main-navigation__list,
.main-navigation__dropdown {
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-navigation__list {
  display: flex;
  align-items: stretch;
  gap: var(--ycbs-space-2);
}

.main-navigation__item {
  position: relative;
  float: none;
}

.main-navigation__link {
  display: flex;
  min-height: var(--ycbs-header-main-height);
  align-items: center;
  gap: 7px;
  padding: 0 var(--ycbs-space-4);
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-sm);
  font-weight: 700;
  letter-spacing: 0.025em;
  transition: color var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.main-navigation__link::after {
  position: absolute;
  right: var(--ycbs-space-4);
  bottom: 0;
  left: var(--ycbs-space-4);
  height: 3px;
  background: var(--ycbs-color-accent-600);
  content: "";
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.main-navigation__chevron {
  display: inline-block;
  width: auto;
  height: auto;
  font-size: 0.65rem;
  line-height: 1;
  transition: transform var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.main-navigation__item:hover > .main-navigation__link,
.main-navigation__item:focus-within > .main-navigation__link {
  color: var(--ycbs-color-brand-700);
}

.main-navigation__item:hover > .main-navigation__link::after,
.main-navigation__item:focus-within > .main-navigation__link::after {
  transform: scaleX(1);
}

.main-navigation__item:hover .main-navigation__chevron,
.main-navigation__item:focus-within .main-navigation__chevron {
  transform: rotate(180deg);
}

.main-navigation__dropdown {
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  z-index: 20;
  width: 220px;
  padding: var(--ycbs-space-2) 0;
  border: 1px solid var(--ycbs-color-border);
  border-top: 3px solid var(--ycbs-color-accent-600);
  background: var(--ycbs-color-surface);
  box-shadow: var(--ycbs-shadow-md);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity var(--ycbs-duration-fast) var(--ycbs-ease-standard),
    transform var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.main-navigation__item:hover > .main-navigation__dropdown,
.main-navigation__item:focus-within > .main-navigation__dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.main-navigation__dropdown li {
  float: none;
}

.main-navigation__dropdown a {
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--ycbs-space-5);
  color: var(--ycbs-color-text);
  font-size: var(--ycbs-text-sm);
  line-height: 1.4;
  transition: background-color var(--ycbs-duration-fast) var(--ycbs-ease-standard),
    color var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.main-navigation__dropdown a:hover,
.main-navigation__dropdown a:focus-visible {
  background: var(--ycbs-color-surface-alt);
  color: var(--ycbs-color-brand-700);
}

.main-navigation__external {
  font-size: 0.65rem;
}
</style>
