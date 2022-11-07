<template>
  <div>
    <h1>API COCHES</h1>
    <div v-for="car in coches" :key="car.idcoche">
      <h1 style="color:aqua">Marca: {{car.marca}}</h1>
      <h1 style="color:aqua">Modelo:{{car.modelo}}</h1>
      <img :src="car.imagen" style="width:150px; height: 150px;" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//Aqui podemos declarar variables para usarlas
//dentro de cualquier metodo del componente
var urlApi = "https://apicochespaco.azurewebsites.net/";
export default {
    name:"CochesComponente",
    data(){
      //Vamos a tener un array con todos los coches
      return{
        coches: []
      }
      
    },
    methods:{
      //Vamos a cargar los coches
      loadCoches(){
        var request = "/webresources/coches";
        var url = urlApi + request;
        axios.get(url).then(res=>{
          this.coches = res.data
        });
      }
    },
    mounted(){
      this.loadCoches();
    }
}
</script>

<style>

</style>