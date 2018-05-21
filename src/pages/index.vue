<template>
    <div>
        <header-banner></header-banner>
        <bannner-nav></bannner-nav>
    </div>
</template>

<script>
  import HeaderBanner from "../components/index/HeaderBanner";
  import BannnerNav from "../components/index/BannerNav";
  import BannerInx from "../service/index";
    export default {
     //   name: "indexheader",
        components:{
          HeaderBanner,
          BannnerNav
        },
      // data(){
      //   return {
      //     imgList:[]
      //   }
      // },
      // created:function(){
      //   this.initData();
      // },
      methods:{
        // btnajax:function(){
        //   var that = this;
        //   this.$http({
        //     method:'get',
        //     url:'/msg',
        //     params: {                    //需要发送的数据
        //       // name: 'zhangwenwu2',
        //       // age: '15'
        //     }
        //   }).then(function (res) {
        //     //var res = JSON.parse(res);
        //
        //    that.imgList=res.data.img
        //     console.log(res.data.img)
        //   }).catch(function (err) {
        //     console.log(err);
        //   });
        // }
        // initData:function() {
        //   this.imgList = BannerInx.getBanner();
        // }
      }
    }
</script>

<style scoped>

</style>
