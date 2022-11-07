<template>
  <!-- <CochesComponente/> -->
  <!-- <EmpleadosDetalle/> -->
  <MenuRutas/>
  <router-view></router-view>
</template>

<script>
// import EmpleadosDetalle from './components/EmpleadosDetalle.vue'
import MenuRutas from './components/MenuRutas';
// import CochesComponente from './components/CochesComponente.vue';

export default {
  name: 'App',
  components: {
    // EmpleadosDetalle
    // CochesComponente
    MenuRutas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
