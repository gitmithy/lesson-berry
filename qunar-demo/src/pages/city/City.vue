<template>
<div>
  <CityHeader></CityHeader>
  <CitySearch
  :cities="cities"
  ></CitySearch>
  <CityList
  :cities="cities"
  :hot="hotCities"
  :letter="letter"
  ></CityList>
  <CityAlphabet
  :cities="cities"
  @change="handleLetterChange"
  ></CityAlphabet>
</div>

</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/Alphabet'

export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return{
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/static/mock/city.json')
       .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc(res){
      res=res.data
      if(res.ret&&res.data){
        const data=res.data
        this.cities=data.cities
        this.hotCities=data.hotCities
      }
    },
    handleLetterChange(letter){
      this.letter=letter
      // console.log(letter)
    }
  },
  mounted() {
    this.getCityInfo();
  },
}
</script>
<style lang="stylus" scoped>

</style>
