<template>
    <v-card class = 'bs' id = background align = center justify = middle min-height="100vh">
        <template #image>
            <v-img src = 'Logo/logo.png' id = logo alt = '' aria-hidden = 'true' max-height = 100vh max-width = '100vw' />
        </template>
    </v-card>
    <div>
        <div class = 'align-content-center text-center show ani'><v-card variant = text title = 歡迎，YCBS成員 class = 'text-black' /></div>
        <div class = 'align-content-center text-center show ani'><v-card variant = text title = 這裡是我們的官網 class = 'text-black' /></div>
        <div class = 'align-content-center text-center show ani'><v-card variant = text title = 相信你各位都已經看過網站了對吧 class = 'text-black' /></div>
        <div class = 'final ani'>
            <v-container>
                <v-card
                    title = 回饋表
                    subtitle = 有甚麼想說的嗎
                    class = 'glass ma-3'
                />
                <v-card class = 'glass ma-3' title = 修改紀錄 subtitle = changelog>
                    <template #text>
                        <h2 class = 'sr-only'>修改紀錄</h2>
                        <div
                            class = 'd-flex justify-space-between'
                            :aria-label = '`網站目前進度 ${data.length}%`'
                        >
                            <strong>目前進度</strong>
                            <strong class = right aria-hidden = true> {{ data.length }} % </strong>
                        </div>
                        <v-progress-linear :model-value = 'data.length' class = 'ma-3' aria-label = '網站目前進度' />
                        <v-divider class = ma-5 />
                        <v-row>
                            <v-col cols = 12 md = 4 v-for = 'i in data' :key = i>
                                <v-hover>
                                    <template #default = '{isHovering, props}'>
                                        <a
                                            :href = 'i.url'
                                            target = '_blank'
                                            rel = 'noopener noreferrer'
                                            :aria-label = '`在新視窗查看提交紀錄：${i.title}`'
                                        >
                                            <v-card v-bind = props :color = 'isHovering ? `primary` : undefined' :subtitle = '`${i.date} - ${i.name}`' :title = i.title :prepend-avatar = i.avatar>
                                                <template #text>
                                                    <b v-html = i.message />
                                                </template>
                                                <!-- <b v-for = 'j, k in i' :key = k>
                                                    {{ k }}: {{ j }}
                                                </b> -->
                                            </v-card>
                                        </a>
                                    </template>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </template>
                </v-card>
            </v-container>
        </div>
    </div>
    <!-- <p v-for = 'i in 100' v-text = 1 :key = i /> -->
</template>

<script>
import { animate, stagger } from 'animejs'

export default {   
    name: 'ProgressWallpaper',
    data() {
        return {
            data: [],
            commitRequest: null,
        }
    },
    async mounted() {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduceMotion) {
            document.querySelectorAll('.show').forEach(panel => { panel.hidden = true })
            const finalPanel = document.querySelector('.final')
            if (finalPanel) finalPanel.style.opacity = 1
        } else {
            animate('.ani', {
                opacity: [
                    {to: 10, duration: 500},
                    {to: 0, duration: 1000},
                ],
                delay: stagger(2000),
                onComplete: () => {
                    const finalPanel = document.querySelector('.final')
                    if (finalPanel) finalPanel.style.opacity = 1
                },
            })
        }

        this.commitRequest = new AbortController()
        try {
            const response = await fetch('https://api.github.com/repos/wxie369-cell/ycbs_frontend/commits', {
                signal: this.commitRequest.signal,
            })
            if (!response.ok) return
            const commits = await response.json()
            this.data = commits.map(this.normalizeCommit)
        } catch (error) {
            if (error.name !== 'AbortError') this.data = []
        }
    },
    beforeUnmount() {
        this.commitRequest?.abort()
    },
    methods: {
        normalizeCommit(item) {
            const [title, ...message] = item.commit.message.split('\n')
            return {
                ...item.commit.author,
                title,
                message: message.join('<br>'),
                avatar: item.author?.avatar_url,
                url: item.html_url,
                date: item.commit.author.date.replace('T', ' ').replace('Z', ' '),
            }
        },
    }
}
</script>

<style scoped>
.bs {
    position: sticky;
    height: 100vh;
    width: 100vw;
    top: 0;
    /* z-index: -1; */
    /* backdrop-filter: blur(10px); */
}
.ct {
    /* position: absolute; */
    top: 50%;
    width: 100vw;
    /* text-align: center; */
}
#background {
    z-index: -1;
    position: fixed;
    display: flex;
    background: linear-gradient(20deg, pink, #00AAAA);
}
#logo {
    filter: blur(10px);
}
.show {
    opacity: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
</style>
