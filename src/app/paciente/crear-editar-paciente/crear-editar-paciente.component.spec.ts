import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarPacienteComponent } from './crear-editar-paciente.component';

describe('CrearEditarPacienteComponent', () => {
  let component: CrearEditarPacienteComponent;
  let fixture: ComponentFixture<CrearEditarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEditarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
