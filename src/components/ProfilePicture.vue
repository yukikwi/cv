<template>
    <div class="w-3/6 mx-auto py-3">
        <div class="aspect-w-1 aspect-h-1">
            <img v-show="isloaded" class="rounded-full img" src="@/assets/img/me.jpeg" @load="imgLoaded"/>
            <div class="rounded-full img flex">
                <Spinner v-if="!isloaded"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spinner from "./Spinner.vue";

export default defineComponent({
    components: {
        Spinner
    },
    data() {
        return ({
            isloaded: false
        })
    },
    methods: {
        imgLoaded () {
            this.isloaded = true
        }
    }
})
</script>


<style scoped>
.img {
    border: 5px solid #eee;
    background: rgba(63, 63, 63, 0.3);
}
</style>