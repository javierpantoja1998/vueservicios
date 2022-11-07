<template>
  <div>
    <h1>Oficios Detalle</h1>
    <table border="1px">
        <thead>
            <tr>
            <th>Nombre:</th>
        </tr>
        </thead>
        <tbody v-for="empleado in empleadosOficio" :key="empleado.idEmpleado" :value="empleado.idEmpleado">
            <tr>
            <td>
                {{empleado.apellido}}
            </td>
            <td>
                {{empleado.oficio}}
            </td>
            <td>
                {{empleado.salario}}
            </td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Global from './../Global';

export default {
    name:"OficiosDetalles",
    methods:{
        loadEmpleadosOficios(){
            //this.$route.params.oficio -> oficio lo recogemos de la linea 29 de EmpleadosOficio
            var request = "/api/Empleados/EmpleadosOficio/" + this.$route.params.oficio;
            var url = Global.urlEmpleados + request;
            axios.get(url).then(res=>{
                console.log(res.data)
                this.empleadosOficio = res.data
            }); 
        }
    },
   
    data(){
        return{
            empleadosOficio: []
        }
        
    },
    mounted(){
        this.loadEmpleadosOficios();
    }
}
</script>

<style>

</style>