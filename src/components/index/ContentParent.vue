<template>
  <div>
    <span :mesag="paresnts">{{tit}}</span>
    <content-childer  v-on:listenchild="jieshou"></content-childer>
  </div>
</template>

<script>
  import ContentChilder from './ContentChilder';
    export default {
        name: "content-parent",
        components:{
          ContentChilder,
        },
      data(){
        return{
          paresnts:'jnjk',
          tit:''
        }
      },
        methods:{
          jieshou:function(data){
            this.tit=data
          }
        }
    }
</script>

<style scoped>

</style>
