<template>
  <div id='search'>
     <div class="g-fl-header">
        <div class="g-fl-header1">
          <div class="g-fl-header1-1">
            <!-- <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png" alt=""> -->
            <a class="logo" href="##"></a>
            <div class="g-fl-header1-2">
              <p>前往APP领1000元新用户现金礼包</p>
              <p>网易自营 品质生活</p>
            </div>
            <button class="openbtn">打开APP</button>
          </div>
        </div>
        <div class="g-fl-header2">
          <div class="g-fl-header2-1">
            
            <i class="iconfont icon-search "></i>
            <!-- <span class="placeholder">搜索商品, 共21572款好物</span> -->
            <input type="text" placeholder="搜索商品, 共21572款好物" class="placeholder" v-model="datas" @keyup.enter="qequest">
          </div>
          <div class="g-fl-header2-2" @click="$router.back()">取消</div>
        </div>
      </div>
      <div class="hotSearch">
        <div class="hotSearch-top">
          <div class="wenzi">热门搜索</div>
           <ul v-if="datas.length>0">
            <li v-for="(item, index) in aa" :key="index">{{item}}</li>
          </ul>
          <ul class="hotSearch-buttom" v-else>
            <li class="hotSearch-buttom-item" v-for="(item, index) in keyss.defaultKeywords" :key="index" ><p href="##">{{item.keyword}}</p></li>
           
            
          </ul>

         
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
  export default {
    created(){
     
    },
    data(){
      return{
        datas:'',
        aa:''
      }
    
    },
    computed:{
       ...mapState({
        keys:state=>state.value
      }),
       ...mapState({
        keyss:state=>state.shops
      })
    },
    watch:{
      keys(){
      this.aa=this.keys
      },
      datas(){
         this.$store.dispatch('getSearch',this.datas)
          
      }
    },
    mounted(){
      this.$store.dispatch('getSearchTwo')
    }
   
    }
    
  
  
</script>

<style lang="stylus" rel="stylesheet/stylus" >
@import "../../common/stylus/mixins.styl"
#search
  position relative
  width 100%
  height 100%
  background #ccc
  padding px2rem(192px) 0 px2rem(100px)
  box-sizing border-box
  overflow hidden

  // .kong
  //   width 100%
  //   height px2rem(192px)
  .g-fl-header
    position fixed
    left 0
    top 0
    width: px2rem(750px)
    height px2rem(192px)
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    color #cccccc
    z-index 90
    .g-fl-header1
      width: 100%
      height: px2rem(104px)
      .g-fl-header1-1
        width: px2rem(750px)
        height px2rem(104px)
        background: #000;
        box-sizing border-box
        padding 0 px2rem(20px)
        display flex
        justify-content space-around
        align-items center
        .logo
          width px2rem(72px)
          height px2rem(72px)
          color #cccccc
          background:  url(./images/111.png) 0 0 no-repeat;
          background-position: 0 -3.65333rem;
        .g-fl-header1-2
          height: 100%
          margin-left px2rem(-20px)
          font-size px2rem(26px)
          display flex
          flex-direction column
          justify-content center
          p
          padding px2rem(4px)
        .openbtn
          width: rem(138);
          height rem(52)
          background: #B4282D;
          color #fff
          border none
          font-size px2rem(26px)
    .g-fl-header2
      width: px2rem(750px)
      height px2rem(87.98px)
      box-sizing border-box
      display flex
      justify-content space-around
      align-items center
      background #ededed
      padding px2rem(15px) px2rem(20px)
      .g-fl-header2-1
        position relative
        width: 100%
        height: 100%
        display flex
        justify-content center
        align-items center
        background: #ededed;
        border-radius px2rem(5px)
      .g-fl-header2-2
        font-size px2rem(30px)
        color #333
        white-space nowrap
        margin-left px2(70px)
      .icon-search
        font-size px2rem(35px)
        padding-right px2rem(20px)
      .placeholder
        font-size px2rem(35px)
        color #333333
        padding-left px2rem(50px)
        height px2rem(60px)
      .icon-search
        position absolute
        left px2rem(50px)
        top px2rem(10px)
        
  .hotSearch
    width 100%
    display flex
    flex-direction column
    justify-content left 
    align-items center
    box-sizing border-box
  
    .hotSearch-top
      width 100%
      
      background white
      .wenzi
        width 100%
        height px2rem(90px) 
        color #333
        font-size px2rem(41px)
        line-height px2rem(90px)
    .hotSearch-buttom
      width 100%
      display flex
      flex-wrap wrap
      .hotSearch-buttom-item
        height px2rem(45px)
        padding 0 px2rem(15px)
        border px2rem(1px) solid #cccccc
        margin 0 px2rem(32px) px2rem(32px) 0  
        font-size px2rem(30px)
        text-align center
        line-height px2rem(45px)
        color #333
        &.active
          
          border rem(1px) solid #b4282d
          color #b4282d
</style>
