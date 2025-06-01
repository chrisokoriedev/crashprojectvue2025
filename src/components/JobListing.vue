<script setup>
import jobData from '@/jobs.json';
import { ref } from 'vue';
import SingleJobListiing from './SingleJobListiing.vue';
const jobs = ref(jobData.jobs);
defineProps({
    limit: Number,
});
</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto ">
            <h2 class="text-3xl font-bold text-geen-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                <SingleJobListiing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

</template>