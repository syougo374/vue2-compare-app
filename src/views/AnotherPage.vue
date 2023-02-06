<template>
  <div>
    <h1>Another pate 1</h1>
    <router-link :to="'/another2/' + id">Another pate 2</router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        message: 'hi',
        id: 1,
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        if(vm.message == 'hi') {
          console.log(vm.message)
        }
      })
    },
    beforeRouteUpdate(to, from, next) {
      next()
    },
    beforeRouteLeave(to, from, next) {
      let isLeave = window.confirm("本当に離れる？")
      if(isLeave) {
        next()
      }
    },
  }
</script>