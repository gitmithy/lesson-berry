<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
          v-for="item of hot"
          :key="item.id"
          @click="handleCityclick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">

          <div
          v-for="innerItem of item"
          :key="innerItem.id"
          @click="handleCityclick(innerItem.name)"
          class="item border-bottom">{{innerItem.name}}</div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props:{
    hot:Array,
    cities:Object,
    letter:String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityclick(city){

      // this.$store.commit('changeCity',city)
      // 加入mapMutations后即可将上面的改成下面的
      this.changeCity(city)

      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter(){
      // console.log(this.letter)
      if(this.letter){
        const element=this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{click: true, tap: true});
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eeeeee;
    padding-left: 0.2rem;
    color: #666666;
    font-size: 0.26rem;
  }

  .item-list {
    .item {
      line-height: 0.54rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
        padding: .1rem;
        font-size: .3rem;
      }
    }
  }
}
</style>
