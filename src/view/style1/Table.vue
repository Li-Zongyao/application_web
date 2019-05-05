<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="program" highlight-current-row v-loading="loading" style="width: 100%;">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="id" width="120" sortable>
      </el-table-column>
      <el-table-column prop="programname" label="项目名称" width="120" sortable>
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="120" sortable>
      </el-table-column>
      <el-table-column prop="applicantunit" label="申请单位" width="180" sortable>
      </el-table-column>
      <el-table-column prop="subject" label="学科" width="120" sortable>
      </el-table-column>
      <el-table-column prop="apptime" label="申请时间" width="180" sortable>
      </el-table-column>

    </el-table>


  </section>
</template>

<script>
  export default {
    name: "table1",
    data() {

      return {
        aaa:'',
        filters: {
          name: ''
        },
        loading: false,
        program: [
        ]
      }
    },
    methods: {
      getUsers() {
        this.$axios
          .post('/programlist', {
            name: this.filters.name
          })

          .then((res) => {
            console.info('programlist 显示开始');
            this.loading = true;
            console.info('return message = '+ res.data.aaa);
            console.info('program = '+ res.data.program);
            this.program = res.data.program;
            this.loading = false;
            console.info('programlist 显示结束');
          })

          .catch((err) => {
            console.log(err)
          })

      },
    },
    mounted() {
      this.getUsers();
    }
  }
</script>

<style scoped>

</style>
