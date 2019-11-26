<template>
  <div>
    <router-link
    tag="div"
    to="/"
    class="header-abs"
    v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe697;</div>
    </router-link>
    <div
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe697;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailHeader",
  data(){
    return {
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods: {
    handleScroll(){
      const top=document.documentElement.scrollTop
      if(top>60){
        let opacity = top/140;
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle={
          opacity:opacity
        }
        this.showAbs=false
      }else{
        this.showAbs=true
      }
      // console.log(document.documentElement.scrollTop)
    }
  },
  // 页面出现和刷新的时候执行
  activated(){
    document.documentElement.scrollTop=0
    window.addEventListener('scroll',this.handleScroll)
  },
  // 页面隐藏的时候执行
  deactivated() {
    window.removeEventListener('scroll',this.handleScroll)
  },

};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-fixed {
  position: fixed;
  top 0
  left 0
  right 0
  z-index 2
  // overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-fixed-back {
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    top: 0;
    left: 0;
    color: #fff;
  }
}

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}
</style>
