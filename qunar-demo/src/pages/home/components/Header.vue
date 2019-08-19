<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont back-icon">&#xe697;</div>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe6ac;</span>
    输入城市/景点/游玩主题
  </div>
  <div class="header-right">
    城市
    <span class="iconfont arrow-icon">&#xe6a6;</span>
  </div>
</div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
// css中表示src目录用~@
  @import '~styles/varibles.styl';
  .header
   display:flex
   line-height:0.86rem
   background $bgColor
   color #fff
   .header-left
    width:0.64rem
    float:left
    .back-icon
     text-align center
     font-size .5rem
   .header-input
    flex:1
    height .64rem
    line-height .64rem
    margin-top .12rem
    margin-left .2rem
    background #ffffff
    border-radius .1rem
    color #ccc
    padding-left 0.1rem
   .header-right
      width:1.24rem
      float:right
      text-align center
      .arrow-icon
       font-size 0.3rem
       margin-top 0.1rem
</style>
