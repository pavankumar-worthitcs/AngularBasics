import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdateFormComponent } from './employee-update-form.component';

describe('EmployeeUpdateFormComponent', () => {
  let component: EmployeeUpdateFormComponent;
  let fixture: ComponentFixture<EmployeeUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeUpdateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
