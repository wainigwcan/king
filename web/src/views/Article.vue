<template>
  <div class="page-article" v-if="model">
    <div class="d-flex ai-center p-2 border-bottom">
      <div @click="$router.go(-1)" class="iconfont icon-Back text-info"></div>
      <div class="flex-1 text-info px-2">{{model.title}}</div>
      <div class="text-grey fs-xs">09/01</div>
    </div>
    <div class="px-3 fs-xl body" v-html="model.body"></div>
    <div class="footer">
      <div class="p-2">
        <i class="iconfont icon-menu"></i>
        <span class="ml-1 text-info">相关资讯</span>
      </div>
      <div class="p-2">
        <router-link
          tag="div"
          :to="`/articles/${item._id}`"
          class="fs-lg py-1"
          v-for="item in model.related"
          :key="item._id"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  watch: {
    id: "fatch",
  },
  data() {
    return {
      model: null,
    };
  },
  methods: {
    async fatch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fatch();
  },
};
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>