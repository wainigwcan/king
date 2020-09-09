<template>
  <div class="page-hero" v-if="model">
    <header class="topbar bg-black text-white py-2 px-4 d-flex ai-center">
      <img src="../assets/logo.png" style="height:2rem" />
      <span class="pl-3 flex-1 pt-1">
        <span>王者荣耀</span>
        <span class="px-2">攻略战</span>
      </span>
      <router-link tag="span" to="/">更多英雄 ···</router-link>
    </header>
    <!-- end of banner -->
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white h-100 p-3 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-1">{{model.name}}</h2>
        <div class="pb-1 fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between pb-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark-1">{{model.scores.survive}}</span>
          </div>
          <router-link to="/" tag="div" class="text-grey fs-sm">皮肤: 2 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div>
      <div class="px-3 bg-white border-bottom">
        <div class="nav d-flex pt-3 pb-2 jc-around">
          <div class="nav-item active">
            <div class="nav-link">英雄出事</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">境界功率</div>
          </div>
        </div>
        <swiper>
          <swiper-slide>
            <div>
              <div class="p-3 border-bottom">
                <div class="d-flex jc-around">
                  <router-link class="btn btn-lg flex-1" tag="button" to="/">
                    <i class="iconfont icon-menu1"></i>
                    英雄介绍视频
                  </router-link>
                  <router-link class="btn btn-lg flex-1 ml-2" tag="button" to="/">
                    <i class="iconfont icon-menu1"></i>
                    英雄介绍视频
                  </router-link>
                </div>
                <!-- 技能 -->
                <div class="skills mt-3">
                  <div class="d-flex jc-around">
                    <img
                      @click="currentSkillsIndex = i"
                      class="icon"
                      :class="{'active': currentSkillsIndex === i}"
                      :src="item.icon"
                      width="60"
                      height="60"
                      v-for="(item,i) in model.skills"
                      :key="item._id"
                      alt
                    />
                  </div>
                  <div v-if="currentSkill">
                    <div class="d-flex ai-center pt-3 pb-2">
                      <h3 class="m-0">{{currentSkill.name}}</h3>
                      <span
                        class="text-grey ml-3"
                      >(冷却值: {{currentSkill.cost}}消耗: {{currentSkill.delay}})</span>
                    </div>
                    <p>{{currentSkill.description}}</p>
                    <div class="border-bottom"></div>
                    <p class="text-grey">小提示: {{currentSkill.tips}}</p>
                  </div>
                </div>
                <!--  -->
              </div>
            </div>
          </swiper-slide>
          <swiper-slide></swiper-slide>
        </swiper>
      </div>
      <m-card plain icon="menu1" title="出装推荐" class="hero-items">
        <div class="fs-xl py-3">顺风出装</div>
        <div class="d-flex border-bottom pb-1 jc-around text-center">
          <div v-for="item in model.items1" :key="item.name">
            <img class="icon" :src="item.icon" alt />
            <div class="fs-xxs">{{item.name}}</div>
          </div>
        </div>
        <div class="fs-xl py-3">逆风出装</div>
        <div class="d-flex border-bottom pb-1 jc-around text-center">
          <div v-for="item in model.items2" :key="item.name">
            <img class="icon" :src="item.icon" alt />
            <div class="fs-xxs">{{item.name}}</div>
          </div>
        </div>
      </m-card>
      <m-card plain icon="menu1" title="使用技巧">
        <p>{{model.usageTips}}</p>
      </m-card>
      <m-card plain icon="menu1" title="对抗技巧">
        <p>{{model.battleTips}}</p>
      </m-card>
      <m-card plain icon="menu1" title="团战思路">
        <p>{{model.teamTips}}</p>
      </m-card>
      <m-card plain icon="menu1" title="英雄关系">
        <div class="fs-xl py-3">最佳搭档</div>
        <div class="d-flex py-2 ai-center" v-for="item in model.partners" :key="item._id">
          <img :src="item.hero.avatar" height="40" alt />
          <div class="flex-1 fs-xxs ml-2">{{item.description}}</div>
        </div>
        <div class="border-bottom my-3"></div>
      </m-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: null,
      currentSkillsIndex: 0,
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillsIndex];
    },
  },
  methods: {
    async fatch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fatch();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.page-hero {
  .top {
    background: #fff no-repeat top center/auto 100%;
    height: 50vw;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.3rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1.1rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.75rem;
      }
    }
  }
  .skills {
    img.icon {
      border: 3px solid map-get($colors, "white");
      &.active {
        border-color: map-get($colors, "primary");
      }
      border-radius: 45%;
    }
  }
  .hero-items {
    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>