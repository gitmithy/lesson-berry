<template>
  <div class="icons">
    <swiper>
      <!-- slides -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div
        class="icon"
        v-for="item of page"
        :key="item.id"
        >
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src='item.imgUrl'
              alt
              srcset
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>

      <!-- <div class="swiper-pagination2" slot="pagination2"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  computed:{
    pages(){
      const pages=[]
      this.iconList.forEach((item,index)=>{
        const page=Math.floor(index/8)
        if(!pages[page]){
          pages[page]=[]
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  data: function() {
    return {
      iconList:[{
        id:'0001',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc:'景点门票'
      },{
        id:'0002',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc:'动植物园'
      },
      {
        id:'0003',
        imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
        desc:'暑期大促'
      },
      {
        id:'0004',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
        desc:'室内娱乐'
      },
      {
        id:'0005',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc:'一日游'
      },
      {
        id:'0006',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc:'黄浦江游船'
      },
      {
        id:'0007',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc:'上海野生'
      },
      {
        id:'0008',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
        desc:'上海迪士尼'
      },
      {
        id:'0009',
        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc:'世纪公园'
      },
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  margin-top .1rem;
}
.icons >>> .swiper-container{
  height: 0;
  padding-bottom: 50%;
}
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
    ellipsis();
  }
}
</style>
