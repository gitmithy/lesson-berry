<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
    <a
      class="mp-like-more mp-border-top"
      href="//touch.piao.qunar.com/touch/list_上海_景点门票.html"
    >查看所有产品</a>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      weekendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
          title: "上海迪士尼乐园",
          desc: "全球最大的迪士尼城堡"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "上海迪士尼乐园",
          desc: "全球最大的迪士尼城堡"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "上海迪士尼乐园",
          desc: "全球最大的迪士尼城堡"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg",
          title: "上海迪士尼乐园",
          desc: "全球最大的迪士尼城堡"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.mp-like-more {
  position: relative;
  display: block;
  padding: 0.2rem 0;
  color: #00afc7;
  font-size: 0.28rem;
  line-height: 0.4rem;
  text-align: center;
}

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.item-img-wrapper{
  overflow hidden;
  height:0;
  padding-bottom 33.9%;
  .item-img {
    width: 100%;
  }
}


.item-info {

  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
  .item-button {
    line-height: 0.44rem;
    background: #ff9300;
    padding: 0 0.2rem;
    border-radius: 0.06rem;
    margin-top: 0.16rem;
    color: #fff;
  }
}
</style>
