<template>
    <div>
        <ListIcon v-for="item in data" :key="item.label" :icon="item.icon" :label="item.label" :showIcon="true" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListIcon from './ListIcon.vue';

export default defineComponent({
    data () {
        return ({
            data: [
                {
                    icon: 'phone',
                    label: '063-446-1761'
                },
                {
                    icon: 'email',
                    label: 'pachara2202@gmail.com'
                },
                {
                    icon: 'place',
                    label: 'Chachoengsao - Thailand'
                },
                {
                    icon: 'facebook',
                    label: 'Pachara Chantawong'
                }
            ]
        }
        )
    },
    components: {
        ListIcon
    }
})
</script>


<style>

</style>