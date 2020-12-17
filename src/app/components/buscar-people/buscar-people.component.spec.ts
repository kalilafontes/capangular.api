import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPeopleComponent } from './buscar-people.component';

describe('BuscarPeopleComponent', () => {
  let component: BuscarPeopleComponent;
  let fixture: ComponentFixture<BuscarPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
