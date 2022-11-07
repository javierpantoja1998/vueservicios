import { createRouter, createWebHistory } from "vue-router";
import EmpleadosOficio from './components/EmpleadosOficio.vue';
import HomeComponent from './components/HomeComponent.vue';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import CochesComponente from './components/CochesComponente.vue';
import OficiosDetalle from './components/OficiosDetalle.vue';

const routes = [
    {
        path: "/" , component: HomeComponent
    },
    {
        path: "/empleados" , component: EmpleadosDetalle
    },
    {
        path: "/coches" , component: CochesComponente
    },
    {
        path: "/oficio" , component: EmpleadosOficio
    },
    {
        path: "/oficios/:oficio?" , component: OficiosDetalle
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;