<script setup>
import { ref } from 'vue';

const name = ref('chris');
const status = ref('active');
const tasks = ref(['task1', 'task2', 'task3']);
const toggleBut = () => {
  // short hand for if else
  // this.status = this.status === 'active' ? 'inactive' : 'active';
  if (status.value === 'pending') {
    status.value = 'active';
  } else if (status.value === 'active') {
    status.value = 'inactive';
  } else {
    status.value = 'pending';
  }
};
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
  <!-- button -->
  <br>
  <button @click="toggleBut">toggle status</button>
</template>
