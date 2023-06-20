import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCostomerComponent } from './create-costomer.component';

describe('CreateCostomerComponent', () => {
  let component: CreateCostomerComponent;
  let fixture: ComponentFixture<CreateCostomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCostomerComponent]
    });
    fixture = TestBed.createComponent(CreateCostomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
