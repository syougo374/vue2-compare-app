<template>
  <div>
    <h2>user id: {{ userId }}の投稿</h2>
    <router-link :to="'/user/' + (Number(userId) + 1) + '/post'">user:id3</router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
    props:[
      'userId'
    ]
  }
</script>