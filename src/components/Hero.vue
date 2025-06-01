<script setup>
defineProps({
    title: {
        type: String,
        default: 'Become a Vue Dev',
    },
    subtitle: {
        type: String,
        default: 'Find the Vue job that fits your skills and needs',
    },
});
</script>

<template>
    <section class="bg-green-700 py-20 mb-4">
        <div class="flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                    {{ title }}
                </h1>
                <p class="my-4 text-xl text-white">
                    {{ subtitle }}
                </p>


            </div>
            <div class="max-w-md mx-auto my-6">
                <input type="text" placeholder="Search jobs..."
                    class="w-full px-4 py-2 bg-white border border-green-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    v-model="searchQuery" />
            </div>
        </div>
    </section>
</template>