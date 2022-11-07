<template>
  <div>
    <h1>Detalles de los empleados</h1>
    <form method="POST"
    v-on:submit.prevent="buscarEmpleados">
        <label>Seleccione un empleado</label>
        <select class="form-control" v-model="idEmpleado">
            <option v-for="emp in empleados" 
            :key="emp.idEmpleado" 
            :value="emp.idEmpleado">
                {{emp.apellido}}
            </option>
        </select>
        <button class="btn btn-info">
            Detalles
        </button>
    </form>
    <div v-if="empleado">
        <h2 style="color:crimson">Apellido: {{empleado.apellido}}</h2>
        <dl>
            <dt>Oficio: </dt>
            <dd>{{empleado.oficio}}</dd>
            <dt>Salario: </dt>
            <dd>{{empleado.salario}}</dd>
            <dt>Departamentos: </dt>
            <dd>{{empleado.departamento}}</dd>
        </dl>
    </div>
  </div>
</template>

<script>
import Global from './../Global';
import axios from 'axios';


export default {
    name:"EmpleadosDetalle",
    methods:{
        buscarEmpleados(){
            
            var request = "api/Empleados/" + this.idEmpleado;
            var url = Global.urlEmpleados + request;
            console.log(url)
            axios.get(url).then(res=>{
                this.empleado = res.data
            });
        }
    },
    data(){
        return{
            empleados:[],
            //Lo asociamos al v-model del select
            idEmpleado: 0,
            empleado:null
        }
    },
    mounted(){
        var request = "api/empleados";
        var url = Global.urlEmpleados + request;
        axios.get(url).then(res=>{
            this.empleados = res.data;
        });
    }
}
</script>

<style>

</style>