import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefasComponent } from './cadastrar-tarefas.component';

describe('CadastrarTarefasComponent', () => {
  let component: CadastrarTarefasComponent;
  let fixture: ComponentFixture<CadastrarTarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarTarefasComponent]
    });
    fixture = TestBed.createComponent(CadastrarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
