<template>
  <v-app>
    <SiteHeader />
    <page_loader :loading = 'loading' />
    <v-main id="main-content" tabindex="-1">
      <h1 class="sr-only">YCBS 歷年活動</h1>
      <index_wallpaper />
    </v-main>
  </v-app>

  <site_footer />
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import page_loader from '@/loader.vue'
import index_wallpaper from '@/index/wallpaper.vue'
import site_footer from '@/footer.vue'
import '@/styles/home.css'

export default {
  name: 'OldApp',
  components: {
    SiteHeader,
    page_loader,
    site_footer,
    index_wallpaper,
  },
  data() {
    return { loading: true, loadingTimer: null }
  },
  mounted() {
    this.loadingTimer = window.setTimeout(() => {
      this.loading = false
    }, 100)
  },
  beforeUnmount() {
    window.clearTimeout(this.loadingTimer)
  },
}
</script>
