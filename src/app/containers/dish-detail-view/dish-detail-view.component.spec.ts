import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetailViewComponent } from './dish-detail-view.component';

describe('DishDetailViewComponent', () => {
  let component: DishDetailViewComponent;
  let fixture: ComponentFixture<DishDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
