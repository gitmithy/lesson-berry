<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
      v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt />


        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <a class="mp-like-more mp-border-top" href="//touch.piao.qunar.com/touch/list_上海_景点门票.html">查看所有产品</a>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data(){
    return{
      recommendList:[
        {
        id:'0001',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title:'上海迪士尼乐园',
        desc:'全球最大的迪士尼城堡'
        },
        {
        id:'0002',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title:'上海迪士尼乐园',
        desc:'全球最大的迪士尼城堡'
        },
        {
        id:'0003',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title:'上海迪士尼乐园',
        desc:'全球最大的迪士尼城堡'
        },
        {
        id:'0004',
        imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title:'上海迪士尼乐园',
        desc:'全球最大的迪士尼城堡'
        },
      ]
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';
.mp-like-more {
    position relative;
    display: block;
    padding: .2rem 0;
    color: #00afc7;
    font-size: .28rem;
    line-height: .4rem;
    text-align: center;
}

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height 1.9rem;
  .item-img{
    width 1.7rem;
    height 1.7rem;
    padding .1rem;
  }
  .item-info{
    flex 1;
    padding .1rem;
    min-width 0;
    .item-title{
      line-height .54rem;
      font-size .32rem;
      ellipsis();
    }
    .item-desc{
      line-height .4rem;
      color #ccc;
      ellipsis();
    }
    .item-button{
      line-height .44rem;
      background #ff9300;
      padding:0 .2rem;
      border-radius 0.06rem;
      margin-top .16rem;
      color #fff;
    }
  }
}
</style>
