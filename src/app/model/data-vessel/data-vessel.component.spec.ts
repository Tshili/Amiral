import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVesselComponent } from './data-vessel.component';

describe('DataVesselComponent', () => {
  let component: DataVesselComponent;
  let fixture: ComponentFixture<DataVesselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataVesselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
