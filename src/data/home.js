export const registrationUrl = 'https://forms.gle/4gZzUWVFvyVikF9k9'

export const navigationItems = [
  {
    label: '關於 YCBS',
    href: '#about',
    children: [
      { label: '營隊宗旨', href: '#about' },
      { label: '團隊成員', href: 'about.html' },
    ],
  },
  {
    label: '營隊內容',
    href: '#programs',
    children: [
      { label: '課程模組', href: '#programs' },
      { label: '活動資訊', href: 'event.html' },
      { label: '歷年活動', href: 'old.html' },
    ],
  },
  { label: '最新消息', href: '#news' },
  {
    label: '參與 YCBS',
    href: '#join',
    children: [
      { label: '報名資訊', href: registrationUrl, external: true },
      { label: '網站進度', href: 'progress.html' },
    ],
  },
]

export const newsItems = [
  {
    meta: '營隊動態 · 2026.01.30',
    title: '2026 YCBS 營隊已完成三日活動',
    description: '本屆營隊課程與團隊實作告一段落，謝謝所有學員、講者與工作人員共同參與。',
    href: 'event.html',
    linkLabel: '查看活動資訊',
  },
  {
    meta: '活動資訊 · 2026.01.28–30',
    title: '第四屆生技青年創業營',
    description: '在國家生技研究園區展開三日學習，從產業知識、設計思考走向商業提案實作。',
    href: 'event.html',
    linkLabel: '了解營隊內容',
  },
  {
    meta: 'YCBS 社群',
    title: '認識籌備團隊與青年社群',
    description: '一群關心生技創新與跨域實作的青年，共同打造能交流、提問與行動的學習場域。',
    href: 'about.html',
    linkLabel: '認識團隊',
  },
]

export const featuredProject = {
  eyebrow: 'Featured Project',
  title: '模擬創業競賽',
  description: '學員以小組協作，將問題定義、解方與商業價值整合為完整提案，並在簡報與回饋中持續修正。',
  image: 'members/photo/tjc0220.jpg',
  imageAlt: 'YCBS 成員於生技活動中進行成果分享',
  status: '核心實作模組',
  cycle: '2026 YCBS',
  href: 'event.html',
}

export const programItems = [
  {
    index: '01',
    title: '生技商業概念',
    description: '建立生技產業與新創商業模式的基礎視角。',
  },
  {
    index: '02',
    title: 'BP 簡報製作',
    description: '將問題、解方與商業價值整理成清楚的提案。',
  },
  {
    index: '03',
    title: '設計思考工作坊',
    description: '從使用者需求出發，練習定義與驗證問題。',
  },
  {
    index: '04',
    title: '生技法規入門',
    description: '理解研發走向市場時不可忽略的法規環境。',
  },
  {
    index: '05',
    title: '產業與創投沙龍',
    description: '透過實務工作者分享，認識產業決策現場。',
  },
  {
    index: '06',
    title: '模擬創業競賽',
    description: '以小組協作完成商業提案，練習表達與回應。',
  },
]

export const achievementItems = [
  {
    icon: '◎',
    title: '跨域協作',
    description: '讓不同專業背景的學員共同拆解問題、形成提案。',
  },
  {
    icon: '⌬',
    title: '產業連結',
    description: '把科學知識放進產業、法規與市場的真實脈絡。',
  },
  {
    icon: '✦',
    title: '實作成果',
    description: '由概念發想到簡報發表，完成一段可被檢視的創新歷程。',
  },
]

export const joinReasons = [
  {
    index: '01',
    title: '跨域共學',
    description: '與不同專業背景的夥伴共同拆解問題，在交流與協作中拓展看待生技創新的方式。',
  },
  {
    index: '02',
    title: '連結產業',
    description: '從產業、法規與市場觀點理解科學成果如何走向真實應用。',
  },
  {
    index: '03',
    title: '完成提案',
    description: '把問題與想法整理成可被討論、驗證與持續修正的創新提案。',
  },
]

export const applicationEligibility = {
  title: '下一梯次招募對象將另行公告',
  description: '如果你關注生技、生醫、創新實作或跨域協作，歡迎先認識 YCBS 並留意後續招募資訊。',
  note: '每屆適用對象與資格可能不同，請以當次官方公告及報名表內容為準。',
  interests: ['生技與生醫議題', '跨域協作', '創新提案實作'],
}

export const applicationSteps = [
  {
    index: '01',
    title: '查看招募公告',
    description: '由網站最新消息或 YCBS 社群取得當屆活動資訊。',
  },
  {
    index: '02',
    title: '確認資格與時程',
    description: '閱讀當屆招募對象、活動日期與應備資料。',
  },
  {
    index: '03',
    title: '填寫官方表單',
    description: '於公告期限內，透過 YCBS 官方表單提交資料。',
  },
  {
    index: '04',
    title: '等待後續通知',
    description: '送出後請依當屆公告方式留意結果與行前資訊。',
  },
]

export const applicationTimeline = [
  { label: '活動公告', value: '待公告' },
  { label: '報名期間', value: '待公告' },
  { label: '結果通知', value: '待公告' },
  { label: '活動日期', value: '待公告' },
]

export const joinFaqItems = [
  {
    question: '下一梯次何時開放報名？',
    answer: '目前尚未公布下一梯次時程。確認後將於網站最新消息與 YCBS 社群公告。',
  },
  {
    question: '哪些人可以申請？',
    answer: '每屆招募對象與資格可能不同，請以當次官方公告及報名表列出的條件為準。',
  },
  {
    question: '活動地點與形式固定嗎？',
    answer: '不一定。地點、天數與活動形式會依當屆規劃調整，完整資訊將載於正式活動公告。',
  },
  {
    question: '送出表單後如何取得通知？',
    answer: '請依當屆報名表說明留意後續聯絡方式；結果與行前資訊皆以官方通知為準。',
  },
]

export const eventFacts = [
  { label: '日期', value: '2026 年 1 月 28–30 日' },
  { label: '地點', value: '國家生技研究園區' },
  { label: '形式', value: '課程、工作坊、團隊提案' },
]

export const upcomingEvent = {
  status: 'To be announced',
  date: 'TBA',
  title: '下一場 YCBS 活動',
  description: '活動主題、日期與報名方式確認後，將於網站最新消息與 YCBS 社群公告。',
  href: '#news',
  linkLabel: '關注最新消息',
}

export const eventArchive = [
  {
    year: '2026',
    title: '第四屆 YCBS 生技青年創業營',
    date: '2026 年 1 月 28–30 日',
    location: '國家生技研究園區',
    description: '以三日密集課程串接知識輸入、產業對話與團隊提案，建立對生技新創更完整的理解。',
    status: '已完成',
    href: 'event.html',
  },
]

export const communityPhotos = [
  { src: 'members/photo/tjc0220.jpg', alt: 'YCBS 成員曾柔嘉' },
  { src: 'members/photo/angelhsu0036.jpg', alt: 'YCBS 成員許恩琪' },
  { src: 'members/photo/yixunn.jpg', alt: 'YCBS 成員陳以薰' },
]
