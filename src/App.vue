<script setup>
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';


const year = new Date().getFullYear();
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer :year="year" />
</template>
