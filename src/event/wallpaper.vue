<template>
    <div class = 'place_holder'>
        <logo />
    </div>
    <div>
        <event />
    </div>
</template>

<script>
import logo from '@/event/animates/logo.vue';
import event from '@/event/animates/event.vue'

export default {   
    name: 'home_wallpaper',
    components: {
        logo,
        event
    }
}
</script>

<style scoped>
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
