import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../views/Tarefas.vue"
import Projetos from "../views/Projetos.vue"

const rotas: RouteRecordRaw[] = [
    {
    path: '/',
    name: 'Tarefa',
    component: Tarefas
    },
    {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
    }, 
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;