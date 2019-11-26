<template>
  <div>
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
import axios from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo (){
      // axios.get('/api/detail.json?id='+this.$route.params.id)
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res){
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        console.log(data)
        this.sightName=data.sightName
        this.bannerImg=data.bannerImg
        this.gallaryImgs=data.gallaryImgs
        this.list=data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  },
  data(){
    return{
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[]
    }
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 50rem
</style>
