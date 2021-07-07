<template>
    <div class="grid grid-flow-col grid-cols-8 grid-rows-none gap-4 text-lg my-5" v-for="item in data" :key="item.date">
        <div class="col-span-3 text-center ">
            <span class="text-gray-700 font-bold">
                {{ item.year }}
                <br />
                {{ item.place }}
            </span>
        </div>
        <div class="col-span-5">
            <span class="font-bold">
                {{ item.title }}
            </span>
            <br />
            <span class="text-gray-700">
                {{ item.school }}
            </span>
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
                    year: '2019 - now',
                    place: 'BKK - TH',
                    title: 'Computer Engineering',
                    school: 'King Mongkut\'s University of Technology Thonburi'
                },
                {
                    year: '2013 - 2018',
                    place: 'Chachoengsao - TH',
                    title: 'Junior & Senior High School',
                    school: 'Benchamaratcharungsarit'
                },
                {
                    year: '2009 - 2012',
                    place: 'Chachoengsao - TH',
                    title: 'Primary School',
                    school: 'Anuban Wat Pitulatiratcharangsarit'
                },
                {
                    year: '2006 - 2008',
                    place: 'Chachoengsao - TH',
                    title: 'Elementary School',
                    school: 'Saint Louis School'
                },
                {
                    year: '2003 - 2005',
                    place: 'Chachoengsao - TH',
                    title: 'Kindergarten',
                    school: 'Saint Louis School'
                }
            ]
        })
    }
})
</script>
