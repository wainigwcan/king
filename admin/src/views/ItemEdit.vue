<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="物品">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
      model: {
        name: "",
        icon: "",
      },
    };
  },
  methods: {
    afterUpload(res) {
      this.model.icon = res.url;
    },
    async save() {
      let res;
      console.log(res);
      if (this.id) {
        res = await this.$http.put(`/rest/items/${this.id}`, this.model);
      } else {
        res = await this.$http.post("/rest/items", this.model);
      }
      this.$message({
        message: "成功",
        type: "success",
      });
      this.$router.push("/items/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/items/${this.id}`);
      this.model = res.data;
    },
  },

  created() {
    this.id && this.fatch();
  },
};
</script>
<style>
</style>
