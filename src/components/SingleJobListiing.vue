<script setup>
import { computed, ref } from 'vue';

const porps = defineProps({
    job: {
        type: Object
    }
});
const showDescription = ref(false);
const toggleDescription = () => {
    showDescription.value = !showDescription.value;
};
const truncatedDescription = computed(() => {
    let description = porps.job.description;
    if (!showDescription.value) {
        description = description.substring(0, 100) + '...';
    }
    return description;

});
</script>
<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>

            <div class="mb-5">
                {{ truncatedDescription }}
                <span> <button @click="toggleDescription" class=" text-green-500 hover:text-green-700 ml-3">
                        {{ showDescription ? 'less' : 'More' }}
                    </button>
                </span>
            </div>

            <h3 class="text-green-500 mb-2"> {{ job.salary }}
            </h3>

            <div class="border border-gray-100 mb-5"></div>

            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                    <i class="pi pi-map-marker text-orange-500 text-lg"></i>
                    {{ job.location }}
                </div>
                <a :href="'/viewJob/' + job.id" class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center
                    text-sm">
                    Read More
                </a>
            </div>
        </div>
    </div>
</template>