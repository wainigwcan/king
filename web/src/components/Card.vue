<template>
  <div class="card bg-white px-2 py-2 mt-3">
    <div :class="{'border-bottom': !plain}" class="card-header pb-2 d-flex ai-center">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-ls px-2 flex-1">{{title}}</div>
      <i class="iconfont icon-menu" v-if="!plain"></i>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    plain: { type: Boolean },
  },
};
</script>

<style>
</style>