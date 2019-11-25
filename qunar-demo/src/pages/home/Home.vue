<template>
  <div class="hello">
    <HomeHeader ></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <Group :list="GroupList"></Group>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import Group from './components/group'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    Group,
    HomeWeekend
  },
  data(){
    return{
      swiperList:[],
      iconList:[],
      GroupList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      // console.log(res)
      res=res.data
      if(res.ret && res.data){
        const data=res.data;
        this.swiperList=data.swiperList;
        this.iconList=data.iconList;
        this.GroupList=data.GroupList;
        this.recommendList=data.recommendList;
        this.weekendList=data.weekendList;
      }
    }
  },
  mounted() {
    this.getHomeInfo();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
