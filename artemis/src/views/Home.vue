<template>
  <div class="home">
    <h1>This is search page</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <Search msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    Search
  }
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}

img{
  width:100px;
}
</style>