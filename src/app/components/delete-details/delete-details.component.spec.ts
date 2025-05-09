import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDetailsComponent } from './delete-details.component';

describe('DeleteDetailsComponent', () => {
  let component: DeleteDetailsComponent;
  let fixture: ComponentFixture<DeleteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
