<template>
  <div>
    <h1>Another Page 2</h1>
    <router-link to="/another1">Another pate 1</router-link>
    <router-link :to="'/another2/' + 1 + '/another3'">Another pate 3</router-link>
  </div>
</template>