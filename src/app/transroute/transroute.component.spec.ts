import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransrouteComponent } from './transroute.component';

describe('TransrouteComponent', () => {
  let component: TransrouteComponent;
  let fixture: ComponentFixture<TransrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
