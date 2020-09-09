<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id" :value="item._id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
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
      parents: [],
      model: {},
    };
  },
  methods: {
    async fatchParent() {
      const res = await this.$http.get("/rest/categories");
      this.parents = res.data;
    },
    async save() {
      let res;
      console.log(res);
      if (this.id) {
        res = await this.$http.put(`/rest/categories/${this.id}`, this.model);
      } else {
        res = await this.$http.post("/rest/categories", this.model);
      }
      this.$message({
        message: "成功",
        type: "success",
      });
      this.$router.push("/categories/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/categories/${this.id}`);
      this.model = res.data;
    },
  },

  created() {
    this.fatchParent();
    this.id && this.fatch();
  },
};
</script>

<style>
</style>