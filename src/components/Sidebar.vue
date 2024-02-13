<template>
    <div class="sidebar flex flex-col justify-between h-screen">
      <ul class="space-y-2">
        <li>
          <router-link to="/home/overview" class="flex items-center">
            <OverviewIcon class="h-5 w-5 mr-2" /> Overview
          </router-link>
        </li>
        <li>
          <router-link to="/home/work" class="flex items-center">
            <WorkIcon class="h-5 w-5 mr-2" /> Work
          </router-link>
        </li>
        <li>
          <router-link to="/home/profile" class="flex items-center">
            <ProfileIcon class="h-5 w-5 mr-2" /> Profile
          </router-link>
        </li>
        <li v-if="isAdmin">
          <router-link to="/home/add-employee" class="flex items-center">
            <AddEmployeeIcon class="h-5 w-5 mr-2" /> Add New Employee
          </router-link>
        </li>
      </ul>
      <button
        class="mb-10 mx-4 p-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors duration-300"
        @click="logout"
      >
        LogOut
      </button>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'

  export default {
    name: 'Sidebar',
    computed: {
      isAdmin() {
        // Logic kiểm tra role admin ở đây
        return true; 
      }
    },
  setup() {
    const router = useRouter();

    const logout = () => {
      // Your logout logic here
      router.push('/login'); // Redirect to login page after logout
    };

    return { logout };
  }
}
  </script>
  
  <style scoped>
.sidebar {
  width: 240px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #202020;
  color: #fff;
  padding-top: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 10px 20px;
}

.sidebar li:hover {
  background-color: #373737;
}

.sidebar a {
  text-decoration: none;
  color: #fff;
  display: block;
}

.router-link-active {
  background-color: #373737;
}
</style>
  