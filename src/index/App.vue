<template>
  <div id="top" class="institutional-home">
    <SiteHeader />

    <main id="main-content" tabindex="-1">
      <HeroSection />
      <NewsSection />
      <MissionSection />
      <ProgramSection />
      <AchievementSection />
      <EventSection />
      <CommunitySection />
      <JoinSection />
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/layout/SiteHeader.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import MissionSection from '@/components/home/MissionSection.vue'
import ProgramSection from '@/components/home/ProgramSection.vue'
import AchievementSection from '@/components/home/AchievementSection.vue'
import EventSection from '@/components/home/EventSection.vue'
import CommunitySection from '@/components/home/CommunitySection.vue'
import JoinSection from '@/components/home/JoinSection.vue'
import SiteFooter from '@/footer.vue'
import '@/styles/home.css'

export default {
  name: 'App',
  components: {
    SiteHeader,
    HeroSection,
    NewsSection,
    MissionSection,
    ProgramSection,
    AchievementSection,
    EventSection,
    CommunitySection,
    JoinSection,
    SiteFooter,
  },
}
</script>
