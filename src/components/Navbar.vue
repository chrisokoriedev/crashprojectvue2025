<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isActive = computed(() => (routeName) => {
  return route.path === routeName
})

const isHomeActive = computed(() => route.path === '/')
const isJobsActive = computed(() => route.path === '/jobs')
const isAddJobActive = computed(() => route.path === '/addjob')
</script>
<template>
  <nav class="bg-green-700 text-white p-4 shadow flex items-center justify-around">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <router-link to="/" class="text-xl font-bold">Vue Jobs</router-link>
    </div>

    <!-- Navigation Links -->
    <div class="flex space-x-6 text-sm font-medium">
      <router-link to="/" :class="[
        isActive('/') ?
          'bg-green-900'
          : 'hover:bg-gray-800 hover:text-white',
        'text-white',
        'px-3',
        'py-2',
        'rounded-md'
      ]">
        Home
      </router-link>
      <router-link to="/jobs" :class="[
        isActive('/jobs') ?
          'bg-green-900'
          : 'hover:bg-gray-800 hover:text-white',
        'text-white',
        'px-3',
        'py-2',
        'rounded-md'
      ]">
        Jobs
      </router-link>
      <router-link to="/addjob" :class="[
        isActive('/addjob') ?
          'bg-green-900'
          : 'hover:bg-gray-800 hover:text-white',
        'text-white',
        'px-3',
        'py-2',
        'rounded-md'
      ]">
        Add Job
      </router-link>
    </div>
  </nav>
</template>

<script setup>
</script>
