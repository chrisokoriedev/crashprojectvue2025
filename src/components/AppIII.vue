<script setup>
import { ref, onMounted } from 'vue';

const name = ref('chris');
const status = ref('active');
const tasks = ref(['task1', 'task2', 'task3']);
const newtask = ref('');
const apiLink = 'https://jsonplaceholder.typicode.com/todos'; 
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
const addTask = () => {
  if (newtask.value.length <= 0) {
    alert('Please enter a task');
    return;
  }
  tasks.value.push(newtask.value);
  newtask.value = '';

};
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
onMounted(async () => {
  try {
    const response = await fetch(apiLink);
    const data = await response.json();
    tasks.value = data.map((e) => e.title);
  }
  catch (e){
    console.log('Error fetching api: ${e}');
  }
  finally {
    console.log('done');
  }
});
</script>
<template>
  <h1> hello {{ name }}</h1>
  <p v-if="status == 'active'">user is active</p>
  <p v-else-if="status == 'pending'">user is pending</p>
  <p v-else="status">user is inactive</p>
  <!-- loop through array -->
  <form @submit.prevent="addTask">
    <label for=""> Add Task</label>
    <br>
    <input type="text" id="newtask" name="newtask" v-model="newtask">
    <button type="submit">Submit</button>
  </form>


  <br>

  <h3>Tasks</h3>
  <ul>
    <li style="padding-bottom: 10px;" v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span> &nbsp;&nbsp;&nbsp;
      <button type="button" @click="deleteTask(index)">❌</button>
    </li>
  </ul>
  <!-- button -->
  <br>
  <button @click="toggleBut">toggle status</button>
</template>
