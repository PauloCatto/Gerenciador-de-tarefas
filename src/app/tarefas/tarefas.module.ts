import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefasComponent } from './cadastrar-tarefas';
import { EditarTarefasComponent } from './editar-tarefas/editar-tarefas.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TarefaService]
})
export class TarefasModule { }
