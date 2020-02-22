<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>User Management</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="Search..." v-model="queryInfo.query">
            <el-button slot="append" icon="el-icon-search" @click="getProjectList()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" icon="el-icon-plus"></el-button>
        </el-col>
      </el-row>
      <el-table :data="projectList" border stripe style="width: 100%">
        <el-table-column type="index" label="#" width="35"></el-table-column>
        <el-table-column prop="name" label="Name" width="150"></el-table-column>
        <el-table-column prop="pm" label="PM" width="100"></el-table-column>
        <el-table-column prop="sa" label="SA" width="100"></el-table-column>
        <el-table-column prop="vendor" label="Vendor"></el-table-column>
        <el-table-column label="Operate">
          <template>
            <el-button type="warning" icon="el-icon-edit"></el-button>
            <el-button type="danger" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum"
        :page-sizes="[10, 50, 100]" :page-size="queryInfo.pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectList: [{
        name: 'GSC Feed',
        pm: 'Jacky Liu',
        sa: 'Eric Zhu',
        vendor: 'PWC'
      }],
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      total: 0
    }
  },
  created () {
    this.getProjectList()
  },
  methods: {
    // async getProjectList () {
    //   const {
    //     data: res
    //   } = await this.$http.get('project', {
    //     params: this.queryInfo
    //   })
    //   if (res.meta.status !== 200) {
    //     return this.$message.error('Errors Happend !')
    //   }
    //   this.projectList = res.data.projectList
    //   this.total = res.data.total
    // },
    getProjectList () {
      this.$message.error('Get Data.....')
    },
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getProjectList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getProjectList()
    }
  }
}
</script>

<style lang="less" scoped>
  .el-row {
    margin-bottom: 10px;
  }

  .el-col-4 {
    width: 5%;
  }
</style>
