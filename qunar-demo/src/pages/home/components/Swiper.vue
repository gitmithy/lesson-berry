<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper" >
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>

</template>
<script >
export default {
  name:'HomeSwiper',
  props:{
    list:Array
  },
  data:function(){
    return{
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      }
    }
  },
  computed: {
    showSwiper(){
      return this.list.length
    }
  },
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active // >>>符号样式穿透
 background #fff
.wrapper
 width 100%
 height 0//防止页面抖动 或者使用height 26.67vw
 overflow hidden//防止页面抖动 或者使用height 26.67vw
 padding-bottom 26.67%//防止页面抖动 或者使用height 26.67vw
 .swiper-img
  width 100%
</style>
