<template>
    <div class = 'place_holder'>
        <logo />
    </div>
    <div class = 'place_holder'>
        <countdown />
    </div>
    <!-- <div class = 'place_holder'>
    </div> -->
    <div class = br>
        <div class = 'place_holder'>
            <core />
        </div>
        <div class = 'place_holder'>
            <showcase />
        </div>
    </div>
</template>

<script>
import logo from '@/index/animates/logo.vue';
import countdown from '@/index/animates/countdown.vue';
import showcase from '@/index/animates/showcase.vue';
import core from '@/index/animates/core.vue';

export default {   
    name: 'home_wallpaper',
    components: {
        logo,
        countdown,
        showcase,
        core
    }
}
</script>

<style scoped>
.br {
    backdrop-filter: blur(50px);
}
.place_holder {
    position: relative;
    height: 200vh;
    width: 100vw;
}
.place_holder_two {
    position: relative;
    height: 400vh;
    width: 100vw;
}

@media (prefers-reduced-motion: reduce) {
    .place_holder,
    .place_holder_two {
        height: 100vh;
    }
}
</style>
