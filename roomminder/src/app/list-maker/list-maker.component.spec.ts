import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMakerComponent } from './list-maker.component';

describe('ListMakerComponent', () => {
  let component: ListMakerComponent;
  let fixture: ComponentFixture<ListMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
