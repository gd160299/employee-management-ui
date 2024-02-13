<template>
    <div>
      <Sidebar />
      <router-view />
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue';
  
  export default {
    name: 'Home',
    components: {
      Sidebar
    }
  }
  </script>
  