<template>
    <div>
        <p>fff</p>
    </div>
</template>

<script>
    export default {
        name: "detailid",
      data() {
        return {
          navimg:[],
       //   route:["BaoYou","Guihua","JiPiao","QuanGou"]//用name跳转时配置的名字
          // route:["/BaoYou","/Guihua","/JiPiao","/QuanGou"]//用路由跳转时配置的名字
        }
      },
      created () {
        var newsID=this.$route.query.id;//获取传过来的id
        console.log(newsID)
        this.$http({
          method:'get',
          url:'http://jsonplaceholder.typicode.com/photos',
          params:{
           // name: 'zhangwenwu2',
            id: 'newsID'
          }
        }).then((res) => {
          this.navimg=res.data;
          console.log(res.data)
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
</script>

<style scoped>

</style>
