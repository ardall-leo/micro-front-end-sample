<template>
  <div id="artemis">
    This is Artemis built using Vue.
    <h3>This color should be red using styling in Shared-Ui</h3>
    <router-view></router-view>
  </div>
</template>

<style>
#artemis {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:10px;
}
</style>