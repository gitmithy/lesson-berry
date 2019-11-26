<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs"
        :key="index"
        >
          <div
            class="mp-imgswipe-img"
            :style='{backgroundImage:"url(" + item.url + ")"}'


          ></div>
        </swiper-slide>



        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonGallery",
  props: {
    imgs: {
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer:true,
        observeParents:true,
      }
    };
  },
  methods: {
    handleGallaryClick () {
      this.$emit("close")
    }
  },

};
</script>
<style lang="stylus" scoped>
.swiper-container {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #000;
}

.mp-imgswipe-img {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.container {
  // display flex
  // flex-direction column
  // justify-content center
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #000;
    .swiper-pagination{
      color #fff;
    }
    .gallary-img {
      width: 100%;
    }
  }
}
</style>
