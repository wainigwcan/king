<template>
  <el-table :data="items">
    <el-table-column prop="_id" label="ID" width="240"></el-table-column>
    <el-table-column prop="name" label="广告位名称"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button type="text" @click="$router.push(`/ads/create/${scope.row._id}`)" size="small">编辑</el-button>
        <el-button @click="DeleteClick(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fathc() {
      const res = await this.$http.get("/rest/ads");
      this.items = res.data;
    },
    async DeleteClick(row) {
      this.$confirm(`确定删除 ${row.name} 分类?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await this.$http.delete(`/rest/ads/${row._id}`);
          this.fathc();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.fathc();
  },
};
</script>

<style>
</style>