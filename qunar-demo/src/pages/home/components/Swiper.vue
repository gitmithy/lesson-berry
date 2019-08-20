<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data:function(){
    return{
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[{
        id:'0001',
        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/da3db1d9761f8984fd9c84c4eccf93ee.jpg_750x200_b7f8686a.jpg'
      },{
        id:'0002',
        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/01549e224da474a72681614810d07860.jpg_750x200_47325a53.jpg'
      }]
    }
  }
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
