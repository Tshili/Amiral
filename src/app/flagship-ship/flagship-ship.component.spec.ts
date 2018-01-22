import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagshipShipComponent } from './flagship-ship.component';

describe('FlagshipShipComponent', () => {
  let component: FlagshipShipComponent;
  let fixture: ComponentFixture<FlagshipShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagshipShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagshipShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
