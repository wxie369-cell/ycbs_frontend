<template>
  <div id="top" class="institutional-home institutional-about">
    <SiteHeader />

    <main id="main-content" tabindex="-1">
      <AboutPage />
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import AboutPage from '@/about/wallpaper.vue'
import SiteFooter from '@/footer.vue'
import '@/styles/home.css'

export default {
  name: 'AboutApp',
  components: {
    SiteHeader,
    AboutPage,
    SiteFooter,
  },
}
</script>
