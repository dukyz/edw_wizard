<template>
  <el-container class="home-container">
    <!-- Head Area -->
    <el-header>
      <div>
        <!-- <img src="../assets/header.jpg"/> -->
        <span>Enterprise Data World</span>
      </div>
      <el-button type="info" @click="logout">Logout</el-button>
    </el-header>
    <!-- Functional Area -->
    <el-container>
      <!-- Side Area -->
      <el-aside width=250px>
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#333744" text-color="#fff"
          active-text-color="#ffd04b" router>
          <el-submenu index="1">
            <template slot="title" >
              <i class="el-icon-menu"></i>
              <span>Metadata Management</span>
            </template>
            <el-menu-item index = "/metadataTech" >Technical Metadata</el-menu-item>
            <el-menu-item index = "/metadataBusi">Business Metadata</el-menu-item>
          </el-submenu>
          <el-menu-item index="/workflow">
            <i class="el-icon-location"></i>
            <span slot="title">Workflow Management</span>
          </el-menu-item>
          <el-menu-item index="/project" >
            <i class="el-icon-document"></i>
            <span slot="title">Project Management</span>
          </el-menu-item>
          <el-menu-item index="/user" >
            <i class="el-icon-user"></i>
            <span slot="title">User Management</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- Working Area -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      xxx: {}
    }
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #333744;
    color: #333;
    display: flex;
    padding-left: 0;
    align-items: center;
    justify-content: space-between;
    line-height: 60px;
    color: #fff;
    font-size: 20px;

    > div {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
      }
    }
  }

  .el-aside {
    background-color: #333744;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

</style>
