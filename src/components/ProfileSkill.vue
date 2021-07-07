<template>
    <div>
        <h2 class="text-2xl font-semibold">Skill</h2>
        <div class="grid grid-rows-3 grid-cols-3 gap-5 mt-5">
            <div v-for="item in data" :key="item.label" class="row-span-1 col-span-1 glass">
                <div class="glass-content">
                    <div class="aspect-w-1 aspect-h-1">
                        <div class="text-center flex flex-col justify-center">
                            <img class="mx-auto w-1/4" :src="require('@/assets/img/'+item.icon)" />
                            <span>{{item.label}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return ({
            data: [
                {
                    icon: 'vue.png',
                    label: 'Vue.JS',
                    url: 'https://vuejs.org/'
                },
                {
                    icon: 'nuxt.png',
                    label: 'Nuxt',
                    url: 'https://nuxtjs.org/'
                },
                {
                    icon: 'nodejs.png',
                    label: 'NodeJS',
                    url: 'https://nodejs.org/en/'
                },
                {
                    icon: 'php.png',
                    label: 'PHP',
                    url: 'https://www.php.net/'
                },
                {
                    icon: 'mysql.png',
                    label: 'MySQL',
                    url: 'https://www.mysql.com/'
                },
                {
                    icon: 'python.png',
                    label: 'python',
                    url: 'https://www.python.org/'
                },
                {
                    icon: 'typescript.png',
                    label: 'TS',
                    url: 'https://www.typescriptlang.org/'
                },
                {
                    icon: 'ubuntu.png',
                    label: 'Ubuntu Server',
                    url: 'https://ubuntu.com/'
                },
                {
                    icon: 'tailwind.png',
                    label: 'Tailwind CSS',
                    url: 'https://tailwindcss.com/'
                }
            ]
        })
    }
})
</script>


<style scoped>
h2{
    border-bottom: #000 1px solid;
}

.glass:before{
    background-color: rgba(255, 255, 255, 0.3);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
}
.glass > .glass-content {
    position: relative;
}
.glass{
    transition: transform .2s;
    border-color: rgba(0,0,0,0);
}
.glass:hover{
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>