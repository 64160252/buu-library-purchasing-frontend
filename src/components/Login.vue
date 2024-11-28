<template>
  <div id="login">
    <h1>เข้าสู่ระบบ</h1>
    <div class="form-group">
      <input v-model="username" type="text" placeholder="ชื่อผู้ใช้" required />
    </div>
    <div class="form-group">
      <input v-model="password" type="password" placeholder="รหัสผ่าน" required />
    </div>
    <button @click="login">เข้าสู่ระบบ</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      mockUsers: [
        { username: 'admin', password: '123456' },
        { username: 'user1', password: 'password' },
      ],
    }
  },
  methods: {
    login() {
      const user = this.mockUsers.find(
        (user) => user.username === this.username && user.password === this.password,
      )

      if (user) {
        this.$router.push('/qrcode') // นำไปที่หน้า QR Code
      } else {
        this.errorMessage = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
      }
    },
  },
}
</script>

<style>
/* CSS เหมือนตัวอย่างก่อนหน้า */
</style>
