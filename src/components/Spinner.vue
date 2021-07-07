<template>
    <svg class="mx-auto my-3" version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve" ref="spin">
        <circle fill="none" stroke="#fff" stroke-width="4" cx="50" cy="50" r="44" style="opacity:0.5;"/>
        <circle fill="#fff" stroke="#e74c3c" stroke-width="3" cx="8" cy="54" r="6" />
    </svg>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
    setup() {
        const spin = ref<HTMLElement | null>(null)

        onMounted(() => {
            spin.value?.animate([
                // keyframes
                { transform: 'rotate(0deg)' },
                { transform: 'rotate(360deg)' }
                ], {
                duration: 2000,
                iterations: Infinity
            })
        })

        return {
            spin
        }
    },
})
</script>


<style scoped>
svg{
    width: 25%;
}
</style>