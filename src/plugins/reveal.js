// Simple reveal-on-scroll directive using IntersectionObserver
export default {
  install(app) {
    app.directive('reveal', {
      mounted(el, binding) {
        el.classList.add('reveal')
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
          el.classList.add('show')
          return
        }
        const threshold = (binding && binding.value && binding.value.threshold) || 0.12
        const options = { threshold }
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.add('show')
              observer.unobserve(el)
            }
          })
        }, options)
        el.__ycbsRevealObserver = observer
        observer.observe(el)
      },
      unmounted(el) {
        if (el.__ycbsRevealObserver) {
          el.__ycbsRevealObserver.disconnect()
          delete el.__ycbsRevealObserver
        }
      }
    })
  }
}
