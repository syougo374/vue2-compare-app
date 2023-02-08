<template>
  <div>
    <h1>HomeTest page</h1>
    <p>{{ storeCount }}</p>
    <p>ダブルカウント: {{ doubleCount }}</p>
    <p>トリプルカウント: {{ tripleCount }}</p>
    <!-- <button @click="increment(2)">プラス</button>
    <button @click="decrement(2)">マイナス</button> -->
    <button @click="increment(2)">プラス</button>
    <button @click="decrement(2)">マイナス</button>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  // import { mapMutations } from 'vuex';

  export default {
    computed: {
      storeCount(){
        return this.$store.state.count;
      },
      ...mapGetters(['doubleCount', 'tripleCount'])
      // doubleCount(){
      //   return this.$store.getters.doubleCount;
      // },
      // tripleCount(){
      //   return this.$store.getters.tripleCount;
      // },
    },
    methods: {
      increment(){
        this.$store.dispatch('increment',2);
      },
      decrement(){
        this.$store.dispatch('decrement',2);
      }
      // increment(){
      //   this.$store.commit('increment', 2);
      // },
      // decrement(){
      //   this.$store.commit('decrement', 2);
      // },
      // ...mapMutations(['increment', 'decrement'])
      // increment(){
      //   this.$store.state.count ++
      // },
      // decrement(){
      //   this.$store.state.count --
      // }
    }
  }
</script>