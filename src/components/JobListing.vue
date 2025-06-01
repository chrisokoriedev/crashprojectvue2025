<script setup>
import jobData from '@/jobs.json';
import { ref } from 'vue';
import SingleJobListiing from './SingleJobListiing.vue';
const jobs = ref(jobData.jobs);
defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false,
    },
    showSearch: {
        type: Boolean,
        default: false,
    },
});
</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto ">
            <h2 class="text-3xl font-bold text-geen-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div v-if="showSearch" class="max-w-md mx-auto my-6">
                <input type="text" placeholder="Search jobs..."
                    class="w-full px-4 py-2 bg-white border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    v-model="searchQuery" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                <SingleJobListiing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>

</template>