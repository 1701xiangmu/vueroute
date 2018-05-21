<template>
  <div>
    <p ref="message">包车游</p>
    <i v-el:food-wap>点我</i>
  </div>
</template>

<script>
  export default {
      mounted() {
          this.$refs.message.onclick=function(){
              alert(0);
          }
      }
  }
</script>

<style scoped>

</style>
