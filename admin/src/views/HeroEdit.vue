<template>
  <div class="about">
    <h2>{{this.id ? "保存" : "创建"}}英雄</h2>
    <el-form @submit.native.prevent="save" label-width="80px">
      <el-tabs type="border-card" value="skills">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of categories"
                :key="item._id"
                :value="item._id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              show-score
              :max="9"
              v-model="model.scercs.difficult"
              style="margin-top: 0.7rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate show-score :max="9" v-model="model.scercs.skills" style="margin-top: 0.7rem"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate show-score :max="9" v-model="model.scercs.attack" style="margin-top: 0.7rem"></el-rate>
          </el-form-item>
          <el-form-item label="生命">
            <el-rate show-score :max="9" v-model="model.scercs.survive" style="margin-top: 0.7rem"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option v-for="item of items" :key="item._id" :value="item._id" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option v-for="item of items" :key="item._id" :value="item._id" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button type="text" @click="model.skills.push({})">
            <i class="el-icon-plus"></i> 添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadURL"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res => $set(item,'icon',res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="taxtarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="taxtarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="model.skills.splice(i,1)" type="danger">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button
          style="margin-top:1rem"
          type="primary"
          native-type="submit"
        >{{this.id ? "保存" : "创建"}}英雄</el-button>
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
      categories: [],
      items: [],
      model: {
        skills: [],
        scercs: {
          fifficult: 0,
        },
      },
    };
  },
  methods: {
    async save() {
      let res;
      console.log(res);
      if (this.id) {
        res = await this.$http.put(`/rest/heroes/${this.id}`, this.model);
      } else {
        res = await this.$http.post("/rest/heroes", this.model);
      }
      this.$message({
        type: "success",
        message: "保存",
      });
      this.$router.push("/heroes/list");
    },
    async fatch() {
      const res = await this.$http.get(`/rest/heroes/${this.id}`);
      this.model = res.data;
    },
    async fatchCategories() {
      const res = await this.$http.get(`/rest/categories`);
      this.categories = res.data;
    },
    async fatchItems() {
      const res = await this.$http.get(`/rest/items`);
      this.items = res.data;
    },
    async afterUpload(res) {
      this.$set(this.model, "avatar", res.url);
      // this.model.icon = res.url;
      // console.log(res);
    },
  },
  created() {
    this.fatchItems();
    this.fatchCategories();
    this.id && this.fatch();
  },
};
</script>

<style>
</style>