<script>
export default {
  data() {
    return {
      name: 'chris',
      status: 'pending',
      tasks: ['task1', 'task2', 'task3'],
      link: 'https://www.google.com'
    }
  },
  methods: {
    toggleBut() {
      this.status = this.status === 'active' ? 'inactive' : 'active';
    }
  },
}
</script>
<template>
  <h1> hello {{ name }}</h1>
  <p v-if="status == 'active'">user is active</p>
  <p v-else-if="status == 'pending'">user is pending</p>
  <p v-else="status">user is inactive</p>
  <!-- loop through array -->
  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <a v-bind:href="link">visit google </a>
  <!-- shorthand -->
  <a :href="link">visit google </a>

  <!-- button -->
   <button v-on:click="toggleBut">toggle status</button>
</template>
