<template>
    <v-card class = 'bs' id = background align = center justify = middle min-height="100vh">
        <template #image>
            <v-img src = 'Logo/logo.png' id = logo alt = '' aria-hidden = 'true' max-height = 100vh max-width = '100vw' />
        </template>
    </v-card>
    <div class = bs>
        <v-card id = zero color = transparent class = 'align-content-center text-center' variant = text>
                <div id = slide-to-show style = 'opacity: 0' class = text-white>
                    <v-icon> fa-solid fa-up-long fa-beat-fade </v-icon><br>
                    <b> 活動介紹 </b>
                </div>
        </v-card>
    </div>
</template>

<script>
import { animate, onScroll } from 'animejs'

export default {   
    name: 'EventLogoAnimation',
    data() {
        return {
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
                enter: `center center`,
                leave: `top-=${n * 25} top`,
                sync: true,
                // debug: true
                onUpdate: (e) => {
                    const background = document.querySelector('#background')
                    const logo = document.querySelector('#logo')
                    if (background) background.style.background = `linear-gradient(${(((3420 - 20) * e.progress) % 360) + 20}deg, purple, pink)`
                    if (logo) logo.style.filter = `blur(${Math.floor(500 * e.progress)}px)`
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
    z-index: -1;
    position: fixed;
    display: flex;
    background: linear-gradient(20deg, purple, pink);
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
