<template>
  <div>
    <h1>another</h1>
    <p>{{$route.params.id}}</p>
    <hr>
    <p>{{ this.idData }}</p>
    <button @click="getUrlId">btn</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idData: '',
    }
  },
  methods: {
    getUrlId() {
      this.idData = this.id;
    }
  },
  props: [
    "id",
  ]
}
</script>