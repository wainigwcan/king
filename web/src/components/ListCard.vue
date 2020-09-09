<template>
  <m-card :title="title" :icon="icon">
    <div class="mt-3 px-2">
      <div class="nav jc-between">
        <div
          class="nav-item"
          :class="{'active' : index === i}"
          v-for="(category,i) in categories"
          :key="i"
          @click="$refs.list.$swiper.slideTo(i)"
        >
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
    </div>
    <div class="mt-2 px-2">
      <swiper
        :options="{autoHeight: true}"
        ref="list"
        @slide-change="()=> index = $refs.list.$swiper.realIndex"
      >
        <swiper-slide v-for="(category,i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    categories: { type: Array, required: true },
  },
  data() {
    return {
      index: 0,
    };
  },
};
</script>

<style>
</style>