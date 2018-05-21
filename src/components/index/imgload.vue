<template>
    <ul class="loadimg">
      <!--图片文件夹要放在外边static下，src下不显示-->
      <li><img v-lazy="'../../../static/img/index-main1.jpg'" alt=""/> </li>
      <li><img v-lazy="'../../../static/img/index-main2.jpg'" alt=""/> </li>
      <li><img v-lazy="'../../../static/img/index-main3.jpg'" alt=""/> </li>
      <li><img v-lazy="'../../../static/img/index-main4.jpg'" alt="da"/> </li>
      <li><img v-lazy="'../../../static/img/index-main5.jpg'"/> </li>
      <li><img v-lazy="'../../../static/img/index-main6.jpg'"/> </li>
      <li><img v-lazy="'../../../static/img/index-main7.jpg'"/> </li>
      <li><img v-lazy="'../../../static/img/index-main8.jpg'"/> </li>
      <li><img v-lazy="'../../../static/img/index-main9.jpg'"/> </li>
      <li><img v-lazy="'../../../static/img/index-main10.jpg'"/> </li>
    </ul>
</template>

<script>
    export default {
        name: "imgload"
    }
</script>

<style lang="scss" scoped>
  .loadimg{
    width: 100%;
    /*display: flex;*/
    /*display: -webkit-flex;*/
    /*display: -webkit-box;*/
  /*justify-content:flex-start;*/
    /*flex-flow:  row wrap;*/
    li{
      width: 50%;
      height:200px;
      img{
        width: 100%;
      }
    }
  }
</style>
