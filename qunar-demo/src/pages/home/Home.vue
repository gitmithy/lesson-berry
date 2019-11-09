<template>
  <div class="hello">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <Group></Group>
    <HomeRecommend></HomeRecommend>
    <HomeWeekend></HomeWeekend>
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
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      console.log(res)
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
