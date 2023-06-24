import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
  
  {
    path: 'http://localhost:4200/tarefas',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
