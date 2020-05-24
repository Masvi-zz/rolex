<template>
  <div id="app">
    <BaseRolex msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import BaseRolex from './components/BaseRolex.vue'

export default {
  name: 'App',
  components: {
    BaseRolex,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #e6ecf0;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif; 
  text-rendering: optimizeLegibility !important;
  --webkit-font-smoothing: antialiased !important;
}

input, 
button{
  outline: 0;
}

</style>
