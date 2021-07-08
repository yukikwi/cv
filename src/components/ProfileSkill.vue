<template>
    <div>
        <div class="grid grid-rows-3 grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            <div v-for="item in data" :key="item.label" class="row-span-1 col-span-1 glass">
                <a :href="item.url" target="_blank">
                    <div class="glass-content">
                        <div class="aspect-w-1 aspect-h-1">
                            <div class="text-center flex flex-col justify-center">
                                <img class="mx-auto w-1/4" :src="require('@/assets/img/'+item.icon)" />
                                <span>{{item.label}}</span>
                            </div>
                        </div>
                    </div>
                </a>
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
                    label: 'Python',
                    url: 'https://www.python.org/'
                },
                {
                    icon: 'typescript.png',
                    label: 'TS',
                    url: 'https://www.typescriptlang.org/'
                },
                {
                    icon: 'ubuntu.png',
                    label: 'Ubuntu',
                    url: 'https://ubuntu.com/'
                },
                {
                    icon: 'tailwind.png',
                    label: 'Tailwind CSS',
                    url: 'https://tailwindcss.com/'
                },
                {
                    icon: 'bootstrap.png',
                    label: 'Bootstrap',
                    url: 'https://getbootstrap.com/'
                },
                {
                    icon: 'bulma.png',
                    label: 'Bulma',
                    url: 'https://bulma.io/'
                },
                {
                    icon: 'antdv.png',
                    label: 'Antdv',
                    url: 'https://antdv.com'
                }
            ]
        })
    }
})
</script>


<style scoped>
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
    transform: scale(1.1);
}
.glass span{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>