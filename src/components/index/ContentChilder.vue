<template>
    <div>
      <button>向父组件传值</button>
    </div>
</template>

<script>
    export default {
        name: "content-childer",
        created(){
          this.chuanzhi()
        },
        methods:{
          chuanzhi:function(){
            console.log(33)
            this.$emit("listenchild",'这是子传父值');
          }
      }
    }
</script>

<style scoped>

</style>
