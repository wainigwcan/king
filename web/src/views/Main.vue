<template>
  <div>
    <header class="topbar bg-black py-2 px-4 d-flex ai-center">
      <img src="../assets/logo.png" style="height:2rem" />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey pt-1">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </header>
    <div class="bg-primary p-2">
      <div class="nav nav-inverse d-flex text-white jc-around">
        <div class="nav-item active">
          <div class="nav-link">首页</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">攻略中心</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事中心</div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>