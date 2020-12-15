import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSsDetailsComponent } from './parent-ss-details.component';

describe('ParentSsDetailsComponent', () => {
  let component: ParentSsDetailsComponent;
  let fixture: ComponentFixture<ParentSsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentSsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
