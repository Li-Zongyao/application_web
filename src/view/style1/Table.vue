<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.programname" placeholder="项目名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="getUsers">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--列表-->
    <el-table :data="program" highlight-current-row v-loading="loading" @selection-change="selsChange" style="width: 100%;">
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

    <!--delete工具条-->
    <el-col :span="24" class="toolbar">
      <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
      <!--<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">-->
      <!--</el-pagination>-->
    </el-col>

  </section>
</template>

<script>
  export default {
    name: "table1",
    data() {

      return {
        aaa:'',
        filters: {
          programname: ' '
        },
        loading: false,
        page: 1,
        sels: [],//列表选中列
        program: [
        ]
      }
    },
    methods: {
      getUsers() {
        this.$axios
          .post('/programlist', {
            programname: this.filters.programname
          })

          .then((res) => {
            this.loading = true;
            console.info('return message = '+ res.data.aaa);
            console.info('项目 = '+ res.data.program);
            this.program = res.data.program;
            this.loading = false;
            console.info('显示成功 ');
          })

          .catch((err) => {
            console.log(err)
          })

      },

      //批量删除
      batchRemove() {
        var ids = this.sels.map(item => item.id).toString();
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          this.loading = true;
          //NProgress.start();
          this.$axios
            .post('/delprogramlist', {
              ids: ids
            })
            .then((res) => {
            this.loading = false;
            //NProgress.done();
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.getUsers();
          });
        }).catch(() => {

        });
      },
      //选择刷新
      selsChange: function (sels) {
        this.sels = sels;
      },
    },
    mounted() {
      this.getUsers();
    }
  }
</script>

<style scoped>

</style>
