<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/6da9003b743b65f4c0ccd295cc484e57.1559116998.82e0eaa75cff42ffae8870dd2ed4aa11.230x140_21456.jpg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/6da9003b743b65f4c0ccd295cc484e57.1559116998.82e0eaa75cff42ffae8870dd2ed4aa11.230x140_21456.jpg"
          alt
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/6da9003b743b65f4c0ccd295cc484e57.1559116998.82e0eaa75cff42ffae8870dd2ed4aa11.230x140_21456.jpg"
          alt
        />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>

    <!-- end of weiper -->
    <div class="icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of icons -->
    <list-card title="新闻资讯" icon="menu1" :categories="newCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="d-flex fs-lg py-2"
          v-for="(news,i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-ellipsis text-dark-1">{{news.title}}</span>
          <span class="fs-sm text-grey-1">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </list-card>
    <!-- 英雄列表 -->
    <list-card title="英雄列表" icon="card-hero" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap text-center" style="margin: 0 -.6rem;">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2"
            style="width:20%;"
            v-for="(hero,i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" class="w-100" />
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </list-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      //处理时间格式
      return dayjs(val).format("MM/DD");
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home",
        },
      },
      newCats: [],
      heroCats: [],
    };
  },
  methods: {
    async fatchNewsCard() {
      const res = await this.$http.get("news/list");
      this.newCats = res.data;
    },
    async fatchHeroCard() {
      const res = await this.$http.get("heroes/list");
      this.heroCats = res.data;
    },
  },
  created() {
    this.fatchNewsCard();
    this.fatchHeroCard();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.icons {
  border-bottom: 1px solid $border-color;
  border-top: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: 0;
    }
  }
}
</style>