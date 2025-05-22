<script>
export default {
  data() {
    return {
      name: 'chris',
      status: 'pending',
    }
  },
}
</script>
<template>
  <h1> hello {{ name }}</h1>
  <p v-if="status=='active'">user is active</p>
  <p v-else-if="status=='pending'">user is pending</p>
  <p v-else="status">user is inactive</p>
</template>
