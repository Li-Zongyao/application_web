<template>
  <el-form ref="programform" :model="programform" :rules="rules" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
    <el-form-item label="项目id" placeholder="请输入项目id">
      <el-input v-model="programform.id"></el-input>
    </el-form-item>
    <el-form-item label="项目名称">
      <el-input v-model="programform.programname" placeholder="请输入项目名称">
      </el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="programform.username" placeholder="请输申请人姓名"></el-input>
    </el-form-item>
    <el-form-item label="申请单位">
      <el-input v-model="programform.applicantunit" placeholder="请输入申请单位"></el-input>
    </el-form-item>
    <el-form-item label="学科">
      <el-input v-model="programform.subject" placeholder="请输入学科">
      </el-input>
    </el-form-item>
    <el-form-item label="申请时间">
      <el-input v-model="programform.apptime" placeholder="yyyy-mm-dd">
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click.native.prevent="onSubmit('programform')">提交</el-button>
      <el-button @click.native.prevent>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        programform: {
          id: '',
          programname: '',
          username: '',
          applicantunit: '',
          subject: '',
          apptime: ''
        },
        rules: {
          id: [
            {required: true, message: 'id不可为空', trigger: 'blur'},

          ],
          programname: [
            {required: true, message: '项目名不可为空', trigger: 'blur'},

          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$axios
          .post('/addprogram', {
            id: this.programform.id,
            programname: this.programform.programname,
            username: this.programform.username,
            applicantunit: this.programform.applicantunit,
            subject: this.programform.subject,
            apptime: this.programform.apptime,
          })
          .then((res) => {
            console.info('form 返回');
          })


          .catch((err) => {
            console.log(err)
          })
      }
    }
  }

</script>
