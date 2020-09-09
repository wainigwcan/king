<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="广告标题">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="model.items.push({})">
          <i class="el-icon-plus"></i> 添加广告位
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="24" v-for="(item,i) in model.items" :key="i">
            <el-form-item label="跳转（URL）">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item style="margin-top:1rem" label="图片">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthHeaders()"
                :show-file-list="false"
                :on-success="res => $set(item,'image',res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <el-button
                style="margin-bottom:1rem;"
                size="small"
                @click="model.items.splice(i,1)"
                type="danger"
              >删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
        name: "",
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
        message: "成功",
        type: "success",
      });
      this.$router.push("/ads/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/ads/${this.id}`);
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
