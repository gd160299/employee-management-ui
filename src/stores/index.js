import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login() {
      // Giả định rằng người dùng đã đăng nhập thành công
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
    }
  },
})
