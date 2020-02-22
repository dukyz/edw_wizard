<template>
  <div class="login_container">
    <div class="login_box">

      <!-- Logo Area -->
      <div class="logo_area">
        <img src="../assets/logo.jpg" />
      </div>

      <!-- Login Form Area -->
      <div>
        <el-form ref="ref_login_form" class="login_form" :model="login_form" :rules="login_rules">
          <el-form-item prop="username">
            <el-input v-model="login_form.username" placeholder="Your Username" prefix-icon="el-icon-user-solid"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="login_form.password" placeholder="Your Password" prefix-icon="el-icon-s-goods"
              show-password></el-input>
          </el-form-item>
          <el-form-item class="login_btns">
            <el-button type="primary" @click="login">Login</el-button>
            <el-button type="info" @click="resetLoginForm">Reset</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login_form: {
        username: 'eric',
        password: '123'
      },
      login_rules: {
        username: [{
          required: true,
          message: 'username required',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: 'password required',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.ref_login_form.resetFields()
    },
    login () {
      this.$refs.ref_login_form.validate(async (valid) => {
        if (!valid) {
          return
        }
        const { data: response } = await this.$http.post('login', this.login_form)
        console.log(response)
        if (response.status !== 200) {
          return this.$message.error(response.error)
        } else {
          this.$message.success(response.success)
          window.sessionStorage.setItem('token', response.data.token)
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    height: 300px;
    width: 450px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .logo_area {
    height: 170px;
    width: 170px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;

  }

  .login_btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
