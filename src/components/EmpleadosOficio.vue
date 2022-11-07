<template>
  <div>
    <h1>Oficios Empleados</h1>
    <label>Selecciona oficio</label>
    <select class="form-control" v-on:change="cargarIdEmpleados()" v-model="idEmpleado">
      <option v-for="oficio in oficios"
      :key="oficio"
      :value="oficio">
    {{oficio}}</option>
    </select>
  </div>
</template>

<script>
import Global from './../Global';
import axios from 'axios';
export default {
  name:"EmpleadosOficio",
  methods:{
    buscarOficio(){
      var request = "/api/Empleados/Oficios/";
      var url = Global.urlEmpleados + request;
      axios.get(url).then(res=>{
        
        this.oficios = res.data
      })
    },
    cargarIdEmpleados(){
      //Hemos redirigido al componente OficiosDetalle
      this.$router.push("/oficios/" + this.idEmpleado);
    }

  },
  mounted(){
    this.buscarOficio();

  },
  data(){
    return{
      oficios:[]
    }
    
  }
}
</script>

<style>

</style>