<template>
    <div>
      <content-parent></content-parent>
      <Head-tit :title="message"></Head-tit>
        <header-banner></header-banner>
        <bannner-nav></bannner-nav>
      <img-load></img-load>

    </div>
</template>

<script>
  import HeadTit from "../components/index/HeadTit";
  import HeaderBanner from "../components/index/HeaderBanner";
  import BannnerNav from "../components/index/BannerNav";
  import ImgLoad from  "../components/index/imgload";
  import contentParent from "../components/index/ContentParent";
  import BannerInx from "../service/index";
    export default {
     //   name: "indexheader",
        components:{
          HeadTit,
          HeaderBanner,
          BannnerNav,
          ImgLoad,
          contentParent
        },
        data(){
          return{
            message:'nihao'
          }
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
