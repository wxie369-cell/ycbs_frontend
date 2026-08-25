<template>
  <section id="members" class="home-section home-section--muted members-section">
    <div class="home-container">
      <SectionHeader
        eyebrow="Our Team"
        title="由不同專業背景組成的 YCBS 團隊"
        description="以下保留網站現有的成員與職務資料，呈現跨校、跨專業的青年協作社群。"
      />

      <section class="leadership-section" aria-labelledby="leadership-title">
        <div class="team-subsection__header">
          <div>
            <p>Organization</p>
            <h3 id="leadership-title">Leadership</h3>
          </div>
          <span>依網站現有職務資料列出各組組長</span>
        </div>

        <div class="leadership-section__grid">
          <article v-for="member in leadershipMembers" :key="member.username" v-reveal class="leader-card">
            <div class="leader-card__image">
              <img :src="memberImage(member)" :alt="`${member.name} 個人照片`" loading="lazy" decoding="async" />
            </div>
            <div class="leader-card__content">
              <p>{{ member.th }}</p>
              <h4>{{ member.name }}</h4>
              <strong>{{ member.group }} · {{ member.role }}</strong>
              <span>{{ shortBio(member) }}</span>
              <button
                class="text-link leader-card__action"
                type="button"
                :aria-label="`查看${member.name}介紹`"
                @click="openProfile(member)"
              >
                查看介紹
              </button>
            </div>
          </article>
        </div>
      </section>

      <section class="members-directory" aria-labelledby="directory-title">
        <div class="team-subsection__header members-directory__header">
          <div>
            <p>Community</p>
            <h3 id="directory-title">Members</h3>
          </div>
          <span>成員可依既有科系與團隊分工歸入多個相關領域</span>
        </div>

        <div class="members-section__filters" role="group" aria-label="依專業與團隊分工篩選成員">
          <button
            v-for="filter in categoryFilters"
            :key="filter.value"
            type="button"
            :class="{ 'is-active': selectedCategory === filter.value }"
            :aria-pressed="selectedCategory === filter.value ? 'true' : 'false'"
            aria-controls="members-grid"
            @click="selectCategory(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>

        <p class="sr-only" role="status" aria-live="polite">
          目前顯示 {{ visibleMembers.length }} 位，共 {{ filteredMembers.length }} 位成員
        </p>

        <div id="members-grid" class="members-section__grid">
          <article v-for="member in visibleMembers" :key="member.username" v-reveal class="member-card">
            <div class="member-card__image">
              <img :src="memberImage(member)" :alt="`${member.name} 個人照片`" loading="lazy" decoding="async" />
            </div>
            <div class="member-card__body">
              <p class="member-card__meta">{{ memberCategories(member).join(' / ') }}</p>
              <h4>{{ member.name }}</h4>
              <p>{{ member.group }} · {{ member.role }}</p>
              <p>{{ member.school }}</p>
              <button
                class="text-link member-card__action"
                type="button"
                :aria-label="`查看${member.name}介紹`"
                @click="openProfile(member)"
              >
                查看成員介紹
              </button>
            </div>
          </article>
        </div>

        <div v-if="hasMore" class="members-section__more">
          <button class="home-button" type="button" aria-controls="members-grid" @click="visibleCount += 9">
            顯示更多成員
          </button>
        </div>
      </section>
    </div>

    <teleport to="body">
      <transition name="member-dialog-fade">
        <div
          v-if="dialogOpen && selectedMember"
          class="member-dialog"
          @click.self="closeProfile"
          @keydown.tab="trapProfileFocus"
        >
          <article
            ref="profileDialog"
            class="member-profile"
            role="dialog"
            aria-modal="true"
            aria-labelledby="member-profile-title"
            aria-describedby="member-profile-affiliation member-profile-description"
          >
            <button
              ref="profileClose"
              class="member-profile__close"
              type="button"
              aria-label="關閉成員介紹"
              @click="closeProfile"
            >
              <span aria-hidden="true">×</span>
            </button>

            <div class="member-profile__image">
              <img :src="memberImage(selectedMember)" :alt="`${selectedMember.name} 個人照片`" decoding="async" />
            </div>

            <div class="member-profile__content">
              <p class="member-profile__meta">{{ selectedMember.th }} · {{ selectedMember.group }} · {{ selectedMember.role }}</p>
              <h2 id="member-profile-title">{{ selectedMember.name }}</h2>
              <p id="member-profile-affiliation" class="member-profile__affiliation">
                {{ selectedMember.school }}<br />
                {{ selectedMember.major }}<template v-if="gradeLabel(selectedMember)"> · {{ gradeLabel(selectedMember) }}</template>
              </p>
              <div class="member-profile__divider"></div>
              <p id="member-profile-description" class="member-profile__introduction">{{ selectedMember.introduction }}</p>
            </div>
          </article>
        </div>
      </transition>
    </teleport>
  </section>
</template>

<script>
import SectionHeader from '@/components/home/SectionHeader.vue'

export default {
    name: 'MembersSection',
    components: { SectionHeader },
    data() {
        return {
            dialogOpen: false,
            selectedMember: null,
            selectedCategory: 'ALL',
            visibleCount: 9,
            previousFocus: null,
            data: [{'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生物醫學工程學系', 'username': 'yuchi930914', 'introduction': '哈嘍！我是教學組的鄭伃淇～我的IG是cyc_930914，如果對YCBS有任何問題的話都可以問我！', 'name': '鄭伃淇', 'grade': 3.0, 'school': '中原大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物及解剖學研究所', 'username': 'kaiwu', 'introduction': '嗨大家好～我是吳楷萱，也可以叫我吳楷或 Sandy。朋友覺得我話很多，但我自己覺得還是算比較沉穩的哈哈。\n除了做實驗平常我喜歡拍照唱歌、去逛展覽，還有運動超級重要，最近要去學新項目拳擊，下次見到我的話可以問我學得如何哈哈。\n再來想說說加入 YCBS的初衷，是想讓自己走出實驗室，給自己一個探索產業的機會，很幸運的我有因此開了點腦🤏，雖然未來如何也不知道。ins:18_L2.LL3', 'name': '吳楷萱', 'grade': 8.0, 'school': '國防醫學大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生命科學系 Life Science ', 'username': 'yuan555lin', 'introduction': '哈囉大家～這裡是張圓培，綽號芋圓培根！我是清大生命科學系的學生。對生醫領域的微生物和機器學習有興趣，參加過合成生物競賽、中研院統計所實習、各種創新創業Hackathon。我是個點子多、愛交朋友的E人！還在猶豫什麼～快來生技創業營認識我吧！\nHello! I’m Yuan-Pei Chang, also known as Beryl! I’m a Life Science student at National Tsing Hua University. I’m passionate about microbiology and machine learning. I’ve participated in synthetic biology competition (iGEM), an internship at Academia Sinica’s Institute of Statistical Science, and various innovation and entrepreneurship hackathons. I’m an extrovert full of ideas who loves making new friends! So what are you waiting for? Come meet me at the YCBS Biotech Entrepreneurship Camp!', 'name': '張圓培 Yuan-Pei,Chang ', 'grade': 3.0, 'school': '國立清華大學'}, {'th': '第三屆', 'group': '總務組', 'role': '組長', 'major': '神經科學研究所', 'username': 'yixunn', 'introduction': '哈囉～我是陳以薰，\n平常的興趣是聽音樂、看劇或電影，偶爾也會看一些懸疑小說。\n我平常比較安靜，但是如果來跟我講話我一定會回應的，雖然可能會配個尷尬的微笑哈哈哈哈\n不過我只是有點慢熟啦，熟了也是可以嘰哩呱啦說個不停的～歡迎大家多來跟我聊聊天喔！', 'name': '陳以薰', 'grade': 7.0, 'school': '陽明交通大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '醫學系', 'username': 'allyli0223', 'introduction': '踏入生技領域，就像探索一片未知的科學宇宙，每個人都是閃耀的星星，共同點綴成美麗的天際。在 YCBS，我們能藉由國家生技研究園區的資源，參與各種生技教學與推廣活動，發現自己的興趣並勇敢實踐想法。我很喜歡與不同背景的夥伴一起學習、一起成長的感覺，也希望更多人能感受到生技的魅力與可能性，歡迎大家加入我們，一起交流與成長～～', 'name': '李宛虹', 'grade': 3.0, 'school': '長庚大學'}, {'th': '第三屆', 'group': '總務組', 'role': '組員', 'major': '醫技系', 'username': 'elina.ai6sm3.be13', 'introduction': '很愛到處逛到處走專程不搭車（非大太陽火烤時段），有時間就會特別出門一下，有酷活動可以揪我！\n是超級路痴方向感0，完全靠Google 地圖在走路，邊講話邊走路就會走過頭\n不是太喜歡昆蟲，壁虎可以蜘蛛也可以，但六隻腳就是走開\n喜歡吃東西，可是別問我好不好吃，窩……補知道，大部分不要太怪我應該都覺得不錯吧\n其他活動可能就豎笛和游泳吧，可能可以交流\n阿不會台語的程度非常誇張，認真聽不懂，但現在可能知道一點點了，拜服學所賜\n拍照通常拍東西 » 拍人', 'name': '張育嘉', 'grade': 2.0, 'school': '陽明交通大學'}, {'th': '第一屆', 'group': '召部', 'role': '組員', 'major': '百川學士學位學程', 'username': 'shaioyuu', 'introduction': '生物科技 & 人文社會學雙主修；iGEM NYCU_Formosa2022 model 組員；研究旨趣／領域是演化學、生物工程、生物資訊與多物種人類學。', 'name': '林詩軒', 'grade': 4.0, 'school': '國立陽明交通大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組長', 'major': '生物醫學工程學系', 'username': 'yschuang2712', 'introduction': '嗨嗨~我是莊育瑄，非常慢熱但熟起來很瘋，面無表情看起來有點兇但其實我在發呆，思緒早已飛到外太空。平時休閒娛樂喜歡看電影、拼拼圖、鉤針、遊泳。來到 YCBS 認識到許志向相投的人類，也開啓了創新創業的大門，成為很多競賽和產業課程的鑰匙，還在持續探索當中💪', 'name': '莊育瑄', 'grade': 4.0, 'school': '中國醫藥大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生化科技系', 'username': 'annchen ', 'introduction': '大家好！我是陳奕安，是新竹人，現在是臺大生化科技系的學生，興趣很廣泛、很喜歡接觸新的東西，大家可以多跟我分享事情，也請多多指教！', 'name': '陳奕安', 'grade': 3.0, 'school': '臺灣大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物科技學系', 'username': 'banana', 'introduction': '大家好我叫劉恒謙，興趣是籃球，喜歡的遊戲類型是格鬥遊戲。最近想買一支遊戲的專用手把但覺得有點貴，希望有人能贊助我。我的email: Banana@ycbs.tw', 'name': '劉恒謙', 'grade': 5.0, 'school': '陽明交通大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物技術與動物科學系', 'username': 'shellywu', 'introduction': '大家好～我是YCBS的IG小編～\n是住在新北的台中人(懷念台中的太陽…)，\n也是個I的人，但是有工作模式會裝E。\n出門就不想回家，回家就不想出門…\n喜歡音樂、畫畫、手作，\n歡迎大家來跟我聊天、做朋友～', 'name': '吳奕璇', 'grade': 4.0, 'school': '國立宜蘭大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生化科技學系', 'username': 'weishan ', 'introduction': '大家好！我是來自臺大生化科技系的張維珊，個性開朗樂觀，是個隨和好相處的isfj ，目前最大的興趣是經營ig 巧虎帳，喜歡幫我的吃飯和睡覺（他們的名字）拍網美照上傳，夢想是帶我的巧虎環遊世界。', 'name': '張維珊', 'grade': 3.0, 'school': '臺灣大學'}, {'th': '第三屆', 'group': '召部', 'role': '組長', 'major': '生命科學系', 'username': 'shuinathruster', 'introduction': '嗨唷我是召部的李訓愛，就讀台大生科\n有點慢熱，喜歡做幕後和動腦工作\n熟起來會變成抽象樂子人，興趣很雜，什麼都可以聊聊', 'name': '李訓愛', 'grade': 2.0, 'school': '台大'}, {'th': '第三屆', 'group': '召部', 'role': '組員', 'major': '生物科技系', 'username': 'imasheeeeep', 'introduction': '我是陳欣妤，現任 YCBS 召部成員。對創新與實踐充滿熱情，雖然目前還沒有明確的創業方向，但相信每一次嘗試都是邁向夢想的起點。', 'name': '陳欣妤', 'grade': 3.0, 'school': '國立高雄師範大學'}, {'th': '第三屆', 'group': '召部', 'role': '組長', 'major': '生物科技系', 'username': 'bosshsieh', 'introduction': '我是謝興永，第四屆YCBS總召，喜歡挑戰自我、預測變化，把新點子變成實體，曾在中研院、國衛院實習，是身兼多職的斜槓人。\n對我來說，研究與創業都是如此——判斷、佈局、出手。\n我不追求最熱鬧的戰場，只選最有勝算的位置。', 'name': '謝興永', 'grade': 4.0, 'school': '國立高雄師範大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組長', 'major': '生醫系', 'username': 'wendy', 'introduction': '我是一個熱愛探索生活的活潑女孩！平時喜歡打排球、追劇、旅行和品嚐美食。對新事物充滿好奇，喜歡在體驗與學習中發現樂趣。不論是實驗室裡的研究，還是旅途中的風景，我都享受從中找到屬於自己的節奏與故事。', 'name': '楊喻晴', 'grade': 3.0, 'school': '長庚大學'}, {'th': '第三屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '生物科技系', 'username': 'tjc0220', 'introduction': '我是曾柔嘉（我其實想不到要寫什麼）\n在生物與各種跨領域之間跳來跳去、進來出去，希望可以有一些碰撞\n但不要打我，大家也都不是笨蛋', 'name': '曾柔嘉', 'grade': 5.0, 'school': '國立陽明交通大學'}, {'th': '第三屆', 'group': '教學組', 'role': '組員', 'major': '生物醫學工程學系', 'username': 'huan10261213', 'introduction': '嗨我是蔡東桓，高雄人。喜歡聊天，但偶爾也喜歡自己待著放空。很喜歡看各種課外小説、散文，也喜歡打羽球，不過最重要的興趣絕對是音樂，會聽團，也喜歡演奏，分別學了豎笛12鋼琴9小提琴5年然後今年正在學打擊四棒，打擊真的很好玩。實驗室偏生醫材料，去年跑去美國實習2個月，有好奇的問題都可以問我喔', 'name': '蔡東桓', 'grade': 4.0, 'school': '中國醫藥大學'}, {'th': '第二屆', 'group': '活動組', 'role': '組長', 'major': '生醫科學與工程學系', 'username': 'tsaifamily7771', 'introduction': '我是一個努力在利用ai幫助製藥的人，在這個ai的浪潮，我看到了ai賦能生技產業的機會，在YCBS大家庭的薰陶下，我創辦了一家專注於研發新一代藥物開發人工智慧代理人的公司，針對提早預測抗藥性於臨床實驗前的議題而努力，希望藉此讓台灣的生技產業帶來新的機會', 'name': '蔡政勳', 'grade': 4.0, 'school': '中央大學'}, {'th': '第二屆', 'group': '召部', 'role': '組長', 'major': '生化科技學系', 'username': 'a31299348', 'introduction': '窩是要成為海賊王的男人', 'name': '黃柏勝', 'grade': 'None', 'school': '國立台灣大學'}, {'th': '第二屆', 'group': '美宣 / 宣傳 組', 'role': '組員', 'major': '大學：生命科學系暨基因體科學研究所 雙主修 生醫工程學系；研究所：跨領域分子醫學碩士學位學程', 'username': 'angelhsu0036', 'introduction': '嗨囉我是第二屆的恩琪，很開心能加入YCBS的大家庭，除了一起協辦國家生技園區的各種活動，認識了生技新創的各類專家及來自不同學校志同道合的朋友們，我也在這段實習經歷中獲得很多新知，和這群優秀的夥伴們一起成長！', 'name': '許恩琪', 'grade': 8.0, 'school': '國立陽明交通大學'}]
        }
    },
    watch: {
        dialogOpen(open) {
            document.body.style.overflow = open ? 'hidden' : ''
        },
    },
    mounted() {
        document.addEventListener('keydown', this.handleProfileKeydown)
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleProfileKeydown)
        document.body.style.overflow = ''
    },
    computed: {
        leadershipMembers() {
            return this.data.filter(member => member.role === '組長')
        },
        members() {
            return this.data.filter(member => member.role !== '組長')
        },
        categoryFilters() {
            return [
                { label: 'ALL', value: 'ALL' },
                { label: 'BIOLOGY', value: 'BIOLOGY' },
                { label: 'ENGINEERING', value: 'ENGINEERING' },
                { label: 'DESIGN', value: 'DESIGN' },
                { label: 'EDUCATION', value: 'EDUCATION' },
                { label: 'OPERATIONS', value: 'OPERATIONS' },
            ]
        },
        filteredMembers() {
            if (this.selectedCategory === 'ALL') return this.members
            return this.members.filter(member => this.memberCategories(member).includes(this.selectedCategory))
        },
        visibleMembers() {
            return this.filteredMembers.slice(0, this.visibleCount)
        },
        hasMore() {
            return this.visibleMembers.length < this.filteredMembers.length
        },
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category
            this.visibleCount = 9
        },
        memberImage(member) {
            return `members/photo/${member.username}.jpg`
        },
        memberCategories(member) {
            const categories = []
            const major = member.major || ''
            const group = member.group || ''

            if (/生物|生命|生化|醫學|醫技|神經|分子|生醫/.test(major)) categories.push('BIOLOGY')
            if (/工程|工學|人工智慧|AI/i.test(major)) categories.push('ENGINEERING')
            if (/美宣|宣傳/.test(group)) categories.push('DESIGN')
            if (/教學/.test(group)) categories.push('EDUCATION')
            if (/召部|總務|活動/.test(group)) categories.push('OPERATIONS')

            return [...new Set(categories)]
        },
        shortBio(member) {
            const bio = member.introduction.replace(/\s+/g, ' ').trim()
            return bio.length > 96 ? `${bio.slice(0, 96)}…` : bio
        },
        openProfile(member) {
            this.previousFocus = document.activeElement
            this.selectedMember = member
            this.dialogOpen = true
            this.$nextTick(() => this.$refs.profileClose?.focus())
        },
        closeProfile() {
            this.dialogOpen = false
            this.$nextTick(() => this.previousFocus?.focus())
        },
        handleProfileKeydown(event) {
            if (event.key === 'Escape' && this.dialogOpen) this.closeProfile()
        },
        trapProfileFocus(event) {
            const focusable = [...this.$refs.profileDialog.querySelectorAll('a[href], button:not([disabled])')]
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
        gradeLabel(member) {
            return Number.isFinite(member.grade) ? `${member.grade} 年級` : ''
        },
    },
}
</script>

<style scoped>
.leadership-section {
  margin-top: var(--ycbs-space-16);
}

.team-subsection__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--ycbs-space-6);
  margin-bottom: var(--ycbs-space-8);
  padding-bottom: var(--ycbs-space-5);
  border-bottom: 1px solid var(--ycbs-color-border-strong);
}

.team-subsection__header p {
  margin: 0 0 var(--ycbs-space-2);
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.team-subsection__header h3 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-xl);
  font-weight: 800;
  line-height: 1.3;
}

.team-subsection__header > span {
  max-width: 420px;
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
  line-height: 1.7;
  text-align: right;
}

.leadership-section__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--ycbs-space-5);
}

.leader-card {
  display: grid;
  min-width: 0;
  grid-template-columns: 170px minmax(0, 1fr);
  overflow: hidden;
  border: 1px solid var(--ycbs-color-border);
  border-radius: var(--ycbs-radius-sm);
  background: var(--ycbs-color-surface);
  box-shadow: var(--ycbs-shadow-sm);
  transition: border-color var(--ycbs-duration-base) var(--ycbs-ease-standard),
    box-shadow var(--ycbs-duration-base) var(--ycbs-ease-standard),
    transform var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.leader-card:hover {
  border-color: var(--ycbs-color-border-strong);
  box-shadow: var(--ycbs-shadow-md);
  transform: translateY(-3px);
}

.leader-card__image {
  min-height: 244px;
  overflow: hidden;
  background: var(--ycbs-color-brand-100);
}

.leader-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 28%;
  filter: saturate(0.92);
}

.leader-card__content {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--ycbs-space-6);
}

.leader-card__content > p {
  margin: 0 0 var(--ycbs-space-2);
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
}

.leader-card h4 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-lg);
  font-weight: 800;
  line-height: 1.4;
}

.leader-card__content > strong {
  margin-top: var(--ycbs-space-2);
  color: var(--ycbs-color-brand-700);
  font-size: var(--ycbs-text-sm);
  line-height: 1.5;
}

.leader-card__content > span {
  display: -webkit-box;
  margin-top: var(--ycbs-space-4);
  overflow: hidden;
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
  line-height: 1.7;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.leader-card__action {
  margin-top: auto;
  padding: var(--ycbs-space-4) 0 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.members-directory {
  margin-top: var(--ycbs-space-20);
}

.members-section__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ycbs-space-2);
  margin-bottom: var(--ycbs-space-8);
}

.members-section__filters button {
  min-height: 40px;
  padding: 0 var(--ycbs-space-4);
  border: 1px solid var(--ycbs-color-border-strong);
  border-radius: var(--ycbs-radius-sm);
  background: var(--ycbs-color-surface);
  color: var(--ycbs-color-text);
  font-size: var(--ycbs-text-sm);
  font-weight: 700;
  cursor: pointer;
  transition: background-color var(--ycbs-duration-fast) var(--ycbs-ease-standard),
    border-color var(--ycbs-duration-fast) var(--ycbs-ease-standard),
    color var(--ycbs-duration-fast) var(--ycbs-ease-standard);
}

.members-section__filters button:hover,
.members-section__filters button.is-active {
  border-color: var(--ycbs-color-brand-700);
  background: var(--ycbs-color-brand-700);
  color: var(--ycbs-color-on-dark);
}

.members-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--ycbs-space-5);
}

.member-card {
  display: flex;
  min-width: 0;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--ycbs-color-border);
  border-radius: var(--ycbs-radius-sm);
  background: var(--ycbs-color-surface);
  box-shadow: var(--ycbs-shadow-sm);
  transition: border-color var(--ycbs-duration-base) var(--ycbs-ease-standard),
    box-shadow var(--ycbs-duration-base) var(--ycbs-ease-standard),
    transform var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.member-card:hover {
  border-color: var(--ycbs-color-border-strong);
  box-shadow: var(--ycbs-shadow-md);
  transform: translateY(-4px);
}

.member-card__image {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--ycbs-color-brand-100);
}

.member-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 32%;
  filter: saturate(0.92);
  transition: filter var(--ycbs-duration-slow) var(--ycbs-ease-standard),
    transform var(--ycbs-duration-slow) var(--ycbs-ease-standard);
}

.member-card:hover .member-card__image img {
  filter: saturate(1);
  transform: scale(1.025);
}

.member-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--ycbs-space-5);
}

.member-card__meta {
  margin: 0 0 var(--ycbs-space-3);
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.045em;
}

.member-card h4 {
  margin: 0 0 var(--ycbs-space-3);
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-md);
  font-weight: 750;
  line-height: 1.45;
}

.member-card__body > p:not(.member-card__meta) {
  margin: 0;
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
  line-height: 1.65;
}

.member-card__action {
  margin-top: auto;
  padding: var(--ycbs-space-5) 0 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.members-section__more {
  margin-top: var(--ycbs-space-10);
  text-align: center;
}

.member-dialog {
  position: fixed;
  inset: 0;
  z-index: 1300;
  display: grid;
  overflow-y: auto;
  place-items: center;
  padding: var(--ycbs-space-6);
  background: rgba(17, 14, 22, 0.68);
}

.member-profile {
  position: relative;
  display: grid;
  width: min(100%, 760px);
  max-height: min(84vh, 760px);
  grid-template-columns: minmax(240px, 0.72fr) minmax(0, 1.28fr);
  overflow: auto;
  border-top: 4px solid var(--ycbs-color-accent-600);
  border-radius: var(--ycbs-radius-sm);
  background: var(--ycbs-color-surface);
  box-shadow: var(--ycbs-shadow-md);
}

.member-dialog-fade-enter-active,
.member-dialog-fade-leave-active {
  transition: opacity var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.member-dialog-fade-enter-active .member-profile,
.member-dialog-fade-leave-active .member-profile {
  transition: transform var(--ycbs-duration-base) var(--ycbs-ease-standard);
}

.member-dialog-fade-enter-from,
.member-dialog-fade-leave-to {
  opacity: 0;
}

.member-dialog-fade-enter-from .member-profile,
.member-dialog-fade-leave-to .member-profile {
  transform: translateY(12px);
}

.member-profile__close {
  position: absolute;
  top: var(--ycbs-space-4);
  right: var(--ycbs-space-4);
  z-index: 2;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--ycbs-color-border);
  border-radius: 50%;
  background: var(--ycbs-color-surface);
  color: var(--ycbs-color-ink);
  cursor: pointer;
}

.member-profile__close span {
  font-size: 1.7rem;
  line-height: 1;
}

.member-profile__image {
  min-height: 100%;
  background: var(--ycbs-color-brand-100);
}

.member-profile__image img {
  width: 100%;
  height: 100%;
  min-height: 440px;
  object-fit: cover;
  object-position: center 30%;
}

.member-profile__content {
  padding: clamp(2rem, 5vw, 3.5rem);
}

.member-profile__meta {
  margin: 0 54px var(--ycbs-space-3) 0;
  color: var(--ycbs-color-accent-700);
  font-size: var(--ycbs-text-xs);
  font-weight: 750;
  letter-spacing: 0.05em;
}

.member-profile h2 {
  margin: 0;
  color: var(--ycbs-color-ink);
  font-size: var(--ycbs-text-xl);
  font-weight: 800;
  line-height: 1.35;
}

.member-profile__affiliation {
  margin: var(--ycbs-space-4) 0 0;
  color: var(--ycbs-color-muted);
  font-size: var(--ycbs-text-sm);
  line-height: 1.7;
}

.member-profile__divider {
  width: 56px;
  height: 3px;
  margin: var(--ycbs-space-6) 0;
  background: var(--ycbs-color-accent-600);
}

.member-profile__introduction {
  margin: 0;
  color: var(--ycbs-color-text);
  line-height: 1.85;
  white-space: pre-line;
}

@media (max-width: 959px) {
  .leadership-section__grid {
    grid-template-columns: 1fr;
  }

  .members-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .team-subsection__header {
    display: grid;
  }

  .team-subsection__header > span {
    max-width: 620px;
    text-align: left;
  }

  .leader-card {
    grid-template-columns: 150px minmax(0, 1fr);
  }

  .member-profile {
    grid-template-columns: 1fr;
  }

  .member-profile__image {
    height: 300px;
  }

  .member-profile__image img {
    min-height: 0;
  }
}

@media (max-width: 479px) {
  .leadership-section {
    margin-top: var(--ycbs-space-12);
  }

  .members-directory {
    margin-top: var(--ycbs-space-16);
  }

  .leader-card {
    grid-template-columns: 112px minmax(0, 1fr);
  }

  .leader-card__image {
    min-height: 252px;
  }

  .leader-card__content {
    padding: var(--ycbs-space-4);
  }

  .leader-card h4 {
    font-size: var(--ycbs-text-md);
  }

  .members-section__grid {
    grid-template-columns: 1fr;
  }

  .members-section__filters {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .members-section__filters button {
    width: 100%;
  }

  .member-card__image {
    aspect-ratio: 4 / 3;
  }

  .member-profile__image {
    height: 240px;
  }

  .member-profile__content {
    padding: var(--ycbs-space-6);
  }
}
</style>
