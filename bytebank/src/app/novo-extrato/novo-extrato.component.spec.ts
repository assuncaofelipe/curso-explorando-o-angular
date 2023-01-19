import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoExtratoComponent } from './novo-extrato.component';

describe('NovoExtratoComponent', () => {
  let component: NovoExtratoComponent;
  let fixture: ComponentFixture<NovoExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoExtratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
