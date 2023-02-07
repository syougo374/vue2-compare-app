<template>
  <div>
    <h1>HomeTest page</h1>
    <p>{{ storeCount }}</p>
    <p>ダブルカウント: {{ doubleCount }}</p>
    <p>トリプルカウント: {{ tripleCount }}</p>
    <button @click="increment">プラス</button>
    <button @click="decrement">マイナス</button>

  </div>
</template>

<script>
  export default {
    computed: {
      storeCount(){
        return this.$store.state.count;
      },
      doubleCount(){
        return this.$store.getters.doubleCount;
      },
      tripleCount(){
        return this.$store.getters.tripleCount;
      }
    },
    methods: {
      increment(){
        this.$store.state.count ++
      },
      decrement(){
        this.$store.state.count --
      }
    }
  }
</script>