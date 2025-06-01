<template>
  <nav class="bg-green-700 text-white p-4 shadow flex items-center justify-around">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <router-link to="/" class="text-xl font-bold">Vue Jobs</router-link>
    </div>

    <!-- Navigation Links -->
    <div class="flex space-x-6 text-sm font-medium">
      <router-link to="/" class="px-4 py-2 rounded hover:bg-green-600 transition">
        Home
      </router-link>
      <router-link to="/jobs" class="px-4 py-2 rounded hover:bg-green-600 transition">
        Jobs
      </router-link>
      <router-link to="/add-job" class="px-4 py-2 rounded hover:bg-green-600 transition">
        Add Job
      </router-link>
    </div>
  </nav>
</template>

<script setup>
</script>


