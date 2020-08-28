<template>
  <el-form @submit.native.prevent="save" label-width="80px">
    <h2>{{this.id ? "保存" : "创建"}}广告位</h2>
    <el-form-item label="名称">
      <el-input v-model="model.name"></el-input>
    </el-form-item>
    <el-form-item label="广告">
      <el-button type="text" @click="model.items.push({})">
        <i class="el-icon-plus"></i> 添加广告位
      </el-button>
      <el-row type="flex" style="flex-wrap: wrap">
        <el-col :md="12" v-for="(item,i) in model.items" :key="i">
          <el-form-item label="跳转链接">
            <el-input v-model="item.url"></el-input>
          </el-form-item>
          <el-form-item style="margin-top:1rem" label="图片">
            <el-upload
              class="avatar-uploader"
              :action="uploadURL"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(item,'image',res.url)"
            >
              <img v-if="item.image" :src="item.image" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button
              style="margin-bottom: 1rem;"
              @click="model.items.splice(i,1)"
              type="danger"
            >删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">{{this.id ? "保存" : "创建"}}分类</el-button>
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
        res = await this.$http.put(`/rest/ads/${this.id}`, this.model);
      } else {
        res = await this.$http.post("/rest/ads", this.model);
      }
      this.$message({
        type: "success",
        message: "保存",
      });
      this.$router.push("/ads/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/ads/${this.id}`);
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