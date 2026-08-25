<template>
    <v-card class = 'bs' id = background align = center justify = middle min-height="100vh">
        <v-img src = 'Logo/logo.png' id = logo alt = '' aria-hidden = 'true' max-height = 100vh max-width = '100vw' />
    </v-card>
    <div class = bs>
        <v-card id = zero color = transparent class = 'align-content-center text-center' variant = text>
                <div id = slide-to-show style = 'opacity: 0' class = text-white>
                    <v-icon> fa-solid fa-up-long fa-beat-fade </v-icon><br>
                    <b> {{ slogen[Math.floor(now * (slogen.length - 1))] }} </b>
                </div>
        </v-card>
    </div>
</template>

<script>
import { animate, onScroll } from 'animejs'

export default {   
    name: 'LegacyLogoAnimation',
    data() {
        return {
            links: [
                {name: '關於我們', icon: 'people-group', href: 'about'},
                {name: '歷年活動', icon: 'timeline', href: 'old'},
                {name: '現在報名', icon: 'bolt', href: 'register'}
            ],
            countdown: {
                all: 0,
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0
            },
            slogen: ['開啟', '創業', '夢想', '生醫', '築夢', '寒假', '營隊', '2026'],
            now: 0
        }
    },
    mounted() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const prompt = document.querySelector('#slide-to-show')
            if (prompt) {
                prompt.style.opacity = 1
                prompt.style.transform = 'none'
            }
            return
        }

        var n = window.innerHeight;
        animate('#background', {
            autoplay: onScroll({
                enter: `center bottom-=${n * 0.25}`,
                leave: `top-=${n * 5} top`,
                sync: true,
                // debug: true
                onUpdate: (e) => {
                    const background = document.querySelector('#background')
                    if (background) background.style.background = `linear-gradient(${((700 - 20) * e.progress) + 20}deg, #00FFFF, purple)`
                }
            })
        })
        animate('#slide-to-show', {
            y: '40vh',
            opacity: 1,
            reversed: true,
            autoplay: onScroll({
                enter: 'center center',
                leave: 'top center',
                sync: true,
                onUpdate: (e) => this.now = e.progress
            })
        })
        animate('#logo', {
            scale: [
                {to: 1.5, duration: 1000},
                // {to: 1, duration: 1000}
            ],
            filter: [
                {to: 'blur(50px)', duration: 1000},
                // {to: 'blur(0px)', duration: 1000}
            ],
            // loop: true,
            // duration: '100ms',
            // loopDelay: 1000,
            ease: 'inOutCirc',
            autoplay: onScroll({
                enter: 'center center',
                leave: 'top bottom',
                sync: true
            })
        })
    },
    methods: {
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
#legs {
    filter: blur(50px);
}
#background {
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background: linear-gradient(20deg, #00FFFF, purple);
}
#zero {
    justify-content: center;
    align-items: center;
    height: 100vh;
}
#cute {
    position: fixed;
    top: 40vh;
    left: 70vw;
    width: 100px;
    z-index: 1;
}
#showcase {
    height: 100vh;
}
</style>
