import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionproductComponent } from './accordionproduct.component';

describe('AccordionproductComponent', () => {
  let component: AccordionproductComponent;
  let fixture: ComponentFixture<AccordionproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
