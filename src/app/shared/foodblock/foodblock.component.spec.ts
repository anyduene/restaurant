import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodblockComponent } from './foodblock.component';

describe('FoodblockComponent', () => {
  let component: FoodblockComponent;
  let fixture: ComponentFixture<FoodblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
