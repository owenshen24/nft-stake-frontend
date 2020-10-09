import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetamonsComponent } from './betamons.component';

describe('BetamonsComponent', () => {
  let component: BetamonsComponent;
  let fixture: ComponentFixture<BetamonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetamonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetamonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
