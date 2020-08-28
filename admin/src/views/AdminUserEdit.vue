<template>
  <el-form @submit.native.prevent="save" label-width="80px">
    <h2>{{this.id ? "保存" : "创建"}}用户</h2>
    <el-form-item label="用户名">
      <el-input v-model="model.username"></el-input>
    </el-form-item>
    <el-form-item v-if="this.id" label="密码">
      <el-input type="text" placeholder="输入新密码覆盖旧密码" v-model="model.password"></el-input>
    </el-form-item>
    <el-form-item v-else label="密码">
      <el-input type="text" placeholder="请设置密码" v-model="model.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">{{this.id ? "保存" : "创建"}}用户</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        items: [],
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
        type: "success",
        message: "保存",
      });
      this.$router.push("/admin_user/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/admin_user/${this.id}`);
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