<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="账号">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item style="margin-top:1rem;">
        <el-button type="primary" native-type="submit">{{this.id ? "保存" : "创建"}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async save() {
      let res;
      console.log(res);
      if (this.id) {
        res = await this.$http.put(`/rest/admin_user/${this.id}`, this.model);
      } else {
        res = await this.$http.post("/rest/admin_user", this.model);
      }
      this.$message({
        message: "成功",
        type: "success",
      });
      this.$router.push("/admin_user/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/admin_user/${this.id}`);
      // 把this.model 和 res.data 合并成一个新对象 在把这个新对象赋值给this.model  避免数据丢失。
      this.model = Object.assign({}, this.model, res.data);
    },
  },

  created() {
    this.id && this.fatch();
  },
};
</script>
<style>
</style>
