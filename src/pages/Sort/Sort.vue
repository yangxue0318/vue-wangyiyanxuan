<template>

  	<div class="sort-container">
      
      <div class="sort-container-list">
        <!-- 头部 -->
        <div class="sort-header">
          <div class="sort-header-top">
            <div class="sort-search" @click="go('/find')">
             <i class="iconfont icon-xiaoxi-"></i>
             <input type="text" class="sousuo" placeholder="搜索商品，共21615款好物" />
            </div>
          </div>
        </div>
        <!-- 身体 -->
        <div class="sort-category">
          <div class="sort-left">
            <div class="sort-left-two">
              <ul class="sort-list">
                <li class="sort-items lion" v-for="(item, index) in keys.categoryL1List" :key="index">
         
                  <a href="#" :class="{onn:index===index1*1}" @click="aaa(index)">{{item.name}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="sort-right">
            <div class="sort-right-content">
              <div class="sort-right-content-two">
                <div class="sort-right-top">
                  <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196">
                </div>
                <div class="sort-right-bottom">
                  <ul class="sort-right-list"> 
                    <li class="sort-right-item" v-for="(item, index) in objState" :key="index">
                      <div class="item-img">
                        <img :src="item.bannerUrl">
                      </div>
                      <div class="item-name">
                        {{item.name}}
                      </div>
                    </li>
                     
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

	
  
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import { mapState } from 'vuex';
  export default {
    data(){
      return {
        categor:{},
        index1:'0',
        objState:[]
      }
    },
    mounted(){
       this.$nextTick(() => { 
                this.scroll = new Bscroll('.sort-left-two',{
                  scrollY:true
                })
                 this.scroll = new Bscroll('.sort-right-content',{
                  scrollY:true
                })

            }) 
    
            this.$store.dispatch('getCategorys');
           
     
     },
     watch:{
       keys(){
          this.objState=this.keys.categoryL1List[0].subCateList
       }
       
     },
    computed:{
      ...mapState({
        keys:state=>state.categorys
        
      })
    },
methods:{
  go(path){
    this.$router.push(path)
  },
  aaa(n){
    this.index1=n;
    this.objState=this.keys.categoryL1List[n].subCateList
  }
}
      
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'

  .sort-container
    width 100%
    height 100%
    .sort-container-list
      width 100%
      height 100%
      .sort-header
        width 100%
        height px2rem(88px)
        position fixed
        z-index 10
        background white
       
        .sort-header-top
          width 100%
          height px2rem(88px)
          border-bottom px2rem(1px) solid #ccc
          line-height px2rem(80px)
          text-align center
          .sort-search
            width px2rem(690px)
            height px2rem(56px) 
            padding 0 px2rem(30px)
            box-sizing border-box
           
            .iconfont
              position absolute
              left px2rem(180px)
              top px2rem(10px)
              font-size px2rem(60px)
            .sousuo
              width px2rem(690px)
              height px2rem(56px)
              border-radius px2rem(12px)
              font-size px2rem(27px)
              box-sizing border-box
              padding-left px2rem(62px)
              background #ccc
              text-align center
      .sort-category
        width px2rem(750px)
        height px2rem(1148px)
        padding-top px2rem(88px)
        box-sizing border-box
        display flex
        .sort-left
          width px2rem(162px)
          height 100%
          .sort-left-two
            width px2rem(162px)
            position relative
            height px2rem(1000px)
            .sort-list
             width px2rem(162px)
             
             background white
             padding px2rem(40px) 0
             box-sizing border-box
             position absolute 
             left 0
             top 0
             .sort-items
                width px2rem(162px)
                margin-top px2rem(40px)
                &.lion 
                  margin-top 0
                
                a
                  display inline-block
                  width px2rem(162px)
                  height px2rem(50px)
                  font-size px2rem(27px)
                  text-align center
                  color #333
                  &.onn 
                    color red
                  
        .sort-right
          width px2rem(588px)
          height px2rem(1148px)
          background white
          padding px2rem(30px) px2rem(30px) px2rem(21px) px2rem(30px)
          box-sizing border-box
          
          .sort-right-content
            width px2rem(528px)
            height px2rem(820px)
            position relative
            .sort-right-content-two
              width px2rem(528px)
              position absolute 
              left 0
              top 0
              .sort-right-top
                width px2rem(528px)
                height px2rem(192px)
              .sort-right-bottom
                width px2rem(528px)
                height px2rem(648px)
                .sort-right-list
                  width px2rem(528px)
                  height px2rem(648px)
                  display flex
                  flex-wrap wrap
                  .sort-right-item
                    width px2rem(144px)
                    height px2rem(216px)
                    margin-right px2rem(34px)
                    &:nth-child(3n)
                      margin-right 0
                    &.odd
                       margin-right 0
                    .item-img
                      width px2rem(144px)
                      height px2rem(144px)
                      img
                        width px2rem(144px)
                        height px2rem(144px)
                    .item-name
                      width px2rem(144px)
                      height px2rem(72px)
                      font-size px2rem(24px)
                      color #333


                
              





      
        
           
</style>
