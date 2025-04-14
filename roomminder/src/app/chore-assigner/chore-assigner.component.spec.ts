import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreAssignerComponent } from './chore-assigner.component';

describe('ChoreAssignerComponent', () => {
  let component: ChoreAssignerComponent;
  let fixture: ComponentFixture<ChoreAssignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoreAssignerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoreAssignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
