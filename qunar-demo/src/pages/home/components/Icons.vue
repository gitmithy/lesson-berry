<template>
  <div class="icons">
    <swiper>
      <!-- slides -->
      <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-img-content"
              src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
              alt
              srcset
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-pagination2" slot="pagination2"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data:function(){
    return{
      swiperOption:{
        // pagination:'.swiper-pagination2',
        loop:true
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
    }
  }
}
</style>
