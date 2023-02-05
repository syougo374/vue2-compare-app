<template>
  <div>
    <h1>test</h1>
    <router-link to="home" active-class="active" exact>Go back to the homepage</router-link><br>
    <router-link :to="'/another/' + Number(id) + '/'" active-class="active" exact>anohter</router-link><br>
    <router-link :to="'/user/' + id + '/post'" active-class="active" exact>user/post</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
      <button @click="changeHome">changeHome</button>
    <button @click="changeAnother">changeAnother</button>
    <hr>
    <button @click="increment">inc</button>
    <p>{{ inc }}</p>
  </div>
</template>
<script>
export default{
  data(){
    return{
      id: 0,
    }
  },
  methods: {
    changeHome(){
      this.$router.push('/home')
    },
    changeAnother(){
      this.$router.push("/another")
    },
    increment(){
      this.id ++
    }
  },
  computed: {
    inc(){
      return this.id
    }
  }
}
</script>
<style>
  .active {
    color: red;
  }
  .fade-enter, .fade-enter-active{
  }
  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave-active{
    transition: opacity 1s;
  }
</style>


