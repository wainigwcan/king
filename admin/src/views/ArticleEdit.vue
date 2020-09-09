<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="文章分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :value="item._id"
            :label="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="文章详情">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item style="margin-top:1rem;">
        <el-button type="primary" native-type="submit">{{this.id ? "保存" : "创建"}}</el-button>
      </el-form-item>
    </el-form>
  </div>
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
      model: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post("upload", formData);

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
        message: "成功",
        type: "success",
      });
      this.$router.push("/articles/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/articles/${this.id}`);
      // 把this.model 和 res.data 合并成一个新对象 在把这个新对象赋值给this.model  避免数据丢失。
      this.model = Object.assign({}, this.model, res.data);
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
  components: {
    VueEditor,
  },
};
</script>
<style>
</style>
