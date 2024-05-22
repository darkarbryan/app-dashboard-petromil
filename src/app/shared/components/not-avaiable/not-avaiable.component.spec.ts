import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAvaiableComponent } from './not-avaiable.component';

describe('NotAvaiableComponent', () => {
  let component: NotAvaiableComponent;
  let fixture: ComponentFixture<NotAvaiableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAvaiableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAvaiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
