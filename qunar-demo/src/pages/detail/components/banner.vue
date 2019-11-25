<template>
  <div class="banner">
    <img class="banner-image" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="" srcset="">
    <div class="banner-info">
      <div class="banner-title">
上海迪士尼乐园
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe600;</span>
        39
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailBanner'
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-image
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      margin-top .14rem
      padding  0 .4rem
      line-height .32rem
      height .32rem
      border-radius .2rem
      font-size .24rem
      background rgba(0,0,0,0.8)
      .banner-icon
        font-size .24rem
</style>
