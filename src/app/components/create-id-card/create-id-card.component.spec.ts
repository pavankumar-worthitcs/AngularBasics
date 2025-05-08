import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdCardComponent } from './create-id-card.component';

describe('CreateIdCardComponent', () => {
  let component: CreateIdCardComponent;
  let fixture: ComponentFixture<CreateIdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIdCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
