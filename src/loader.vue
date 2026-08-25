<template>
  <transition name="page-loader-fade">
    <div v-if="loading" class="page-loader" role="status" aria-live="polite">
      <span class="page-loader__spinner" aria-hidden="true"></span>
      <strong>請稍等</strong>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PageLoader',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 1500;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: var(--ycbs-space-4);
  background: rgba(250, 247, 239, 0.88);
  color: var(--ycbs-color-brand-800);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
}

.page-loader__spinner {
  width: 52px;
  height: 52px;
  border: 3px solid var(--ycbs-color-border-strong);
  border-top-color: var(--ycbs-color-accent-600);
  border-radius: 50%;
  animation: page-loader-spin 700ms linear infinite;
}

.page-loader strong {
  font-size: var(--ycbs-text-sm);
  letter-spacing: 0.08em;
}

.page-loader-fade-enter-active,
.page-loader-fade-leave-active {
  transition: opacity var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.page-loader-fade-enter-from,
.page-loader-fade-leave-to {
  opacity: 0;
}

@keyframes page-loader-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-loader__spinner {
    animation-duration: 1.4s;
  }
}
</style>
