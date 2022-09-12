import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarPersonaComponent } from './crear-editar-persona.component';

describe('CrearEditarPersonaComponent', () => {
  let component: CrearEditarPersonaComponent;
  let fixture: ComponentFixture<CrearEditarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEditarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearEditarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
