<template>
  <section class="shiWuModule">
    <div class="shiWuHeader">
        <div class="shiWuHeader-top">
          <ul class="sList clearFix">
            <li class="p1"  @click="back('/home')">
              <i class="iconfont icon-home" ></i>
            </li>
            <li class="p2">
             
              <router-link class="find"  :class="{on:$route.path===`/search/searchfind/${$route.params.id}`}"   to="/search/searchfind" >发现</router-link> 
              <router-link to="/search/searchselect" class="zhen" :class="{on:$route.path==='/search/searchselect'}">甄选家</router-link>
              
            </li>
            <li class="p3">
              <i class="iconfont icon-xiaoxi- ii"></i>
              <i class="iconfont icon-gouwuche ii"></i>
            </li>
          </ul>
      </div>
      <div class="msiteNav" ref='msitenav' v-show="$route.path!=='/search/searchselect'">
        <ul class="navList">
            <li class="navItem" v-for="(item,index) in keyss" :key="item.tabId"  @click="dianji(index)" :class="{ono:index===index1*1}">
                <!-- <a href="javascript:;"   @click="dianji(index)" :class="{ono:index===index1*1}">{{item.tabName}}</a> -->

                <router-link :to="`/search/searchfind/${item.tabId}`" >{{item.tabName}}</router-link>
                <!-- <div class="lins"></div> -->
            </li>
            
        </ul>
      </div>
    </div>
    <router-view ></router-view>
  </section>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
import BScroll from 'better-scroll'
import { mapState } from 'vuex';
  export default {
    data(){
      return {
         shiwuss:[],
         index1:0,
        //  tabId:20
      }
     
    },
    mounted(){
      this.$router.push('/search/searchfind/20')
      
      this.$nextTick(() => {
          new Swiper('.swiper-container', {
           loop: true,
           speed : 1000,
            autoplay : {
              delay : 1000,
              stopOnLastSlide : false,
              disableOnInteraction : true,
            }
          })
          new BScroll(this.$refs.msitenav,{
            scrollX: true,
            scrollY: false
          })
        })

        this.$store.dispatch('getShiWu')
        console.log(this.data)
    },
   
      methods:{
			back(path){
				this.$router.replace(path)
      },
      dianji(n,y){
        this.index1=n
       
      }
    },
    computed:{
      ...mapState({
        keyss:state=>state.shiwu
      })
    },
    watch:{
      keyss(){
        this.shiwuss=this.keyss[0]
       
      },
    //  $route(){
    //     this.tabId=this.$route.params.id
    //   }
      
    }
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .shiWuModule
    background #F4F4F4
    width px2rem(750px)
    .shiWuHeader
      position fixed
      left 0
      top 0
      z-index 100
      background white
      .shiWuHeader-top
        width px2rem(750px)
        height px2rem(88px)
        box-sizing border-box
        padding 0 px2rem(30px)
        background white
        .sList
          width 100%
          height px2rem(88px)
          // background red
          .p1
            float left
            margin-top: px2rem(20px)
            .icon-home
              font-size px2rem(60px)
          .p2
            float left
            font-size px2rem(35px)
            margin-left: px2rem(155px)
            margin-top: px2rem(26px)
            .find 
              font-size px2rem(40px)
              font-weight bold
              &.on 
                color red
            .zhen
              position absolute
              left px2rem(230px)
              top px2rem(27px)
              margin-left: px2rem(155px)
              padding-top: px2rem(-200px)
              &.on
                color red
          .p3
            float right
            display flex
            .ii
              font-size px2rem(68px)
              margin-top: px2rem(10px)
              margin-left px2rem(40px)
      .msiteNav
        position relative
        width: px2rem(1000px)
        height: px2rem(60px)
        // overflow: hidden
        .navList
          // width 100%
          width px2rem(1500px)
          position relative
          display flex
          font-size px2rem(28px)
          .navItem
            flex-shrink 0
            padding: px2rem(15px) px2rem(30px)
            font-weight bold
            &.ono
                background-color  red
                border-bottom 3px solid black
           
 </style>