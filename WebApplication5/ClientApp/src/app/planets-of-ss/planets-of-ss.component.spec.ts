import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsOfSsComponent } from './planets-of-ss.component';

describe('PlanetsOfSsComponent', () => {
  let component: PlanetsOfSsComponent;
  let fixture: ComponentFixture<PlanetsOfSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsOfSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsOfSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
