<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListing from '@/components/JobListing.vue';

</script>
<template>
    <Hero />
    <HomeCards />
    <JobListing limit="3" :show-button="true" />
</template>