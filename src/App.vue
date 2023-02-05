<template>
  <div>
    <h1>test</h1>
    <router-link to="home" active-class="active" exact>Go back to the homepage</router-link><br>
    <router-link to="/another" active-class="active" exact>anohter</router-link>
    <router-view></router-view>
    <button @click="changeHome">changeHome</button>
    <button @click="changeAnother">changeAnother</button>
  </div>
</template>
<script>
export default{
  methods: {
    changeHome(){
      this.$router.push('/home')
    },
    changeAnother(){
      this.$router.push('/another')
    }
  }
}
</script>
<style>
  .active {
    color: red;
  }
</style>


