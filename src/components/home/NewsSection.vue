<template>
  <section id="news" class="home-section">
    <div class="home-container">
      <SectionHeader
        eyebrow="Latest Updates"
        title="最新消息與營隊焦點"
        description="掌握 YCBS 的活動節點、營隊內容與青年社群動態。"
      />

      <div class="home-grid home-grid--three">
        <InfoCard
          v-for="item in items"
          :key="item.title"
          v-reveal
          :meta="item.meta"
          :title="item.title"
          :description="item.description"
          :href="item.href"
          :link-label="item.linkLabel"
        />
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from './InfoCard.vue'
import SectionHeader from './SectionHeader.vue'
import { newsItems } from '@/data/home'

export default {
  name: 'NewsSection',
  components: { InfoCard, SectionHeader },
  data() {
    return { items: newsItems }
  },
}
</script>
