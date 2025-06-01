<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';

const year = new Date().getFullYear();
</script>

<template>
  <Navbar />
  <Home />
  <Footer :year="year" />
</template>
