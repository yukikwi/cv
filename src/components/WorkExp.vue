<template>
    <div class="grid grid-flow-col grid-cols-8 grid-rows-none gap-4 my-5 text-lg" v-for="item in data" :key="item.date">
        <div class="col-span-3 text-center">
            <span class="text-gray-700 font-bold">
                {{ item.date }}
            </span>
            <br />
            <span class="text-gray-700">
                {{ item.place }}
            </span>
        </div>
        <div class="col-span-5">
            <span class="font-bold text-2xl">
                {{ item.company }}
            </span>
            <br />
            <span class="text-gray-700">
                {{ item.job }}
            </span>
            <br />
            <span class="font-bold">Missions or tasks realized</span>
            <br />
            <p class="text-gray-600 md:text-sm" v-for="task in item.tasks" :key="task">
                {{ task }}
            </p>
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
                    date: '2018-03-22',
                    place: '(BKK - TH)',
                    company: 'Novelrealm',
                    job: 'Web Developer',
                    tasks: [
                        'Initial Novelrealm Website',
                        'All Novelrealm Backend',
                        'Novelrealm website project manager',
                        'Novelrealm server monitoring'
                    ]
                }
            ]
        })
    }
})
</script>
