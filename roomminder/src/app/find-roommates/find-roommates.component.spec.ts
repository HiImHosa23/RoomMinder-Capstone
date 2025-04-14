import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRoommatesComponent } from './find-roommates.component';

describe('FindRoommatesComponent', () => {
  let component: FindRoommatesComponent;
  let fixture: ComponentFixture<FindRoommatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindRoommatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindRoommatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
