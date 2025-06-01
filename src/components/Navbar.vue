<template>
  <nav class="bg-green-700 text-white p-4 shadow flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <span class="text-xl font-bold">Vue Jobs</span>
    </div>

    <!-- Navigation Links -->
    <div class="flex space-x-6 text-sm font-medium">
      <a href="/" class="px-4 py-2 rounded hover:bg-green-600 transition">
        Home
      </a>
      <a href="/jobs" class="px-4 py-2 rounded hover:bg-green-600 transition">
        Jobs
      </a>
      <a href="/add-job" class="px-4 py-2 rounded hover:bg-green-600 transition">
        Add Job
      </a>
    </div>
  </nav>
</template>

<script setup>
// No router dependencies needed for now
</script>


