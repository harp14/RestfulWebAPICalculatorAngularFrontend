import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationRadioButtonComponent } from './operation-radio-button.component';

describe('OperationRadioButtonComponent', () => {
  let component: OperationRadioButtonComponent;
  let fixture: ComponentFixture<OperationRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationRadioButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperationRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
