import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarSystemWithExoplanetsComponent } from './solar-system-with-exoplanets.component';

describe('SolarSystemWithExoplanetsComponent', () => {
  let component: SolarSystemWithExoplanetsComponent;
  let fixture: ComponentFixture<SolarSystemWithExoplanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarSystemWithExoplanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarSystemWithExoplanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
