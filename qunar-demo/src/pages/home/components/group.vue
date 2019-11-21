<template>
  <div class="mp-group lazy-load">
    <div class="mp-group-title image-ready">
      <img
        class="mp-title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
        alt="本周热门榜单"
      />
      <span class="mp-title">本周热门榜单</span>
      <a
        class="mp-title-more"
        href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=上海"
      >
        全部榜单
        <span class="mp-iconfont mp-more-icon">></span>
      </a>
    </div>
    <ul class="mp-hotsale-list">
      <li class="mp-hotsale-item"
      v-for="item of list" :key="item.id"
      >
        <a
          class="mp-fulllink"
          :href="item.link"
          data-click="ts_hotsale"
          data-click-index="0"
        >
          <div class="mp-hotsale-tag image-ready">
            <img
              class="mp-hotsale-tagimg"
              :src="item.tagimgUrl"
              :alt="item.title"
            />
          </div>
          <div class="mp-hotsale-imgcon image-ready">
            <img
              :src="item.imgUrl"
              :alt="item.title"
            />
          </div>
          <div class="mp-hotsale-sight mp-ellipsis">{{item.title}}</div>
          <div class="mp-hotsale-price">
            <span class="mpg-price">
              ¥
              <em class="mpg-price-num">{{item.price}}</em>
            </span>起
          </div>
        </a>
      </li>



    </ul>
  </div>
</template>
<script>
export default {
  name: "Group",
  props:{
    list:Array
  }

};
</script>
<style lang="stylus" scoped>
.mp-group {
    background: #fff
}

.mp-group:not(:first-child) {
    margin-top: .2rem
}
.mp-group-title {
    position: relative;
    padding: .24rem 0 .26rem;
    .mp-title{
      display: inline-block;
      margin-left: .08rem;
      height: .44rem;
      color: #212121;
      font-size: .32rem;
      line-height: .44rem;
    }
    .mp-title-img{
      display: inline-block;
      overflow: hidden;
      width: .3rem;
      height: .3rem;
      margin-left: .2rem;
      vertical-align: top;
    }
    .mp-title-more{
      position: absolute;
      top: .36rem;
      right: .32rem;
      color: #616161;
      font-size: .24rem;
      line-height: .28rem;
    }
    .mp-more-icon{
      margin-left: .04rem;
    }
}
.mp-hotsale-list{
    padding: 0 .24rem;
    overflow-x: scroll;
    white-space: nowrap;
    img{
      opacity: 0;
    }
}
.mp-hotsale-item:not(:first-child) {
    margin-left: .12rem
}
.mp-hotsale-item{
    position: relative;
    display: inline-block;
    padding: .06rem 0 .2rem;
    width: 2rem;
}
.mp-hotsale-imgcon {
    overflow: hidden;
    width: 2rem;
    height: 0;
    padding-bottom: 100%;
    background: #f0f5f8;
    img{
      width: 100%;
    }
}
.mp-hotsale-tag {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    width: .84rem;
    height: .4rem
}

.mp-hotsale-tagimg {
    width: 100%
}

.mp-hotsale-sight {
    margin-top: .12rem;
    color: #212121;
    font-size: .24rem;
    line-height: .32rem;
    text-align: center
}

.mp-hotsale-price {
    color: #616161;
    font-size: .24rem;
    line-height: .36rem;
    text-align: center;
    .mpg-price{
      color: #ff8300;
    }
    .mpg-price-num{
      font-size: .28rem;
    }

}
.image-ready img {
    opacity: 1;
}
</style>
