<template>
  <el-form @submit.native.prevent="save" label-width="80px">
    <h2>{{this.id ? "保存" : "创建"}}文章</h2>
    <el-form-item label="所属分类">
      <el-select v-model="model.categories" multiple>
        <el-option v-for="item in categories" :key="item._id" :value="item._id" :label="item.name"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="model.title"></el-input>
    </el-form-item>
    <el-form-item label="内容">
      <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">{{this.id ? "保存" : "创建"}}文章</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: {},
  },
  data() {
    return {
      categories: [],
      model: {},
    };
  },
  components: {
    VueEditor,
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("/upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async save() {
      let res;
      console.log(res);
      if (this.id) {
        res = await this.$http.put(`/rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post("/rest/articles", this.model);
      }
      this.$message({
        type: "success",
        message: "保存",
      });
      this.$router.push("/articles/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/articles/${this.id}`);
      this.model = res.data;
    },
    async fatchCategories() {
      const res = await this.$http.get(`/rest/categories`);
      this.categories = res.data;
    },
  },
  created() {
    this.fatchCategories();
    this.id && this.fatch();
  },
};
</script>

<style>
</style>