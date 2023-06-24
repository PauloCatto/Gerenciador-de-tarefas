import { Routes } from "@angular/router";
import { ListarTarefaComponent } from "./listar-tarefa";
import { CadastrarTarefasComponent } from "./cadastrar-tarefas";
import { EditarTarefasComponent } from "./editar-tarefas";

export const TarefaRoutes: Routes = [
    {
        path: '',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent
    }

]