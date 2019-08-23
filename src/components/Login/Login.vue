<template>
  <div>
     <Header></Header>
      <div class="yanImg">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>

    <div class="phoneLogin" v-if="$route.params.id==='1'">
        <div class="phoneNumber">
            <input type="text" placeholder="请输入手机号" v-model="phone" >
             <p style="color: red">{{msg}}</p>

        </div>
        <div class="YZM">
            <input type="text" placeholder="请输入手机验证码">
            <button class="getYZM">获取验证码</button>
        </div>
        <div class="qusitionYanzheng">
            <span class="qusition">遇到问题?</span>
            <span class="yanzheng">使用密码验证登录</span>
        </div>
        <button class="login">登录</button>
        <p class="other" @click="gobackTo">其他登录方式></p>
    </div>

    <div class="eMailLogin" v-else >
        <div class="eMailNumber">
            <input type="text" placeholder="邮箱账号">
             <p style="color: red">{{msg}}</p>
            <input type="text" placeholder="密码">
        </div>
        <div class="fogetMessageZhanghao">
            <span>注册账号</span>
            <span class="fogetMessage">忘记密码</span>
        </div> 
        <button class="login">登录</button>
        <p class="other" @click="gobackTo">其他登录方式></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../Header/Header'
  export default {
     data(){
         return{
             phone:'',
             email:''
         }
     },
    //  computed:{
    //      isRightPhone(){
              
    //            return reg
    //      }
    //  },
     computed:{
        
         msg(){
             var reg = /^1[3456789]\d{9}$/
             var email_reg =/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/
              
            //    var reg = /^1[3456789]\d{9}$/
           if(reg.test(this.phone)||email_reg.test(this.email)){
              return '输入格式正确'
           
           }else{
               return '输入格式不正确'
           }
         }
     },
      components:{
          Header
      },
     methods:{
         gobackTo(){
             this.$router.push('/profile')
         }
        
     }
       
 // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
       
          
      
       
    
 }

  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.yanImg
      text-align center
      padding-top px2rem(60px)
      border-top 1px solid #ccc
      img 
          width px2rem(192px)
          height px2rem(64px)
.phoneLogin
      position relative
      padding-left px2rem(44px)
      padding-top px2rem(72px)
      .getYZM
          position absolute
          right px2rem(116px)
          top px2rem(220px)
          border 1px solid #ccc
          outline none
          background #fff
          font-size px2rem(29px)
      input 
          width px2rem(590px)
          height px2rem(42px)
          font-size px2rem(28px)
          padding px2rem(20px) 0
          border-bottom 1px solid #ccc
      .phoneNumber
          margin-bottom px2rem(40px)
      .qusitionYanzheng
          display flex
          justify-content space-between
          font-size px2rem(28px)
          color #333
          padding px2rem(40px) px2rem(44px) 0PX 0PX
      .login
          width px2rem(670px)
          height px2rem(90px)
          background #DD1A21
          color #fff
          border none
          margin-top px2rem(48px)
          border-radius px2rem(10px)
          font-size px2rem(46px)
      .other
          font-size px2rem(28px)
          margin-top px2rem(88px)
          text-align center
      .eMailLogin
        position relative
        padding-left px2rem(44px)
        padding-top px2rem(168px)
        .eMailNumber
            margin-bottom px2rem(40px)
            input
                width px2rem(590px)
                height px2rem(42px)
                font-size px2rem(28px)
                padding px2rem(20px) 0
                border-bottom 1px solid #ccc
        .fogetMessageZhanghao
            display flex
            justify-content space-between
            span 
                font-size px2rem(28px)
            .fogetMessage
                padding-right px2rem(112px)
        .login
            width px2rem(670px)
            height px2rem(90px)
            background #DD1A21
            color #fff
            border none
            margin-top px2rem(48px)
            border-radius px2rem(10px)
            font-size  px2rem(27px)
        .other
            font-size px2rem(56px)
            margin-top px2rem(88px)
            text-align center
            



  
 
</style>
